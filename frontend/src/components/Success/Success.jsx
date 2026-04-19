import { useEffect, useState } from "react";
import { useSearchParams, useNavigate  } from "react-router-dom";
import Home from "../Home/Home.jsx";

export default function Success() {
  const [searchParams] = useSearchParams();
  const pedidoId = searchParams.get("pedidoId");

  const [pedido, setPedido] = useState(null);
const navigate = useNavigate();
  useEffect(() => {
    const fetchPedido = async () => {
      const res = await fetch(`http://localhost:3000/api/pedidos/${pedidoId}`);
      const data = await res.json();
      setPedido(data);
    };

    if (pedidoId) fetchPedido();
  }, [pedidoId]);

  if (!pedido) return <h2 style={{ padding: "20px" }}>Cargando factura...</h2>;

  return (
    <div style={styles.container}>
      <button onClick={() => navigate("/")} style={styles.backBtn}>
  ← Volver al inicio
</button>
      <div style={styles.card} id="factura">

        <h1 style={styles.success}>✅ Pedido confirmado</h1>

        <p style={styles.subtitle}>
          Gracias por tu compra 🎉
        </p>

        <div style={styles.section}>
          <h3>Datos del cliente</h3>
          <p><b>Nombre:</b> {pedido.nombre}</p>
          <p><b>Teléfono:</b> {pedido.telefono}</p>
          <p><b>Fecha:</b> {new Date().toLocaleDateString()}</p>
        </div>

        <div style={styles.section}>
          <h3>Resumen del pedido</h3>

          {pedido.productos.map((p, index) => (
            <div key={index} style={styles.item}>
              <span>{p.nameProduct}</span>
              <span>{p.quantity} x €{p.price}</span>
            </div>
          ))}
        </div>

        <div style={styles.totalBox}>
          <h2>Total: €{pedido.total}</h2>
        </div>

      </div>

      {/* BOTONES */}
      <div style={styles.buttons}>
        <button onClick={() => window.print()} style={styles.printBtn}>
          🖨️ Imprimir factura
        </button>
      </div>
    </div>
  );
}

const styles = {
  container: {
    padding: "30px",
    fontFamily: "Arial, sans-serif",
    backgroundColor: "#f3f3f3",
    minHeight: "100vh",
  },
  card: {
    maxWidth: "600px",
    margin: "auto",
    backgroundColor: "white",
    padding: "25px",
    borderRadius: "10px",
    boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
  },
  success: {
    color: "#2e7d32",
    textAlign: "center",
  },
  subtitle: {
    textAlign: "center",
    color: "#5a3d2b",
    marginBottom: "20px",
  },
  section: {
    marginBottom: "20px",
  },
  item: {
    display: "flex",
    justifyContent: "space-between",
    borderBottom: "1px solid #eee",
    padding: "5px 0",
  },
  totalBox: {
    textAlign: "right",
    marginTop: "20px",
    borderTop: "2px solid #5a3d2b",
    paddingTop: "10px",
  },
  buttons: {
    textAlign: "center",
    marginTop: "20px",
  },
  printBtn: {
    padding: "10px 20px",
    fontSize: "16px",
    backgroundColor: "#EB3DAB",
    border: "none",
    borderRadius: "50px",
    cursor: "pointer",
  },
  backBtn: {
  marginBottom: "20px",
  background: "none",
  border: "none",
  color: "#5a3d2b",
  cursor: "pointer",
  fontSize: "16px",
  textAlign: "left",
},
};