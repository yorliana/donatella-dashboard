import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import donutRoutes from "./routes/donutRoutes.js";
import ventaRoutes from "./routes/ventaRoutes.js";

import pedidosRoutes from "./routes/pedidos.routes.js";

import connectDB from "./config/db.js";

dotenv.config();
const app = express();
app.use(express.json());
//Middleware para leer body
app.use(cors({
  origin: "http://localhost:5173", // Tu frontend
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type"]
}));


app.use(express.urlencoded({ extended: true }));

// Rutas principales
app.use("/api/donuts", donutRoutes);
app.use("/api/ventas", ventaRoutes);
app.use("/api/pedidos", pedidosRoutes);
app.get("/", (req, res) => {
  res.send("API Donas funcionando correctamente 🍩");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`🚀 Servidor corriendo en puerto ${PORT}`));

// Conexión a MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("🍩 Conectado a MongoDB"))
  .catch(err => console.error("❌ Error en la conexión:", err));



