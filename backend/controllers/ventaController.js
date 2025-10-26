import Venta from "../models/Venta.js";
import { v4 as uuidv4 } from "uuid";

export const crearVenta = async (req, res) => {
  const { items } = req.body;
  const total = items.reduce((acc, item) => acc + item.subtotal, 0);

  const venta = new Venta({
    idFactura: uuidv4(),
    items,
    total
  });

  await venta.save();
  res.json(venta);
};

export const obtenerVentas = async (req, res) => {
  const ventas = await Venta.find().sort({ fecha: -1 });
  res.json(ventas);
};

export const resumenDelDia = async (req, res) => {
  const hoy = new Date();
  hoy.setHours(0, 0, 0, 0);

  const resumen = await Venta.aggregate([
    { $match: { fecha: { $gte: hoy } } },
    {
      $group: {
        _id: null,
        totalVentas: { $sum: "$total" },
        cantidadVentas: { $sum: 1 },
        donasVendidas: { $sum: { $size: "$items" } }
      }
    }
  ]);

  res.json(resumen[0] || { totalVentas: 0, cantidadVentas: 0, donasVendidas: 0 });
};
