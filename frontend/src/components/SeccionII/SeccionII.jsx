import React from "react";
import { v4 as uuidv4 } from "uuid";
import img from   '../../assets/img/fondo.png'
import img1 from '../../assets/img/estrella.png'
import img2 from '../../assets/img/dona.png'
import img3 from '../../assets/img/caja.png'
import img4 from '../../assets/img/amor.png'


export default function SeccionII() {
 

  return (
    
          

  
    <section className="relative flex items-center justify-center bg-white py-16 overflow-hidden w-100x h-300">
        <img
        src={img}
        alt="chispitas"
        className="absolute inset-0 w-full h-full object-cover opacity-80 pointer-events-none z-0 w-450 h-800"
      />
      {/* ⭐ Fondo de estrella */}
      <img
        src={img1}// cambia la ruta a la tuya
        alt="estrella fondo"
        className="absolute w-80 md:w-[300] opacity-90"
      />

      {/* 🍩 Dona izquierda */}
      <img
        src={img2} // cambia la ruta
        alt="dona"
        className="absolute left-[-5%] md:left-[-10%] top-1/2 transform -translate-y-1/2 w-[160] md:w-[240] z-10"
      />

      {/* 🎁 Caja derecha */}
      <img
        src={img3} // cambia la ruta
        alt="caja"
        className="absolute right-[-8%] md:right-[-10%] top-1/2 transform -translate-y-1/2 w-[160] md:w-[240] z-12"
      />

      {/* 💗 Texto principal */}
      <img
        src={img4} // cambia la ruta
        alt="Amor y Amistad"
        className="relative w-[300] md:w-[500] z-20"
      />

     
    </section>
  );
}
