import React from "react";
import fondo from "../../assets/img/seccionV/FondoBlanco.png";
import onda from "../../assets/img/seccionV/onda.png";
import { FaInstagram, FaTiktok } from "react-icons/fa";

export default function SeccionV() {
  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden bg-white">
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
  );
}
