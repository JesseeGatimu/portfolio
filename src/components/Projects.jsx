import React from "react";
import {FaGithub, FaExternalLinkAlt} from 'react-icons/fa'

const Projects=()=>{
    return(
        <section className="w-full bg-transparent py-24 text-white" id="projects">
            <div>
                <div>
                    <p>My Work</p>
                    <h2>Featured Projects</h2>
                    <p>A selection of sofwares, AI projects and solutions that I have created.</p>
                </div>
                {/* Project Card */}
                <div>
                    {/* Project 1 */}
                    <div>
                        <p>Hospital Management System</p>
                        <h3>Meditack Hospital Management System.</h3>
                        <p>A comprehensive hospital management system designed to manage doctors, patients ,
                           appointments, medical records and payments efficiently. 
                        </p>
                        <div>
                            <span>Django</span>
                            <span>React</span>
                            <span>PostgreSQL</span>
                        </div>
                        <div>
                            <button>
                                <FaGithub/> 
                                Github
                            </button>
                        </div>
                    </div>
                    {/* Project 2 */}
                    <div>
                        <p>Business Software</p>
                        <h3>Supermarket POS</h3>
                        <p>
                            A point of sale system design to aid businesses in sales,
                            inventory management and report insights. 
                        </p>
                        <div>
                            <span>Django</span>
                            <span>PostgreSQL</span>
                            <span>React</span>
                        </div>
                        <div>
                            <button>
                                <FaGithub/>
                                Github
                            </button>
                        </div>
                    </div>
                    {/* Project 3 */}
                    <div>
                        <p>Drip Nation</p>
                        <h3>E-Commerce Application</h3>
                        <p>
                            An E-commerce web application designed to help businesses do online store
                            fronting through ensuring a direct to consumer sale approach replacing the 
                            need for the traditional brick and mortar architecture.
                        </p>
                        <div>
                            <span>React</span>
                            <span>Tailwind</span>
                            <span>Django</span>
                            <span>PostgreSQL</span>
                        </div>
                        <div>
                            <button>
                                <FaGithub/>
                                Github
                            </button>
                        </div>
                    </div>
                    {/* Project 3 */}
                    <div>
                        <p>AI Predictor</p>
                        <h3>AI Premier Leaugue Predictor</h3>
                        <p>An AI premier league results predictor. Predicting both the matches and the results or the matches. 
                           It uses the past seasons data to make future predictions and even the eventual outcome of the next
                           season and the winner of the league
                        </p>
                        <div>
                            <span>FastAPI</span>
                            <span>React</span>
                            <span>SQLite</span>
                        </div>
                        <div>
                            <button>
                                <FaGithub/>
                                Github
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
} 
export default Projects;