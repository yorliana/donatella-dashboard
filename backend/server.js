import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import donutRoutes from "./routes/donutRoutes.js";
import ventaRoutes from "./routes/ventaRoutes.js";
import connectDB from "./config/db.js";

dotenv.config();
connectDB();
const app = express();

app.use(cors());
app.use(express.json());

// Conexión a MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("🍩 Conectado a MongoDB"))
  .catch(err => console.error("❌ Error en la conexión:", err));

// Rutas principales
app.use("/api/donuts", donutRoutes);
app.use("/api/ventas", ventaRoutes);

app.get("/", (req, res) => {
  res.send("API Donas funcionando correctamente 🍩");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`🚀 Servidor corriendo en puerto ${PORT}`));

