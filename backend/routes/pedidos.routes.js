import express from "express";
import {
  crearPedido,
  obtenerPedidos,
  actualizarPedido,
  eliminarPedido,
} from "../controllers/pedidos.controller.js";

const router = express.Router();

// 📦 Rutas CRUD
router.post("/", crearPedido);           // Crear pedido
router.get("/", obtenerPedidos);         // Obtener todos
router.put("/:id", actualizarPedido);    // Actualizar por ID
router.delete("/:id", eliminarPedido);   // Eliminar por ID

export default router;
