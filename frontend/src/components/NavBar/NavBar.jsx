import React, { useState, useRef, useEffect } from 'react';
import { Search, ChevronDown, Home,Inbox, Users, Folder, Calendar, User } from 'lucide-react';
import img from '../../assets/img/seccionI/donatella.png'
import { useNavigate } from "react-router-dom";

// Simulamos rutas del dashboard
const rutasDashboard = [
  { nombre: "Dashboard", ruta: "/dashboard" },
  { nombre: "Redes Sociales", ruta: "/seccionIV" },
  { nombre: "Configuración", ruta: "/configuracion" },
  { nombre: "Reportes", ruta: "/reportes" },
  { nombre: "Perfil", ruta: "/perfil" },
  { nombre: "Ayuda", ruta: "/ayuda" },
];
export default function NavBar() {


  const [query, setQuery] = useState("");
  const [resultados, setResultados] = useState([]);
  const navigate = useNavigate();

  const handleSearch = () => {
    if (query.trim() === "") {
      setResultados([]);
      return;
    }

    const filtrados = rutasDashboard.filter((item) =>
      item.nombre.toLowerCase().includes(query.toLowerCase())
    );

    setResultados(filtrados);
  };

  const handleSelect = (item) => {
    setQuery(item.nombre);
    setResultados([]);
    navigate(item.ruta); // Redirige a la ruta correspondiente
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && resultados.length > 0) {
      handleSelect(resultados[0]); // Si presiona Enter, va al primer resultado
    }
  };
  return (
    
   <div className="w-full fixed top-0 left-0 z-50">
  <header className="bg-[#5a3d2b] text-white shadow-md w-full">
    <div className="flex items-center justify-between px-5 py-3">
      
      {/* LOGO */}
      <div className="flex items-center space-x-3">
        <img 
          src={img}
          alt="Donatella Logo"
          className="h-10 w-auto object-contain"
        />
      </div>

      {/* BOTÓN + ICONOS DERECHA */}
      <div className="flex items-center space-x-6">
        {/* Botón Ordenar ahora */}
        <button className="border border-white rounded-lg px-4 py-2 hover:bg-white hover:text-[#513120] transition">
          Ordenar ahora
        </button>

        {/* Iconos */}
         <div className="relative w-35">
      <div className="flex items-center bg-[#5a3d2b] rounded-md p-2">
        <input
          type="text"
          placeholder="Buscar"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={handleKeyDown}
          className="flex-1 bg-transparent text-white placeholder-gray-300 outline-none"
        />
        <Search
          className="h-5 w-5 text-white cursor-pointer hover:text-gray-300"
          onClick={handleSearch}
        />
      </div>

      {/* Resultados */}
      {resultados.length > 0 && (
        <ul className="absolute top-full mt-1 w-full bg-gray-800 text-white rounded-md shadow-lg z-10 max-h-40 overflow-y-auto">
          {resultados.map((item, index) => (
            <li
              key={index}
              className="px-4 py-2 hover:bg-gray-600 cursor-pointer"
              onClick={() => handleSelect(item)}
            >
              {item.nombre}
            </li>
          ))}
        </ul>
      )}
    </div>
   
       
        
        <Inbox 
        className="h-5 w-5 text-white cursor-pointer hover:text-gray-300" 
           onClick={() => navigate("/dashboard")}
        />

      
        
      </div>
    </div>
  </header>
</div>

  );
}
