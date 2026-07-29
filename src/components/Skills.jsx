import React from 'react';
import {FaLaptopCode,FaCode,FaRobot,FaBolt,FaChartBar} from 'react-icons/fa';

const Skills=()=>{
    return (
        <section className="w-full py-24 bg-transparent text-white " id="skills">
            <div className="max-w-[1240px] mx-auto px-4p">
                {/* heading */}
                <div className="text-center mb-16">
                    <p className="font-serif text-[#1cb9f1] uppercase tracking-[0.2em] font-semibold">My Expertise</p>
                    <h2 className="font-serif text-4xl md:text-5xl font-bold mt-3">What can I do ?</h2>
                    <p className="text-gray-400 mt-5 max-w-2xl mx-auto font-serif">I build and design intelligent systems that help businesses automate processes, improve efficiency and create exceptional digital experience.</p>
                </div>
                {/* Cards */}
                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {/* Full Stack */}
                    <div className="bg-[#131d31] border border-cyan-400/10 rounded-2xl p-8 hover:border-cyan-400 hover:-translate-y-2 duration-300">
                        <FaLaptopCode className="text-5xl text-[#1cb9f1] mb-6"/>
                        <h3 className="font-serif text-2xl font-bold mb-4">Full Stack Engineer.</h3>
                        <p className="text-gray-400 font-serif">Building complete web application from responsive user interfaces to scalable backend and database systems. </p>
                    </div>
                    {/* AI Engineer */}
                    <div className="bg-[#131d31] border border-cyan-400/10 rounded-2xl p-8 hover:border-cyan-400 hover:-translate-y-2 duration-300">
                        <FaRobot className="text-5xl text-[#1cb9f1] mb-6"/>
                        <h3 className="font-serif text-2xl font-bold mb-4">AI Engineer</h3>
                        <p className="text-gray-400 font-serif">Developing intelligent systems using Machine Learning, Computer Vision and Deep Learning technologies. </p>
                    </div>
                    {/* Software Engineer */}
                    <div className="bg-[#131d31] border border-cyan-400/10 rounded-2xl p-8 hover:border-cyan-400 hover:-translate-y-2 duration-300">
                        <FaCode className="text-5xl text-[#1cb9f1] mb-6"/>
                        <h3 className="font-serif text-2xl font-bold mb-4">Software Engineer. </h3>
                        <p className="text-gray-400 font-serif">Designing reliable software solutions with clear architecture, maintainable code and modern engineering practices. </p>
                    </div>
                    {/* AI automation */}
                    <div className="bg-[#131d31] border border-cyan-400/10 rounded-2xl p-8 hover:border-cyan-400 hover:-translate-y-2 duration-300">
                        <FaBolt className="text-5xl text-[#1cb9f1] mb-6"/>
                        <h3 className="font-serif text-2xl font-bold mb-4">AI Automation</h3>
                        <p className="text-gray-400 font-serif">Building AI powered workflows, Intelligents agents, business automation and productivity solutions that saves on time and energy.</p>
                    </div>
                    {/* Data Analyst */}
                    <div className="bg-[#131d31] border border-cyan-400/10 rounded-2xl p-8 hover:border-cyan-400 hover:-translate-y-2 duration-300">
                        <FaChartBar className="text-5xl text-[#1cb9f1] mb-6"/>
                        <h3 className="font-serif text-2xl font-bold mb-4">Data Scientist </h3>
                        <p className="text-gray-400 font-serif">Transforming raw data into informative insights through data analysis, predictive modelling, machine learning and data visualization to support infromed business decisions. </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Skills;