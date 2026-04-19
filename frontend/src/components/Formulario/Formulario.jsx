import React, { useState } from 'react';
import img from "../../assets/img/footer/estrella.png"
import img1 from "../../assets/img/footer/sticker.png"



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
      const res = await fetch("http://localhost:3000/api/donuts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
        nombre: form.nombre,
        telefono: form.telefono,
       
     }),
         });

      const data = await res.json();
console.log(res)
      if (res.ok) {
        setMensaje("💖 ¡Tu pedido fue recibido correctamente!");
        setForm({ nombre: "", telefono: "", });
      
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

  <section className="relative flex justify-center items-center py-5 w-full ">
  {/* Imagen superior */}
  <img
    src={img}
    alt=""
    className="absolute top-[-27%] left-[-18%] w-[180px] md:w-[140px] lg:w-[200px] z-10"
  />

  {/* Contenedor rosado */}
<div >
    <h2 className="text-[48px] leading-[1] md:text-[75px] font-black text-[#513326] mb-4 leading-tight font-['Montserrat']">
      ¡Quiero mi caja<br />de Amor!
    </h2>

    <p className="text-[#513326] text-sm md:text-base mb-10 font-['Montserrat']">
      Porque el verdadero cariño se mide en detalles auténticos. Este año, regala algo delicioso.<br />
      Regala Donatella
    </p>

    <form
      onSubmit={handleSubmit}
      className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-6"
    >
      <input
        type="text"
        name="nombre"
        placeholder="Nombre completo*"
        value={form.nombre}
        onChange={handleChange}
        required
        className="w-full md:w-[280px] bg-white border border-gray-200 rounded-xl px-4 py-3 text-[#513326] placeholder-[#513326] text-[12px] focus:outline-none focus:ring-2 focus:ring-[#d45b7b]"
      />

      <input
        type="text"
        name="telefono"
        placeholder="Teléfono*"
        value={form.telefono}
        onChange={handleChange}
        required
        className="w-full md:w-[280px] bg-white border border-gray-200 rounded-xl px-4 py-3 text-[#513326] placeholder-[#513326] text-[12px] focus:outline-none focus:ring-2 focus:ring-[#d45b7b]"
      />

      <button
        type="submit"
        className="bg-[#4b2d25] text-white px-8 py-3 rounded-xl hover:bg-[#643c31] transition-all font-semibold"
      >
        Pedir
      </button>
    </form>

    {mensaje && (
      <p className="mt-6 text-center text-[#4b2d25] font-semibold">
        {mensaje}
      </p>
    )}

    <div className="mt-6 flex items-center justify-center gap-2">
      <input
        type="checkbox"
        id="acepto"
        className="w-4 h-4 text-[#4b2d25] border-gray-300 rounded focus:ring-[#d45b7b]"
      />
      <div className="w-full flex justify-start display-flex  items-left">
      <label htmlFor="acepto" className="text-[10px] ml-[30px] px-4px text-[#513326] font-['Montserrat'] leading-none text-left" >
        Ley de Protección de Datos Personales <br /> o Ley 1581 de 2012.
      </label>
      </div>
    </div>
  </div>

  {/* Imagen inferior */}
  <img
    src={img1}
    alt=""
    className="absolute bottom-[-20px] top-[93%]  right-[-11%] w-[120px] md:w-[150px] lg:w-[200px] z-10"
  />
</section>




  );
}
