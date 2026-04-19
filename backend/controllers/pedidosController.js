import Pedido from "../models/Pedido.js";
import Stripe from "stripe";
import dotenv from "dotenv";
dotenv.config();

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
// 🟢 Crear un nuevo pedido
export const crearPedido = async (req, res) => {
  try {
    const { nombre, telefono, cart } = req.body;

    if (!cart || !Array.isArray(cart) || cart.length === 0) {
      return res.status(400).json({ mensaje: "Carrito inválido" });
    }

    const total = cart.reduce((acc, item) => {
      return acc + Number(item.price || 0) * Number(item.quantity || 1);
    }, 0);

    // 1. CREAR PEDIDO EN MONGO
    const pedido = await Pedido.create({
      nombre,
      telefono,
      productos: cart,
      total,
      estado: "pendiente",
    });

    // 2. CREAR STRIPE SOLO UNA VEZ
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",

      line_items: cart.map((item) => ({
        price_data: {
          currency: "eur",
          product_data: {
            name: item.nameProduct || "Producto",
          },
          unit_amount: Math.round(Number(item.price || 0) * 100),
        },
        quantity: Number(item.quantity || 1),
      })),

      success_url: `http://localhost:5173/success?pedidoId=${pedido._id}`,
      cancel_url: "http://localhost:5173/cancel",
    });

    return res.json({ url: session.url });

  } catch (error) {
    console.error("ERROR COMPLETO:", error);
    return res.status(500).json({ error: error.message });
  }
};

  

// 🔵 Obtener todos los pedidos
export const getPedidos = async (req, res) => {
  try {
    const pedidos = await Pedido.find().sort({ createdAt: -1 });
    res.status(200).json(pedidos);
  } catch (error) {
    console.error("❌ Error al obtener pedidos:", error);
    res.status(500).json({ mensaje: "Error al obtener pedidos", error: error.message });
  }
};

// 🟡 Actualizar un pedido por ID
export const actualizarPedido = async (req, res) => {
  try {
    const { id } = req.params;
    const { nombre, telefono, precio } = req.body;

    const pedidoActualizado = await Pedido.findByIdAndUpdate(
      id,
      { nombre, telefono, precio },
      { new: true } // Devuelve el documento actualizado
    );

    if (!pedidoActualizado)
      return res.status(404).json({ mensaje: "Pedido no encontrado" });

    res.status(200).json({
      mensaje: "🟡 Pedido actualizado correctamente",
      pedido: pedidoActualizado,
    });
  } catch (error) {
    console.error("❌ Error al actualizar pedido:", error);
    res.status(500).json({ mensaje: "Error al actualizar pedido", error: error.message });
  }
};

// 🔴 Eliminar un pedido por ID
export const eliminarPedido = async (req, res) => {
  try {
    const { id } = req.params;
    const pedidoEliminado = await Pedido.findByIdAndDelete(id);

    if (!pedidoEliminado)
      return res.status(404).json({ mensaje: "Pedido no encontrado" });

    res.status(200).json({ mensaje: "🗑️ Pedido eliminado correctamente" });
  } catch (error) {
    console.error("❌ Error al eliminar pedido:", error);
    res.status(500).json({ mensaje: "Error al eliminar pedido", error: error.message });
  }
};
export const createPedido = (req, res) => {
  res.status(201).json({ message: "Pedido creado" });
};

export const getPedido = (req, res) => {
  res.json({ message: "Listado de pedidos" });
};



export const updatePedido = (req, res) => {
  res.json({ message: "Pedido actualizado" });
};

export const deletePedido = (req, res) => {
  res.json({ message: "Pedido eliminado" });
};
export const getPedidoById = async (req, res) => {
  const pedido = await Pedido.findById(req.params.id);
  res.json(pedido);
};