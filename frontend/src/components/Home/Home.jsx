import { useState } from "react";
import SeccionI from "../SeccionI/SeccionI";
import NavBar from "../NavBar/NavBar.jsx";
import SeccionII from "../SeccionII/SeccionII";

import SeccionIII from "../SeccionIII/SeccionIII";
import SeccionIV from "../SeccionIV/SeccionIV.jsx"
import SeccionV from "../SeccionV/SeccionV.jsx"
import Footer from '../Footer/Footer.jsx'
import SeccionVI from "../../components/SeccionVI/SeccionVI.jsx";

function Home() {
  
  return (
    
    <div className="min-h-screen bg-sky-50 flex justify-center items-center">
<div className=" shadow-lg rounded-2xl  flex flex-col justify-center items-center">
  <SeccionI/>

  <NavBar/>

  <SeccionII/>
    <SeccionIII/>
    <SeccionIV/>

    
  <SeccionVI/>

      <Footer/>
      </div>
    </div>
  );
}

export default Home;
