import React from "react";
import { useState } from "react";
import {AiOutlineMenu,AiOutlineClose} from 'react-icons/ai'


const Navbar =() =>{
    const [nav, setNav]=useState(false);
    return(
        <div className=" flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white">
            <h1 className="w-full text-3xl font-bold text-[#1cb9f1]">GATIMU.dev</h1>
            <ul className="hidden md:flex text-[#1cb9f1]">
                <li className="p-4"><a href="#home" className="hover:text-[#98c4b8]">Home</a></li>
                <li className="p-4"><a href="#skills" className="hover:text-[#98c4b8]">Skills</a></li>
                <li className="p-4"><a href="#projects" className="hover:text-[#98c4b8]">Projects</a></li>
                <li className="p-4"><a href="#contact" className="hover:text-[#98c4b8]">Contact</a></li>
            </ul>
            <div className="md:hidden" onClick={()=>setNav(!nav)}>
                {nav ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} />}
            </div>
            <div className={nav
            ? "fixed left-0 top-0 z-50 w-[60%] h-full border-r border-gray-900 bg-[#000300] ease-in-out duration-500"
            : "fixed left-[-100%] top-0 w-[60%] h-full border-r border-gray-900 bg-[#000300] ease-in-out duration-500"}>
              <h1 className="w-full text-3xl font-bold text-[#95edec] p-4">GATIMU.dev</h1>
              <ul className="font-serif uppercase p-4 text-[#95edec]">
                <li className="p-4 border-b border-gray-600"><a href="#home" onClick={()=>setNav(false)} className="hover:text-[#98c4b8]">Home</a></li>
                <li className="p-4 border-b border-gray-600"><a href="#skills" onClick={()=>setNav(false)} className="hover:text-[#98c4b8]">Skills</a></li>
                <li className="p-4 border-b border-gray-600"><a href="#projects" onClick={()=>setNav(false)} className="hover:text-[#98c4b8]">Projects</a></li>
                <li className="p-4 border-b border-gray-600"><a href="#contact" onClick={()=>setNav(false)} className="hover:text-[#98c4b8]">Contact</a></li>
              </ul>
            </div>
        </div>
    )
}
export default Navbar;