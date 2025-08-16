'use strict';
'use client';
import React, { useRef, useEffect, useState } from "react";

// Sample data
const educationData = [
    {
        icon: "🎓",
        title: "Bachelor’s Degree – Electrical & Telecommunications Engineering",
        institution: "Multimedia University of Kenya",
        year: 2023,
    },
    {
        icon: "🛠",
        title: "Supervisory Skills Development Course",
        institution: "Kenya School of Government",
        year: 2025,
    },
    {
        icon: "💻",
        title: "T3 Grid Tie Solar PV Certification",
        institution: "Multimedia University of Kenya",
        year: 2020,
    },
    {
        icon: "💻",
        title: "T1 & T2 Solar PV Certification",
        institution: "Multimedia University of Kenya",
        year: 2020,
    },
];

// Animation hook
function useInView(ref) {
    const [isIntersecting, setIntersecting] = useState(false);

    useEffect(() => {
        const observer = new window.IntersectionObserver(
            ([entry]) => setIntersecting(entry.isIntersecting),
            { threshold: 0.2 }
        );
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, [ref]);

    return isIntersecting;
}

const TimelineItem = ({ item, isLast }) => {
    const ref = useRef();
    const inView = useInView(ref);

    return (
        <div
            ref={ref}
            className={`relative flex items-start group`}
            style={{ minHeight: 120 }}
        >
            {/* Year Marker */}
            <div className="sticky left-0 top-0 flex flex-col items-center w-20 md:w-24 z-10">
                <span
                    className="bg-gradient-to-br from-gray-100/80 to-gray-300/60 dark:from-gray-800/80 dark:to-gray-700/60
                        text-gray-700 dark:text-gray-200 font-semibold rounded-full shadow-md px-4 py-2 mb-2
                        border border-gray-200 dark:border-gray-700 text-lg"
                >
                    {item.year}
                </span>
                {!isLast && (
                    <div className="w-1 h-full bg-gradient-to-b from-gray-300/60 to-gray-100/0 dark:from-gray-700/60 dark:to-gray-900/0" />
                )}
            </div>
            {/* Content */}
            <div
                className={`ml-2 md:ml-8 flex-1 transition-all duration-700 ease-out
                    ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
                `}
            >
                <div className="flex items-center gap-4">
                    <span
                        className="text-3xl md:text-4xl drop-shadow-sm"
                        aria-label="icon"
                    >
                        {item.icon}
                    </span>
                    <div>
                        <h3 className="font-semibold text-lg md:text-xl text-gray-900 dark:text-gray-100">
                            {item.title}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400 text-sm md:text-base">
                            {item.institution}
                        </p>
                    </div>
                </div>
                {!isLast && (
                    <div className="my-6 border-b border-dashed border-gray-200 dark:border-gray-700" />
                )}
            </div>
        </div>
    );
};

const Education = () => {
    return (
        <section
            className="py-12 mt-12 md:py-20 px-4 md:px-0 max-w-3xl mx-auto"
            aria-label="Education & Certifications"
        >
            <h2 className="text-2xl md:text-3xl font-bold mb-10 text-center text-gray-900 dark:text-gray-100 tracking-tight">
               My Education Journey
            </h2>
            <div className="relative">
                <div className="flex flex-col gap-12">
                    {educationData
                        .sort((a, b) => b.year - a.year)
                        .map((item, idx, arr) => (
                            <TimelineItem
                                key={idx}
                                item={item}
                                isLast={idx === arr.length - 1}
                            />
                        ))}
                </div>
            </div>
        </section>
    );
};

export default Education;

/* 
    Tailwind CSS is used for styling.
    For best results, ensure your project supports dark mode (class-based or media).
    The sticky year markers and fade-in/slide-up animations are handled via CSS and IntersectionObserver.
*/