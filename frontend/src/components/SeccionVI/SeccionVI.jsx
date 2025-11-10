import React, { useState } from "react";

import img1 from "../../assets/img/seccionVI/fondo.png"; // onda superior
import img2 from "../../assets/img/seccionVI/chispas.png"; // chispas izquierda
import img3 from "../../assets/img/seccionVI/chispas1.png"; // chispas derecha
import img4 from "../../assets/img/seccionVI/donutsLover.png"; // #DonutLovers
import Formulario from "../formulario/formulario";
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

    
<section className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Onda superior */}
      <img
        src={onda}
        alt="onda superior"
        className="absolute top-0 left-0 w-full h-auto object-cover z-0 pointer-events-none"
      />

      {/* Fondo blanco texturizado */}
      <img
        src={fondo}
        alt="fondo blanco"
        className="absolute inset-0 w-full h-full object-cover opacity-100 z-0 pointer-events-none"
      />

      {/* Texto principal */}
      <div className="relative z-10 mt-100 text-center px-2 md:px-0">
        <h2 className="text-[#513326] font-black leading-tight text-[109px] md:text-[82pt]">
          Síguenos en{" "} <br />
          <span className="text-[#513326] block">@DONATELLA.CO</span>
         
          <span className="block text-[80px] md:text-[64px]">para ver más</span>
        </h2>
      </div>

      {/* Botones de redes */}
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

      {/* Onda inferior */}
      
    </section>
   <div className="relative top-[450px] - flex justify-center -mt-20 z-30 w-[90%] md:w-[70%] lg:w-[60%] bg-[#fc8da3] text-center px-8 py-12 rounded-2xl shadow-lg relative z-0 ">
   
      <Formulario />

  </div>
<section className="relative w-full min-h-[90vh]  flex flex-col items-center justify-center bg-gradient-to-b from-[#f59fb4] to-[#ffffff] overflow-hidden">
    {/* Imagen de fondo superior */}
    <img
      src={img1}
      alt="fondo superior"
      className="absolute left-0 w-full h-auto object-cover z-10 rounded-tl-[40px] rounded-tr-[40px]"
    />

    {/* Contenedor principal */}
    
    

    {/* Chispas izquierda */}
    <img
      src={img2}
      alt="chispas izquierda"
      className="absolute left-10 bottom-20 object-contain z-30 pointer-events-none w-[200px]"
    />

    {/* Chispas derecha */}
    <img
      src={img3}
      alt="chispas derecha"
      className="absolute right-0 top-20 object-contain z-30 pointer-events-none w-[250px]"
    />

    {/* Texto Donut Lovers */}
    <img
      src={img4}
      alt="#DonutLovers"
      className="relative top-40 z-40 w-[250px] md:w-[400px] mt-12"
    />

    {/* Sello inferior */}
   
     {/* Imagen inferior */}
 
  </section>
   <img
       src={sticker}
       alt=""
       className="absolute top-[-80px] bottom-[-5px] right-[20%] w-[120px] md:w-[150px] lg:w-[180px] z-10"
     />
    </>


  );
}
