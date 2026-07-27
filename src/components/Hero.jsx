import React from "react";
import jess from "../assets/jess.jpeg";
import {AiOutlineArrowDown, AiOutlineArrowRight} from "react-icons/ai"

const Hero =()=>{
    return(
        <section className="w-full bg-transparent text-white py-24 " id="home">
            <div className="max-w-[1240px] mx-auto flex flex-col md:flex-row items-center justify-between px-4">
            {/* Left side*/}
            <div className="mt-10">
                <div className="bg-[#252b2e] inline-flex items-center gap-2 border border-[#289696] px-5 py-4 rounded-4xl">
                <span className="w-3 h-3 bg-[#0bb1b1] rounded-full animate-pulse"></span>
                <p className="text-[#0783b0] font-semibold uppercase tracking-wide">Welcome To Gatimu Tech Services</p>
                </div>
                <h1 className=" font-serif text-4xl text-[#f0f9f9] sm:text-5xl lg:text-4xl font-bold mt-3">I am Jessee Gatimu</h1>
                <h2 className="font-serif text-2xl sm:text-2xl text-[#1cb9f1] font-medium mt-3">AI engineer, full stack web developer and Software Engineer. </h2>
                <p className="font-serif text-gray-300 mt-5 text-lg leading-relaxed">I build AI powered sofware solution, Web applications and customizable enterprise sofware.</p>
                <br></br>
                <br></br>
                <div className="flex gp-4">
                    <button className="flex items-center text-[0.85rem] no-underline tracking-[0.06em] rounded-7px font-serif bg-[#1cb9f1] text-black px-6 py-3 font font-semibold rounded-md hover:bg-[#00cfea] hover:-translate-y-0.5 "><a href="#projects">View my work  </a><AiOutlineArrowDown size={18}/></button>
                    <button className="flex items-center border border-blue-500 bg-transparent rounded-7px text-[0.85rem] no-underline tracking-[0.06em] font-serif text-[#1cb9f1] px-6 py-3 hover:bg-[#00e5ff12.] hover:-translate-y-0.5 ml-4 rounded-md">Contact me  <AiOutlineArrowRight/></button>
                </div>
            </div>
            {/* right side */}
            <div className="relative w-[480px] h-[600px] ">
                <div className="absolute -inset-4 rounded-3xl border border-cyan-400/20"></div>
                <div className="absolute -inset-4 rounded-2xl border border-cyan-500/20"></div>
                <img src={jess} className="relative z-10 w-full h-full object-cover object-top rounded-2xl border-2 border-cyan-300"></img>
                <div className="bg-black absolute -bottom-5 left-1/2 -translate-x-1/2 border border-cyan-400/30 rounded-full py-2 px-5 flex items-center gap-2 z-20">
                    <span className="w-2 h-2 bg-[#1cb9f1] rounded-full animate-pulse"></span>
                    <span className="text-sm text-gray-300">Open to work. Nairobi, Kenya. </span>
                </div>
            </div>
            </div>
        </section>
    )
}
export default Hero;