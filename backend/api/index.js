import express from "express";
import mongoose from "mongoose";
import cors from "cors";

// Create express app
const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Database connection
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

// ROUTES
app.get("/", (req, res) => {
  res.json({ message: "Backend funcionando en Vercel 🎉" });
});

// Aquí importas tus otras rutas si tienes:
// import productRoutes from "./routes/productRoutes.js";
// app.use("/api/products", productRoutes);

// Esto es IMPORTANTE para Vercel:
app.listen = () => {}; // Evita que intente escuchar un puerto

export default app;
