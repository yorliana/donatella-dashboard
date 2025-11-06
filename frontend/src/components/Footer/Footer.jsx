import React from 'react';
import fondoFooter from "../../assets/img/footer/fondoFooter.png"
import img from "../../assets/img/footer/donatellaP.png"
import img1 from "../../assets/img/footer/LogoSic.png"

export default function Footer() {


  return (


    <footer className="w-[1580px] h-[200px] bg-cover bg-center bg-no-repeat border-t-2 border-white"
    style={{
        backgroundImage: `url(${fondoFooter})`,
      }}
    >
        
        <div className="flex justify-center gap-4 mt-10 text-[#FFFFFF]">
          <img className="absolute left-20 w-[180px] h-auto " src={img} alt="" />
          <img   className="absolute right-20 w-[180px] h-auto " src={img1} alt="" /> 
          
<div className="flex flex-wrap justify-center items-center gap-2 mt-6 text-white text-[12px] font-[Montserrat]">
          <a href="#">Política de privacidad</a>|
          <a href="#">Términos y condiciones</a>|
          <a href="#">Política de calidad, inocuidad y gestión ambienta</a></div>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-2 mt-5 mb-10  text-white text-[12px] font-[Montserrat]">
        <p >©Copyright Donatella 2025 todos los derechos reservados.</p>
        </div>
      
     
      </footer>
     
  );
}

