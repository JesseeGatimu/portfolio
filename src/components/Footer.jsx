import React from "react";
import {FaGithub, FaWhatsapp, FaLinkedin} from "react-icons/fa";

const Footer=()=>{
    return(
        <footer className="w-full bg-[#080c14] border-t border-[#243752] text-white">
            <div className="max-w-[1240px] mx-auto px-4 py-10">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                    {/* Logo */}
                    <div className="flex gap-10">
                        <h2 className="font-serif font-bold text-2xl text-[#00ffd5]">
                            Gatimu.dev
                        </h2>
                        <p className="text-xl font-serif mt-2 text-[#c9d1dd]">
                              AI ~ Software Engineer ~ Web Developer
                        </p>
                    </div>
                    {/* Social Link */}
                    <div className="flex items-center gap-10">
                        <a href="https://github.com/JesseeGatimu"
                        target="__blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-[#00e5ff] hover:-translate-y-1 duration-300">
                            <FaGithub size={30} color="white"/>
                        </a>
                        <a href="https://wa.me/254706880500"
                        target="__blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-[#00e5ff] hover:-translate-y-1 duration-300">
                            <FaWhatsapp size={30} color="green"/>
                        </a>
                        <a href="https://linkedin.com/JesseeGatimu"
                        target="__blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-[#00e5ff] hover:-translate-y-1 duration-300">
                            <FaLinkedin size={30} color="blue"/>
                        </a>
                    </div>
                </div>
                {/* Botton */}
                <div className=" mt-8 pt-6 text-center">
                    <p className="font-serif text-1.5xl text-gray-500">
                        © {new Date().getFullYear()} Gatimu Tech Services. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    )
}
export default Footer;