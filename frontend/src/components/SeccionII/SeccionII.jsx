import React from "react";
import { v4 as uuidv4 } from "uuid";
import img from   '../../assets/img/seccionI/fondo.png'
import img1 from '../../assets/img/seccionI/estrella.png'
import img2 from '../../assets/img/seccionI/dona.png'
import img3 from '../../assets/img/seccionI/caja.png'
import img4 from '../../assets/img/seccionI/amor.png'


export default function SeccionII() {
 

  return (
    
      
   <section className="relative flex items-center justify-center   w-full overflow-hidden m-0 p-0">
  
 <img
        src={img1}
     
       className="absolute center-0 top-1/2 transform -translate-y-1/2 w-[500px] md:w-[600px] z-10"
      />

      {/* 🍩 Dona izquierda */}
      <div className="relative overflow-hidden w-full h-[500px] mt-40">
  <img
    src={img2}
    alt="dona"
    className="absolute left-0 top-[79%] -translate-y-1/2 -translate-x-1/4 md:w-[480px] z-10"
  />
</div>

      {/* 🎁 Caja derecha */}
      <img
  src={img3}
  alt="caja"
  className="absolute right-0 top-[40%] -translate-y-1/2 translate-x-1/3 w-[300px] md:w-[520px] z-10"
/>

      {/* 💗 Texto principal */}
     <img
  src={img4}
  alt="Amor y Amistad"
  className="absolute left-[25rem] top-1/2 -translate-y-1/2 w-[600px] md:w-[800px] z-20"
/>

     
    </section>
  );
}
