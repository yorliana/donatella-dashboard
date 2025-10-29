import React, { useState, useEffect } from "react";

const API_URL = "http://localhost:3000/api/pedidos";

const Pedidos = () => {
  const [pedidos, setPedidos] = useState([]);
  const [nombre, setNombre] = useState("");
  const [telefono, setTelefono] = useState("");
  const [precio, setPrecio] = useState("");
  const [editando, setEditando] = useState(null);

  // 🟢 Obtener todos los pedidos al cargar
  useEffect(() => {
    obtenerPedidos();
  }, []);

  const obtenerPedidos = async () => {
    try {
      const res = await fetch(API_URL);
      const data = await res.json();
      setPedidos(data);
    } catch (error) {
      console.error("Error al obtener pedidos:", error);
    }
  };

  // 🟣 Crear o actualizar pedido
  const manejarSubmit = async (e) => {
    e.preventDefault();

    const pedido = { nombre, telefono, precio: Number(precio) };

    try {
      if (editando) {
        // 🟡 Actualizar pedido
        await fetch(`${API_URL}/${editando}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(pedido),
        });
      } else {
        // 🟢 Crear nuevo pedido
        await fetch(API_URL, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(pedido),
        });
      }

      // Limpiar formulario y actualizar lista
      setNombre("");
      setTelefono("");
      setPrecio("");
      setEditando(null);
      obtenerPedidos();
    } catch (error) {
      console.error("Error al guardar pedido:", error);
    }
  };

  // 🔴 Eliminar pedido
  const eliminarPedido = async (id) => {
    if (!window.confirm("¿Seguro que deseas eliminar este pedido?")) return;

    try {
      await fetch(`${API_URL}/${id}`, { method: "DELETE" });
      obtenerPedidos();
    } catch (error) {
      console.error("Error al eliminar pedido:", error);
    }
  };

  // ✏️ Editar pedido
  const editarPedido = (pedido) => {
    setNombre(pedido.nombre);
    setTelefono(pedido.telefono);
    setPrecio(pedido.precio);
    setEditando(pedido._id);
  };

  return (
    <div className="container" style={{ padding: "20px", maxWidth: "600px", margin: "auto" }}>
      <h2>{editando ? "Editar Pedido" : "Crear Pedido"}</h2>

      <form onSubmit={manejarSubmit} style={{ marginBottom: "20px" }}>
        <input
          type="text"
          placeholder="Nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Teléfono"
          value={telefono}
          onChange={(e) => setTelefono(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Precio"
          value={precio}
          onChange={(e) => setPrecio(e.target.value)}
          required
        />
        <button type="submit">
          {editando ? "Actualizar" : "Guardar"}
        </button>
      </form>

      <h3>Lista de Pedidos</h3>
      {pedidos.length === 0 ? (
        <p>No hay pedidos registrados.</p>
      ) : (
        <table border="1" width="100%" cellPadding="5">
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Teléfono</th>
              <th>Precio (€)</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {pedidos.map((pedido) => (
              <tr key={pedido._id}>
                <td>{pedido.nombre}</td>
                <td>{pedido.telefono}</td>
                <td>{pedido.precio}</td>
                <td>
                  <button onClick={() => editarPedido(pedido)}>✏️</button>
                  <button onClick={() => eliminarPedido(pedido._id)}>🗑️</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Pedidos;
