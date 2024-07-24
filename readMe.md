
import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose ,AiOutlineDown,AiOutlineUp} from "react-icons/ai";

const Navbar = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };
  const [showDropdown,setShowDropdown]=useState(false)

 const toggleDropdown=()=>{
    setShowDropdown(!showDropdown);
 } 
 const closeDropDown=()=>{
    setShowDropdown(!showDropdown);
 }

  return (
    <nav className="bg-gray-800 text-white">
      {/* Navbar for Large Screens */}
      <div className="hidden md:flex justify-between p-4">
        <div>
          <a href="#" className="font-bold">Logo</a>
        </div>
        <ul className="flex space-x-4">
          <li>  
            <div className="relative">
              <button onClick={toggleDropdown} className="flex items-center space-x-1 ">
                <span>Home</span>
                <span className="transform transition-transform">{showDropdown ? <AiOutlineUp /> : <AiOutlineDown />}</span>
              </button>
              {showDropdown && (
                <ul className="absolute bg-gray-700 p-2 rounded-lg mt-1 ">
                  <li onClick={closeDropDown}><a href="#">Submenu Item 1</a></li>
                  <li onClick={closeDropDown}><a href="#">Submenu Item 2</a></li>
                  <li onClick={closeDropDown}><a href="#">Submenu Item 3</a></li>
                </ul>
              )}
            </div>
          </li>
          <li><a href="#">About</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </div>

      {/* Sidebar for Small Screens */}
      {showSidebar && (
        <div className="md:hidden fixed inset-0 bg-gray-800 bg-opacity-50 z-10" onClick={toggleSidebar}></div>
      )}    
      <div className={`md:hidden ${showSidebar ? 'block' : 'hidden'} fixed inset-y-0  left-0 w-64  bg-gray-800 z-20 p-4 transition-transform duration-300 transform`}>
        <div className="flex justify-between mb-4"> 
          <div>
            <a href="#" className="font-bold text-white">Logo</a>
          </div>
          <div onClick={toggleSidebar}>
            <AiOutlineClose className="text-white" />
          </div>
        </div>
       
        <ul>
          <li><a href="#    " className="block py-2">Home</a></li>
          <li><a href="#" className="block py-2">About</a></li>
          <li><a href="#" className="block py-2">Services</a></li>
          <li><a href="#" className="block py-2">Contact</a></li>
        </ul>
      </div>

      {/* Toggle Button for Small Screens */}
      <div className="md:hidden p-4 flex justify-between">
        <button onClick={toggleSidebar}>
          {showSidebar ? <AiOutlineClose className="text-white" /> : <AiOutlineMenu className="text-white" />}
        </button>
        <div>
            logo
        </div>
        <div>
            icon
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
