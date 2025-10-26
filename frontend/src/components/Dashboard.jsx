import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { FaEdit, FaTrash, FaShoppingCart } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SalesCharts from "./SalesCharts";

export default function Dashboard() {
  const [donuts, setDonuts] = useState([]);
  const [cart, setCart] = useState([]);
  const [formData, setFormData] = useState({ nombre: "", sabor: "", precio: "", stock: "" });
  const [editingId, setEditingId] = useState(null);
  const [ventasHoy, setVentasHoy] = useState([]);

  useEffect(() => { fetchDonuts(); }, []);

  const fetchDonuts = async () => {
    try {
      const res = await fetch("http://localhost:3000/api/donuts");
      const data = await res.json();
      setDonuts(data);
    } catch (error) { console.error(error); }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editingId) {
        await fetch(`http://localhost:3000/api/donuts/${editingId}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        });
        toast.success("✏️ Donut actualizada!");
        setEditingId(null);
      } else {
        await fetch("http://localhost:3000/api/donuts", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        });
        toast.success("🍩 Donut creada!");
      }
      setFormData({ nombre: "", sabor: "", precio: "", stock: "" });
      fetchDonuts();
    } catch (error) { console.error(error); toast.error("❌ Error al guardar dona"); }
  };

  const handleEdit = (dona) => {
    setFormData({ nombre: dona.nombre, sabor: dona.sabor, precio: dona.precio, stock: dona.stock });
    setEditingId(dona._id);
  };

  const handleDelete = async (id) => {
    if (!confirm("¿Seguro que deseas eliminar esta dona?")) return;
    try {
      await fetch(`http://localhost:3000/api/donuts/${id}`, { method: "DELETE" });
      toast.info("🗑️ Donut eliminada!");
      fetchDonuts();
    } catch (error) { console.error(error); toast.error("❌ Error al eliminar"); }
  };

  const addToCart = (dona) => {
    setCart([...cart, { ...dona, cartId: uuidv4() }]);
    toast.success("🛒 Donut añadida al carrito");
  };

  const generarFactura = () => {
    if (cart.length === 0) return toast.warn("Carrito vacío");
    const total = cart.reduce((acc, item) => acc + parseFloat(item.precio), 0);
    const factura = {
      id: uuidv4(),
      fecha: new Date().toLocaleString(),
      total,
      items: cart,
    };
    setVentasHoy([...ventasHoy, factura]);
    setCart([]);
    toast.success(`📄 Factura generada! Total: €${total.toFixed(2)}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-pink-50 to-pink-100 p-6 font-sans">
      <ToastContainer position="top-right" autoClose={2000} />
      <h1 className="text-4xl text-center text-pink-600 font-bold mb-6">🍩 Donatella Dashboard</h1>

      {/* Formulario */}
      <form onSubmit={handleSubmit} className="flex flex-wrap gap-3 justify-center mb-6">
        <input type="text" placeholder="Nombre" name="nombre" value={formData.nombre} onChange={(e)=>setFormData({...formData,[e.target.name]:e.target.value})} className="p-2 rounded border border-pink-300"/>
        <input type="text" placeholder="Sabor" name="sabor" value={formData.sabor} onChange={(e)=>setFormData({...formData,[e.target.name]:e.target.value})} className="p-2 rounded border border-pink-300"/>
        <input type="number" placeholder="Precio" name="precio" value={formData.precio} onChange={(e)=>setFormData({...formData,[e.target.name]:e.target.value})} className="p-2 rounded border border-pink-300"/>
        <input type="number" placeholder="Stock" name="stock" value={formData.stock} onChange={(e)=>setFormData({...formData,[e.target.name]:e.target.value})} className="p-2 rounded border border-pink-300"/>
        <button type="submit" className="bg-pink-500 hover:bg-pink-600 text-white font-bold px-4 py-2 rounded">
          {editingId ? "Actualizar" : "Agregar"}
        </button>
      </form>

      {/* Tabla de donas */}
      <div className="overflow-x-auto mb-6">
        <table className="min-w-full bg-white rounded shadow-md">
          <thead className="bg-pink-500 text-white">
            <tr>
              <th className="py-2 px-4">Nombre</th>
              <th className="py-2 px-4">Sabor</th>
              <th className="py-2 px-4">Precio (€)</th>
              <th className="py-2 px-4">Stock</th>
              <th className="py-2 px-4">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {donuts.map(dona => (
              <tr key={dona._id} className="text-center border-b border-pink-200">
                <td>{dona.nombre}</td>
                <td>{dona.sabor}</td>
                <td>{dona.precio}</td>
                <td>{dona.stock}</td>
                <td className="flex justify-center gap-2 py-2">
                  <button className="bg-yellow-400 px-2 py-1 rounded text-white hover:bg-yellow-500" onClick={()=>handleEdit(dona)}><FaEdit/></button>
                  <button className="bg-red-500 px-2 py-1 rounded text-white hover:bg-red-600" onClick={()=>handleDelete(dona._id)}><FaTrash/></button>
                  <button className="bg-green-500 px-2 py-1 rounded text-white hover:bg-green-600" onClick={()=>addToCart(dona)}><FaShoppingCart/></button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Carrito y resumen */}
      <div className="flex flex-wrap justify-center gap-6">
        <div className="bg-white p-4 rounded shadow-md w-80">
          <h2 className="text-xl font-bold mb-2">🛒 Carrito ({cart.length})</h2>
          {cart.map(item => <div key={item.cartId} className="flex justify-between border-b py-1">{item.nombre} - €{item.precio}</div>)}
          <button className="mt-2 w-full bg-pink-500 hover:bg-pink-600 text-white py-2 rounded" onClick={generarFactura}>Generar Factura</button>
        </div>

        <div className="bg-white p-4 rounded shadow-md w-80">
          <h2 className="text-xl font-bold mb-2">📊 Ventas del día ({ventasHoy.length})</h2>
          {ventasHoy.map(f => (
            <div key={f.id} className="border-b py-1">
              <p>ID: {f.id}</p>
              <p>Total: €{f.total.toFixed(2)}</p>
              <p>Items: {f.items.length}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Gráficos */}
      <SalesCharts ventasHoy={ventasHoy} />
    </div>
  );
}

