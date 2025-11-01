import React, { useState, useRef, useEffect } from 'react';
import { Search, Bell, ChevronDown, Home, Users, Folder, Calendar, User } from 'lucide-react';
import img from '../../assets/img/donatella.png'
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
    <div className="mx-4 sm:mx-6 mt-2 font-Monserrate">
      <header className="relative">
        <div className="bg-[#513120ff] border border-gray-800 rounded-2xl shadow-2xl p-4 text-white">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
            <div className="flex items-center space-x-2">
              <div className="flex items-center space-x-3 ml-[20px]">
        <img 
          src={img}
         
          className="w-75 h-10 rounded-full object-cover"
        />
       </div>
      </div>

            </div>
            

             

            {/* ICONOS DERECHA */}
            <div className="flex items-center space-x-2 sm:space-x-4">
              <div className="relative hidden sm:block">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-gray-30" />
                </div>
                <input
                  type="text"
                  
                  className="
                    bg-[#513120ff] rounded-xl 
                    pl-10 pr-4 py-2 w-40 md:w-10 text-[#513120ff]
                    focus:outline-none focus:ring-2 focus:ring-gray-600
                    transition-all duration-300
                  "
                />
              </div>

              <button className="sm:hidden p-2 rounded-xl bg-[#513120ff]  border border-gray-20 hover:bg-[#513120ff]transition-all duration-300">
                <Search className="h-5 w-5 text-gray-400" />
              </button>

              <button className="
                relative p-2 rounded-xl bg-[#513120ff]border 
                hover:bg-gray-800 transition-all duration-300 group
              ">
                <Bell className="h-5 w-5 text-gray-400 group-hover:text-white transition-colors" />
              </button>

              {/* USUARIO */}
              <div className="relative" ref={dropdownRef}>
                <div
                  className="flex items-center space-x-1 sm:space-x-3 cursor-pointer hover:bg-gray-900 p-2 rounded-xl transition-all duration-300"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                  onClick={handleDropdownClick}
                >
                  <div className="w-8 h-8 rounded-full overflow-hidden bg-gray-800 flex items-center justify-center border border-gray-700">
                    {user.photoURL ? (
                      <img src={user.photoURL} alt="User avatar" className="w-full h-full object-cover" />
                    ) : (
                      <User className="h-5 w-5 text-white" />
                    )}
                  </div>
                  <ChevronDown
                    className={`h-4 w-4 text-gray-500 hidden sm:block transition-transform duration-300 ${
                      isUserDropdownOpen ? 'rotate-180' : ''
                    }`}
                  />
                </div>

               
              </div>
            </div>
          </div>

          
             
        </div>
      </header>
    </div>
  );
}
