'use client';
import React, { useRef, useState } from "react";

const projects = [
    {
        title: "Electrification of Remote Communities",
        description: " Designed off-grid solar installations (KOSAP) and grid extensions, boosting energy access to Rural Kenya.",
        image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80",
    },
    {
        title: "National Grid Infrastructure Expansion",
        description: " Supervised and provided technical leadership to grid extension construction projects",
        image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
    },
    {
        title: "County Energy Data Collection and Analysis",
        description: "Developed Samburu county database of non-electrified Public facilities for project planning and implementation",
        image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=600&q=80",
    },
    {
        title: "Community Training & Awareness Programs for Renewable Energy",
        description: " Spearheaded community sensitization programs to promote energy adoption, sustainability and wayleave acquisition",
        image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=600&q=80",
    },
    // Add more projects as needed
];

const Projects = () => {
    const [paused, setPaused] = useState(false);

    return (
        <div className="relative overflow-hidden w-full min-h-96 py-12 bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-400">
            <h1 className="items-center text-6xl mb-16 text-white font-bold">Projects that spark change </h1>
            
            <div
                className={`flex gap-8 w-max animate-marquee ${paused ? 'pause' : ''}`}
                onMouseEnter={() => setPaused(true)}
                onMouseLeave={() => setPaused(false)}
            >
                {[...projects, ...projects].map((project, idx) => (
                    <div
                        key={idx}
                        className="relative group w-80 h-96 rounded-xl shadow-xl overflow-hidden flex-shrink-0"
                    >
                        <div
                            className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-105"
                            style={{ backgroundImage: `url(${project.image})` }}
                        />
                        <div className="absolute  inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end items-center text-center px-4">
                            <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                            <p className="text-white text-base">{project.description}</p>
                        </div>
                    </div>
                ))}
            </div>
            <style jsx>{`
                .animate-marquee {
                    animation: marquee 30s linear infinite;
                }
                .pause {
                    animation-play-state: paused;
                }
                @keyframes marquee {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
            `}</style>
        </div>
    );
};

export default Projects;