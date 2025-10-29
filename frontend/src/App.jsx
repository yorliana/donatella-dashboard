import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard.jsx";
import Home from './components/Home/Home'
import Pedidos from "./components/Pedidos/Pedidos.jsx";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
         <Route path="/home" element={<Home />} />
          <Route path="/pedidos" element={<Pedidos/>} />
        {/* Más rutas aquí si quieres */}
      </Routes>
    </Router>
  );
}

export default App;


