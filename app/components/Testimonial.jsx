'use client';
import React, { useEffect, useState } from "react";

const testimonials = [
    {
        name: "Jane Doe",
        role: "Product Manager",
        message:
            "This service exceeded my expectations. The team was professional and the results were outstanding.",
    },
    {
        name: "John Smith",
        role: "Developer",
        message:
            "A seamless experience from start to finish. I highly recommend them to anyone looking for quality.",
    },
    {
        name: "Emily Johnson",
        role: "Designer",
        message:
            "Their attention to detail and commitment to excellence is unmatched. Truly a pleasure to work with.",
    },
];

export default function Testimonial() {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((prev) => (prev + 1) % testimonials.length);
        }, 10000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className=" max-w-full mx-auto mb-96 py-12 px-4 flex flex-col items-center">
            <h1 className="text-6xl font-bold mb-4">What people say</h1>
            <div className="bg-white shadow-md rounded-lg p-8 min-h-[220px] flex flex-col items-center transition-all duration-500">
                <p className="text-gray-700 text-4xl italic mb-6 text-center">
                    “{testimonials[index].message}”
                </p>
                <div className="flex flex-col items-center">
                    <span className="font-semibold text-gray-900">{testimonials[index].name}</span>
                    <span className="text-gray-400 text-sm">{testimonials[index].role}</span>
                </div>
            </div>
            <div className="flex space-x-2 mt-6">
                {testimonials.map((_, i) => (
                    <button
                        key={i}
                        onClick={() => setIndex(i)}
                        className={`h-2 w-2 rounded-full transition-all duration-300 ${
                            i === index ? "bg-gray-900" : "bg-gray-300"
                        }`}
                        aria-label={`Show testimonial ${i + 1}`}
                    />
                ))}
            </div>
        </div>
    );
}