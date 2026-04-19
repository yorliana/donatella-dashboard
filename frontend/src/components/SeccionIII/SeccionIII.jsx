import React from "react";
import { v4 as uuidv4 } from "uuid";
import img from   '../../assets/img/seccionII/donuts.png'
import img1 from '../../assets/img/seccionII/slogan1.png'
import img2 from '../../assets/img/seccionII/flechaAbajo.png'
import img3 from '../../assets/img/seccionII/slogan.png'
import img4 from '../../assets/img/seccionII/flechaArriba.png'
import img5 from '../../assets/img/seccionII/donutsFlecha.png'
import img6 from '../../assets/img/seccionII/slogan3.png'
import img7 from '../../assets/img/seccionII/flechaDerecha.png'
import img8 from '../../assets/img/seccionII/donutsCorazon.png'
import img9 from '../../assets/img/seccionII/fondorojo.png'



export default function SeccionIII() {
 

  return (
    
          

  
   <section
  className="relative w-full flex flex-col items-center text-center text-white overflow-hidden bg-cover bg-center bg-no-repeat"
  style={{ backgroundImage: `url(${img9})` }}
>
     


        <div className="mt-16 max-w-6xl px-6">
    <h1 className="text-lg md:text-2xl font-600 leading-relaxed">
      Celebra el mes de amor y amistad con el sabor que une corazones.
      <br />
      Perfectas para compartir con esa persona especial.
    </h1>
    <h2 className="mt-6 text-xl md:text-3xl font-bold">
      Hemos creado un pack exclusivo de 6 donas con los sabores que enamoran:
    </h2>
  </div>




    <div className="relative flex items-center justify-center  py-16 overflow-hidden w1000px h-2000px">
            
        

 <div className="flex flex-col items-center top-3 justify-center">
        <img
        src={img}
        
      />
        <img src={img2} alt="" className="relative -top-5 -left-2"/>
      
      <img src={img1} alt="" />
      
      
</div>
     
     <div className="flex flex-col items-center justify-center">

      <img
        src={img3}
       
      />
      <img src={img4} alt="" className="-mt-5 top-5"  />
      <img src={img5} alt="" className="-mt-30 top-10" />
</div>


     <div >
         <img
        src={img6} // cambia la ruta
    
    
      />

      <img src={img7}alt="" />
<img src={img8}alt="" />
     </div> </div>
     
     

      

     
    </section>
  );
}
