import React, { useState, useRef, useEffect } from 'react';
import { Search, ChevronDown, Home,Inbox, Users, Folder, Calendar, User } from 'lucide-react';
import img from '../../assets/img/seccionI/donatella.png'

export default function NavBar() {

  
  const [activeTab, setActiveTab] = useState('Dashboard');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isUserDropdownOpen, setIsUserDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const timeoutRef = useRef(null);

  const user = {
    email: 'user@example.com',
    displayName: 'User',
    photoURL: 'https://placehold.co/100x100/EFEFEF/4A4A4A?text=U'
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsUserDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setIsUserDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsUserDropdownOpen(false);
    }, 150);
  };

  const handleDropdownClick = () => {
    setIsUserDropdownOpen(!isUserDropdownOpen);
  };

  const navItems = [
    { name: 'Dashboard', icon: Home },
    { name: 'Team', icon: Users },
    { name: 'Projects', icon: Folder },
    { name: 'Calendar', icon: Calendar },
  ];

  return (
    
   <div className="w-full fixed top-0 left-0 z-50">
  <header className="bg-[#513120] text-white shadow-md w-full">
    <div className="flex items-center justify-between px-6 py-3">
      
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
        <Search className="h-5 w-5 text-white cursor-pointer hover:text-gray-300" />
        <Inbox className="h-5 w-5 text-white cursor-pointer hover:text-gray-300" />

      
        
      </div>
    </div>
  </header>
</div>

  );
}
