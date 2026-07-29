import React from "react";
import {FaWhatsapp, FaEnvelope} from "react-icons/fa";

const Contact =() =>{
    return(
        <section id="contact" className="w-full bg-[#080c14] text-white py-24">
            <div className="max-w-[1240px] mx-auto px-4">
                {/* Section Head */}
                <div className="flex items-center gap-3 mb-10">
                    <div className="w-7 h-[1px] bg-cyan-400"></div>
                    <p className="font-serif text-xl tracking-[0.2em] text-cyan-400 uppercase">Connect</p>
                </div>
                {/* Contact Form */}
                <div className="max-w-[900px] mx-auto bg-[#101a2d] border border-[#242754] rounded-2xl p-10 text-center">
                    <h2 className="font-serif text-4xl md:text-5xl font-bold">
                        Let's <span className="text-[#06b0ca]"> Build </span>Something
                    </h2>
                    <p className="font-serif text-1.8xl text-[#7185a5] leading-6 mt-5 max-w-lg mx-auto">
                        Whether it is a full stack application, an AI model,
                        or something in between - I'm open to collaborations,
                        opportunities and interesting conversations.
                    </p>
                    {/* Contact options */}
                    <div className="flex text-2xl flex-col sm:flex-row justify-center gap-6 mt-8">
                        {/* Email */}
                        <a href="mailto:gatimutech@gmail.com"
                        className="flex items-center justify-center gap-3 px-6 py-3 border border-cyan-400/30
                        bg-cyan-400/5 rounded-lg font-serif text-sm text-cyan-400
                        hover:bg-cyan-400/10 hover:border-cyan-400 hover:-translate-y-1 duration-300">
                            <FaEnvelope className="text-lg"/>Email me
                        </a>
                        {/* Whatsapp */}
                        <a href="https://wa.me/254706880500" target="_blank" rel="noopener noreferrer"
                        className="flex items-center justify-center gap-3 px-6 py-3 border border-cyan-400/30
                        bg-cyan-400/5 rounded-lg font-serif text-sm text-cyan-400
                        hover:bg-cyan-400/10 hover:border-cyan-400 hover:-translate-y-1 duration-300">
                            <FaWhatsapp className="text-lg"/>WhatsApp me
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Contact;