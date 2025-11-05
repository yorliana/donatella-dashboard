import React, { useState } from 'react';


export default function Formulario() {

 const [form, setForm] = useState({ nombre: "", telefono: "", precio: 0 });
  const [mensaje, setMensaje] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMensaje("");

    try {
      const res = await fetch("http://localhost:3000/api/pedidos", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
        nombre: form.nombre,
        telefono: form.telefono,
        precio: 10 // ejemplo: precio fijo
     }),
         });

      const data = await res.json();

      if (res.ok) {
        setMensaje("💖 ¡Tu pedido fue recibido correctamente!");
        setForm({ nombre: "", telefono: "", precio: 0 });
      
    } else {
        setMensaje("❌ " + data.message);
      }
    } catch (error) {
      setMensaje("⚠️ Error al conectar con el servidor.");
    console.error(error);
    }
  };
  return (

    //COLOR DE FORMULARIO #fc8da3
    //y el color marron #513326

    <div >
      <section className="w-11/12 md:w-300px bg-white p-8 rounded-2xl shadow mb-12">
        <h6 className="text-2xl font-semibold text-[#E35D8D] mb-20">¡Quiero mi caja de Amor!</h6>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            name="nombre"
            placeholder="Nombre completo*"
            value={form.nombre}
            onChange={handleChange}
            className="border p-3 rounded-lg"
          />
          <input
            type="text"
            name="telefono"
            placeholder="Teléfono*"
            value={form.telefono}
            onChange={handleChange}
            className="border p-3 rounded-lg"
          />
            <input
            type="number"
            name="precio"
            placeholder="Precio*"
            value={form.precio}
            onChange={handleChange}
            className="border p-3 rounded-lg"
            required
            />


          <button
            type="submit"
            className="bg-[#E35D8D] text-white py-3 rounded-full hover:bg-pink-500 transition"
          >
            Pedir
          </button>
        </form>
        {mensaje && <p className="mt-4 text-center text-[#E35D8D]">{mensaje}</p>}
      </section>
    </div>
  );
}
