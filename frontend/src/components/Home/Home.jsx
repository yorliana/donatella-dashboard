import { useState } from "react";
import SeccionI from "../SeccionI/SeccionI";
import NavBar from "../NavBar/NavBar.jsx";
import SeccionII from "../SeccionII/SeccionII";
import SeccionIII from "../SeccionIII/SeccionIII";
import SeccionIV from "../SeccionIV/SeccionIV.jsx"
import SeccionV from "../SeccionV/SeccionV.jsx"
import Footer from '../Footer/Footer.jsx'
import SeccionVI from "../../components/SeccionVI/SeccionVI.jsx";
import img from   '../../assets/img/seccionI/fondo.png'
function Home() {
  
  return (
    
    <div className="overflow-y-hidden">
  <SeccionI/>

  <NavBar/>
<div  className="h-[760px]  w-full"
style={{ backgroundImage: `url(${img})` }}>
  
  <SeccionII
  />
  </div>
  <div>
    
    <SeccionIII/></div>
    <SeccionIV/>

    <div className="rounded-t-3xl">
  <SeccionVI/>
</div>
      <Footer/>
     </div>
  );
}

export default Home;
