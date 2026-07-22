import React from "react";
import jess from "../assets/jess.jpeg";

const Hero =()=>{
    return(
        <section className="w-full bg-transparent] text-white py-24 ">
            <div className="max-w-[1240px] mx-auto flex flex-col md:flex-row items-center justify-between px-4">
            {/* Left side*/}
            <div className="mt-10">
                <p className="text-[#1cb9f1] font-semibold uppercase tracking-wide">Welcome To Gatimu Tech Services</p>
                <h1 className=" font-serif text-4xl text-[#f0f9f9] sm:text-5xl lg:text-4xl font-bold mt-3">I am Jessee Gatimu</h1>
                <h2 className="font-serif text-2xl sm:text-2xl text-[#1cb9f1] font-medium mt-3">AI engineer, full stack web developer and Software Engineer. </h2>
                <p className="font-serif text-gray-300 mt-5 text-lg leading-relaxed">I build AI powered sofware solution, Web applications and customizable enterprise sofware.</p>
                <br></br>
                <br></br>
                <div>
                    <button className="text-[0.85rem] no-underline tracking-[0.06em] rounded-7px font-serif bg-[#1cb9f1] text-black px-6 py-3 font font-semibold rounded-md hover:bg-[#00cfea] hover:-translate-y-0.5 ">View my work</button>
                    <button className="border border-blue-500 bg-transparent rounded-7px text-[0.85rem] no-underline tracking-[0.06em] font-serif text-[#1cb9f1] px-6 py-3 hover:bg-[#00e5ff12.] hover:-translate-y-0.5 ml-4 rounded-md">Contact me</button>
                </div>
            </div>
            {/* right side */}
            <div>
                <div>
                    <img src={jess} className="w-120 h-140 object-cover rounded-md"></img>
                </div>
            </div>
            </div>
        </section>
    )
}
export default Hero;