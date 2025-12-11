import express from "express";
import mongoose from "mongoose";
import cors from "cors";

import donutRoutes from "../routes/donutRoutes.js";
import ventaRoutes from "../routes/ventaRoutes.js";
import pedidosRoutes from "../routes/pedidos.routes.js";

const app = express();

app.use(express.json());
app.use(cors());

// Rutas SIN prefijo "/api"
app.use("/donuts", donutRoutes);
app.use("/ventas", ventaRoutes);
app.use("/pedidos", pedidosRoutes);

app.get("/", (req, res) => {
  res.json({ mensaje: "Backend funcionando en Vercel 🍩" });
});

// Conexión a Mongo
if (!mongoose.connection.readyState) {
  mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("🍩 Conectado a MongoDB"))
    .catch(err => console.error("❌ Error en Mongo:", err));
}

export default app;
