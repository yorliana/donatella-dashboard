import React from "react";
import imgFondo from "../../assets/img/seccionV/FondoBlanco.png";
import imgCajas from "../../assets/img/seccionIV/cajasAmor.png";
import imgOnda from "../../assets/img/seccionV/onda.png"; // solo se usa al final

export default function SeccionIV() {
  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden bg-white">
      {/* Fondo blanco texturizado */}
      <img
        src={imgFondo}
        alt="fondo blanco"
        className="absolute inset-0 w-full h-full object-cover opacity-100 z-0 pointer-events-none"
      />

      {/* Texto principal */}
      <div className="relative z-10 mt-24 text-center px-6 md:px-0">
        <h2 className="text-[#5a3d2b] text-lg md:text-xl font-medium leading-relaxed  ">
          Regala una caja de Donatella y reparte sonrisas por cada bocado.
          <br />
          Perfectas para compartir con esa persona especial.{" "}
          <span className="font-bold text-[#5a3d2b]">¡Pide las tuyas ya!</span>
        </h2>
      </div>

      {/* Imagen de las cajas */}
      <div className="relative z-10 mt-10 flex justify-center">
        <img
          src={imgCajas}
          alt="Cajas Amor y Amistad Donatella"
          className="w-[600px] md:w-[720px] lg:w-[800px] object-contain"
        />
      </div>

      {/* Onda inferior roja */}
      <img
        src={imgOnda}
        alt="onda inferior"
        className="absolute bottom-0 left-0 w-full h-auto object-cover z-0"
      />
    </section>
  );
}
