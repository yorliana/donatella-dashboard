import express from "express";
import { crearVenta, obtenerVentas, resumenDelDia } from "../controllers/ventaController.js";

const router = express.Router();

router.post("/", crearVenta);
router.get("/", obtenerVentas);
router.get("/resumen", resumenDelDia);

export default router;
