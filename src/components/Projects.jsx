import React from "react";
import {FaGithub, FaExternalLinkAlt} from 'react-icons/fa'

const Projects=()=>{
    return(
        <section className="w-full bg-transparent py-24 text-white" id="projects">
            <div className="max-w-[1240px] mx-auto px-4">
                {/* Heading */}
                <div className="text-center mb-16">
                    <p className="font-serif text-[#1cb9f1] uppercase tracking-[0.2em] font-semibold">My Work</p>
                    <h2 className="text-[#00e5ff] font-serif text-4xl md:text-4xl font-bold mt-3">Featured Projects</h2>
                    <p className="text-gray-400 mt-5 max-w-2xl mx-auto">A selection of sofwares, AI projects and solutions that I have created.</p>
                </div>
                {/* Project Card */}
                <div className="grid gap-8 md:grid-cols-2">
                    {/* Project 1 */}
                    <div className="bg-[#131d31] border border-cyan-400/10 rounded-2xl p-8 hover:translate-y-2 duration-300">
                        <p className="text-[#00e5ff] text-sm uppercase tracking-wide font-semibold">Hospital Management System</p>
                        <h3 className="font-serif text-2xl mt-3 mb-4 font-bold">Meditack Hospital Management System.</h3>
                        <p className="text-gray-400 leading-relaxed font-serif">A comprehensive hospital management system designed to manage doctors, patients ,
                           appointments, medical records and payments efficiently. 
                        </p>
                        <div className="flex flex-wrap gap-2 mt-6">
                            <span className="px-3 py-1 border border-cyan-400/20 rounded-full text-gray-300">Django</span>
                            <span className="px-3 py-1 border border-cyan-400/20 rounded-full text-gray-300">React</span>
                            <span className="px-3 py-1 border border-cyan-400/20 rounded-full text-gray-300">PostgreSQL</span>
                        </div>
                        <div className="flex gap-4 mt-6">
                            <button className="flex items-center gap-2 text-[#00e5ff] hover:text-white duration-300">
                                <FaGithub/> 
                                <a href="https://github.com/JesseeGatimu/Meditrack">Github</a>
                            </button>
                        </div>
                    </div>
                    {/* Project 2 */}
                    <div className="bg-[#131d31] border border-cyan-400/10 rounded-2xl p-8 hover:translate-y-2 duration-300">
                        <p className="text-[#00e5ff] text-sm uppercase tracking-wide font-semibold">Business Software</p>
                        <h3 className="font-serif text-2xl mt-3 mb-4 font-bold">Supermarket POS</h3>
                        <p className="text-gray-400 leading-relaxed font-serif">
                            A point of sale system design to aid businesses in sales,
                            inventory management and report insights. 
                        </p>
                        <div className="flex flex-wrap gap-2 mt-6">
                            <span className="px-3 py-1 border border-cyan-400/20 rounded-full text-gray-300">Django</span>
                            <span className="px-3 py-1 border border-cyan-400/20 rounded-full text-gray-300">PostgreSQL</span>
                            <span className="px-3 py-1 border border-cyan-400/20 rounded-full text-gray-300">React</span>
                        </div>
                        <div className="flex gap-4 mt-6">
                            <button className="flex items-center gap-2 text-[#00e5ff] hover:text-white duration-300">
                                <FaGithub/>
                                <a href="https://github.com/JesseeGatimu/supermarket-pos">Github</a>
                            </button>
                        </div>
                    </div>
                    {/* Project 3 */}
                    <div className="bg-[#131d31] border border-cyan-400/10 rounded-2xl p-8 hover:translate-y-2 duration-300">
                        <p className="text-[#00e5ff] text-sm uppercase tracking-wide font-semibold">Drip Nation</p>
                        <h3 className="font-serif text-2xl mt-3 mb-4 font-bold">E-Commerce Application</h3>
                        <p className="text-gray-400 leading-relaxed font-serif">
                            An E-commerce web application designed to help businesses do online store
                            fronting through ensuring a direct to consumer sale approach replacing the 
                            need for the traditional brick and mortar architecture.
                        </p>
                        <div className="flex flex-wrap gap-2 mt-6">
                            <span className="px-3 py-1 border border-cyan-400/20 rounded-full text-gray-300">React</span>
                            <span className="px-3 py-1 border border-cyan-400/20 rounded-full text-gray-300">Tailwind</span>
                            <span className="px-3 py-1 border border-cyan-400/20 rounded-full text-gray-300">Django</span>
                            <span className="px-3 py-1 border border-cyan-400/20 rounded-full text-gray-300">PostgreSQL</span>
                        </div>
                        <div className="flex gap-4 mt-6">
                            <button className="flex items-center gap-2 text-[#00e5ff] hover:text-white duration-300">
                                <FaGithub/>
                                <a href="https://github.com/JesseeGatimu/drip_nation">Github</a>
                            </button>
                        </div>
                    </div>
                    {/* Project 3 */}
                    <div className="bg-[#131d31] border border-cyan-400/10 rounded-2xl p-8 hover:translate-y-2 duration-300">
                        <p className="text-[#00e5ff] text-sm uppercase tracking-wide font-semibold">AI Predictor</p>
                        <h3 className="font-serif text-2xl mt-3 mb-4 font-bold">AI Premier Leaugue Predictor</h3>
                        <p className="text-gray-400 leading-relaxed font-serif">An AI premier league results predictor. Predicting both the matches and the results or the matches. 
                           It uses the past seasons data to make future predictions and even the eventual outcome of the next
                           season and the winner of the league
                        </p>
                        <div className="flex flex-wrap gap-2 mt-6">
                            <span className="px-3 py-1 border border-cyan-400/20 rounded-full text-gray-300">FastAPI</span>
                            <span className="px-3 py-1 border border-cyan-400/20 rounded-full text-gray-300">React</span>
                            <span className="px-3 py-1 border border-cyan-400/20 rounded-full text-gray-300">SQLite</span>
                        </div>
                        <div className="flex gap-4 mt-6">
                            <button className="flex items-center gap-2 text-[#00e5ff] hover:text-white duration-300">
                                <FaGithub/>
                                <a href="https://github.com/JesseeGatimu/premier-league-predictor">Github</a>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
} 
export default Projects;