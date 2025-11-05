import React from 'react';
import fondoFooter from "../../assets/img/seccionVI/fondoFooter.png"
import img from "../../assets/img/footer/donatellaP.png"
import img1 from "../../assets/img/footer/LogoSic.png"

export default function Footer() {


  return (


    <footer className="bg-gradient-to-b from-pink-300 text-center py-6 text-sm border-t bg-pink w-full h-[200px]  "
    
    >
        
        <div className="flex justify-center gap-4 mt-10 text-[#FFFFFF]">
          <a href="#">Política de privacidad</a>|
          <a href="#">Términos y condiciones</a>|
          <a href="#">Política de calidad, inocuidad y gestión ambienta</a>
        </div>
        <img className=" p-10 " src={img} alt="" />
        <p className="flex justify-left gap-4 mt-2 text-[#FFFFFF] p-10">©Copyright Donatella 2025 todos los derechos reservados.</p>
      <img  src={img1} alt="" />
      </footer>
     
  );
}

