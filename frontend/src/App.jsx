import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard.jsx";
import Home from './components/Home/Home'
import Pedidos from "./components/Pedidos/Pedidos.jsx";
import SeccionI from './components/SeccionI/SeccionI.jsx'
import NavBar from "./components/navBar/navBar.jsx";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
         <Route path="/home" element={<Home />} />
          <Route path="/pedidos" element={<Pedidos/>} />
          <Route path="/seccioni" element={<SeccionI/>} />
          <Route path="/navBar" element={<NavBar/>} />
        {/* Más rutas aquí si quieres */}
      </Routes>
    </Router>
  );
}

export default App;


