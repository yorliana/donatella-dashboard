import React from "react";
import img1 from "../../assets/img/seccionVI/fondo.png"; // onda superior
import img2 from "../../assets/img/seccionVI/chispas.png"; // chispas izquierda
import img3 from "../../assets/img/seccionVI/chispas1.png"; // chispas derecha
import img4 from "../../assets/img/seccionVI/donutsLover.png"; // #DonutLovers
import Formulario from "../../components/Formulario/Formulario.jsx"

export default function SeccionVI() {
  return ( 
  
  <>
  <div>
      
      {/* Onda superior */}
      
      <Formulario/>
      </div>
    <section className="relative w-full min-h-[90vh] flex flex-col items-center justify-end bg[#f59fb4] to-[#FFFFFF] overflow-hidden">
     
      <img
        src={img1}
       
        className="absolute top-0 left-0 w-full h-auto object-cover z-10 pointer-events-none rounded-tl-[40px] rounded-tr-[40px]"
      />

      {/* Chispas izquierda */}
     <img
        src={img2}
        alt="chispas izquierda"
        className="absolute left-10 bottom-2 object-contain z-20 pointer-events-none"
        style={{ width: "250px" }}
      />

      {/* Chispas lado derecho */}
      <img
        src={img3}
        alt="chispas derecha"
        className="absolute right-0 top-20 object-contain z-20 pointer-events-none"
        style={{ width: "300px" }}
      />

      {/* Texto Donut Lovers */}
      <img
        src={img4}
        alt="#DonutLovers"
        className="relative z-30 w-[100px] md:w-[400px] lg:w-[400px] mb-10"
      />

    </section></>
  );
}
