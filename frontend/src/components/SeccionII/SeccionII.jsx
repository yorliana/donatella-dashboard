import React from "react";
import { v4 as uuidv4 } from "uuid";
import img from   '../../assets/img/seccionI/fondo.png'
import img1 from '../../assets/img/seccionI/estrella.png'
import img2 from '../../assets/img/seccionI/dona.png'
import img3 from '../../assets/img/seccionI/caja.png'
import img4 from '../../assets/img/seccionI/amor.png'


export default function SeccionII() {
 

  return (
    
      
    <section className="relative flex items-center justify-center bg-[#fef7f8] w-screen h-screen overflow-hidden m-0 p-0">
        
     <img
        src={img} // cambia la ruta
     
       className="absolute inset-0 w-full h-full object-cover"
      />
 <img
        src={img1} // cambia la ruta
     
       className="absolute center-0 top-1/2 transform -translate-y-1/2 w-[500px] md:w-[600px] z-10"
      />

      {/* 🍩 Dona izquierda */}
      <img
        src={img2} // cambia la ruta
        alt="dona"
       className="top-[75%] absolute left-0 top-1/2 transform -translate-y-1/2 w-[300px] md:w-[400px] z-10"
      />

      {/* 🎁 Caja derecha */}
      <img
        src={img3} // cambia la ruta
        alt="caja"
        className="absolute right-0 top-1/2 transform -translate-y-1/2 w-[320px] md:w-[420px] z-10"
      />

      {/* 💗 Texto principal */}
      <img
        src={img4} // cambia la ruta
        alt="Amor y Amistad"
        className="relative w-[600px] md:w-[800px] z-20"
      />

     
    </section>
  );
}
