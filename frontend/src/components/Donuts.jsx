import { useEffect, useState } from "react";

export default function Donuts() {
  const [donuts, setDonuts] = useState([]);
  const [formData, setFormData] = useState({
    nombre: "",
    sabor: "",
    precio: "",
    stock: ""
  });
  const [editingId, setEditingId] = useState(null);

  // 🔹 Obtener todas las donas al cargar
  useEffect(() => {
    fetchDonuts();
  }, []);

  const fetchDonuts = async () => {
    try {
      const res = await fetch("http://localhost:3000/api/donuts");
      const data = await res.json();
      setDonuts(data);
    } catch (error) {
      console.error("❌ Error al obtener donuts:", error);
    }
  };

  // 🔹 Manejar cambios en los inputs
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // 🔹 Crear o editar una dona
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editingId) {
        // Actualizar dona existente
        const res = await fetch(`http://localhost:3000/api/donuts/${editingId}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData)
        });
        if (res.ok) {
          alert("✏️ Donut actualizada correctamente!");
          setEditingId(null);
        }
      } else {
        // Crear nueva dona
        const res = await fetch("http://localhost:3000/api/donuts", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData)
        });
        if (res.ok) {
          alert("🍩 Donut creada correctamente!");
        }
      }

      setFormData({ nombre: "", sabor: "", precio: "", stock: "" });
      fetchDonuts();
    } catch (error) {
      console.error("❌ Error al guardar donut:", error);
    }
  };

  // 🔹 Llenar el formulario con los datos de la dona a editar
  const handleEdit = (dona) => {
    setFormData({
      nombre: dona.nombre,
      sabor: dona.sabor,
      precio: dona.precio,
      stock: dona.stock
    });
    setEditingId(dona._id);
  };

  // 🔹 Eliminar dona
  const handleDelete = async (id) => {
    if (!confirm("¿Seguro que deseas eliminar esta dona? 🍩")) return;
    try {
      const res = await fetch(`http://localhost:3000/api/donuts/${id}`, {
        method: "DELETE"
      });
      if (res.ok) {
        alert("🗑️ Donut eliminada correctamente!");
        fetchDonuts();
      }
    } catch (error) {
      console.error("❌ Error al eliminar donut:", error);
    }
  };

  return (
    <div style={{ padding: "2rem", fontFamily: "Arial" }}>
      <h1 style={{ color: "#ff4081" }}>🍩 Donas Donatella Dashboard</h1>

      {/* Formulario */}
      <form onSubmit={handleSubmit} style={{ marginBottom: "2rem" }}>
        <input
          type="text"
          name="nombre"
          placeholder="Nombre"
          value={formData.nombre}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="sabor"
          placeholder="Sabor"
          value={formData.sabor}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="precio"
          placeholder="Precio (€)"
          value={formData.precio}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="stock"
          placeholder="Stock"
          value={formData.stock}
          onChange={handleChange}
          required
        />

        <button type="submit" style={{ marginLeft: "1rem" }}>
          {editingId ? "Actualizar Donut" : "Agregar Donut"}
        </button>
      </form>

      {/* Lista de donas */}
      <h2>🍰 Lista de Donas</h2>
      {donuts.length === 0 ? (
        <p>No hay donas todavía 😢</p>
      ) : (
        <table border="1" cellPadding="8">
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Sabor</th>
              <th>Precio (€)</th>
              <th>Stock</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {donuts.map((dona) => (
              <tr key={dona._id}>
                <td>{dona.nombre}</td>
                <td>{dona.sabor}</td>
                <td>{dona.precio}</td>
                <td>{dona.stock}</td>
                <td>
                  <button onClick={() => handleEdit(dona)}>Editar</button>
                  <button
                    onClick={() => handleDelete(dona._id)}
                    style={{ marginLeft: "0.5rem" }}
                  >
                    Eliminar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
