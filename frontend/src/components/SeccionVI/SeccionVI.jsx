import React, { useState } from "react";

import img1 from "../../assets/img/seccionVI/fondo.png"; // onda superior
import img2 from "../../assets/img/seccionVI/chispas.png"; // chispas izquierda
import img3 from "../../assets/img/seccionVI/chispas1.png"; // chispas derecha
import img4 from "../../assets/img/seccionVI/donutsLover.png"; // #DonutLovers
import Formulario from "../Formulario/Formulario.jsx";
import img from '../../assets/img/footer/estrella.png'
import sticker from '../../assets/img/footer/sticker.png'
import fondo from "../../assets/img/seccionV/FondoBlanco.png";
import onda from "../../assets/img/seccionV/onda.png";
import { FaInstagram, FaTiktok } from "react-icons/fa";


export default function SeccionVI() {

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
  
  <>

    
<div className="relative">

  {/* ================= SECCIÓN 1 ================= */}
  <section className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden rounded-t-3xl">

    {/* Onda superior */}
    <img
      src={onda}
      alt="onda superior"
      className="absolute top-0 left-0 w-full h-auto object-cover z-0 pointer-events-none"
    />

    {/* Fondo */}
    <img
      src={fondo}
      alt="fondo"
      className="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none"
    />

    {/* Texto */}
    <div className="relative z-10 text-center px-2 md:px-0">
      <h2 className="text-[#513326] font-black leading-tight text-[109px] md:text-[82px]">
        Síguenos en <br />
        <span className="block">@DONATELLA.CO</span>
        <span className="block text-[80px] md:text-[64px]">
          para ver más
        </span>
      </h2>
    </div>

    {/* Botones */}
    <div className="relative z-10 mt-10 flex justify-center gap-6">
      <a
        href="#"
        className="flex items-center gap-3 bg-gray-200 hover:bg-gray-300 text-[#3d2514] font-semibold px-6 py-3 rounded-xl text-lg shadow-md transition duration-300"
      >
        <FaInstagram className="text-pink-600 text-2xl" />
        Instagram
      </a>

      <a
        href="#"
        className="flex items-center gap-3 bg-gray-200 hover:bg-gray-300 text-[#3d2514] font-semibold px-6 py-3 rounded-xl text-lg shadow-md transition duration-300"
      >
        <FaTiktok className="text-black text-2xl" />
        TikTok
      </a>
    </div>
  </section>

  {/* ================= FORMULARIO FLOTANTE ================= */}
  <div className=" absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-[90%] md:w-[70%] lg:w-[60%]">
    <div className="  bg-[#fc8da3] text-center px-8 py-12 rounded-2xl shadow-2xl">
      <Formulario />
    </div>
  </div>

  {/* ================= SECCIÓN 2 ================= */}
  <section className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden rounded-t-3xl">

    {/* fondo */}
    <img
      src={img1}
      alt="fondo"
      className="absolute inset-0 w-full h-full object-cover z-10"
    />

    {/* chispas */}
    <img
      src={img2}
      className="absolute left-10 bottom-10 w-[200px] z-30 pointer-events-none"
    />

    <img
      src={img3}
      className="absolute right-0 top-10 w-[250px] z-30 pointer-events-none"
    />

    {/* contenido */}
    <div className="relative z-40 flex flex-col items-center justify-center text-center">
      <img
        src={img4}
        alt="#DonutLovers"
        className="w-[400px] md:w-[400px] mt-10"
      />
    </div>

  </section>

</div>
    </>


  );
}
