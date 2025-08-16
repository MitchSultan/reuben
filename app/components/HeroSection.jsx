'use client';
// Importing the hero image
import React from 'react';
import { DotPattern } from "@/components/magicui/dot-pattern";

export default function HeroSection() {
  const [time, setTime] = React.useState(() => {
    const now = new Date();
    // Nairobi is GMT+3
    now.setUTCHours(now.getUTCHours()  - now.getTimezoneOffset() / 60);
    return now.toLocaleTimeString();
  });

  React.useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      now.setUTCHours(now.getUTCHours() -3 - now.getTimezoneOffset() / 60);
      setTime(now.toLocaleTimeString());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  // Animated words for the <strong> tag
  const words = ["ideas", "power", "systems", "designs"];
  const [wordIndex, setWordIndex] = React.useState(0);

  React.useEffect(() => {
    const wordInterval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % words.length);
    }, 2000); // Change word every 2 seconds
    return () => clearInterval(wordInterval);
  }, []);

  return (
    <div id='heros' className='relative overflow-hidden bg-white'>
      <DotPattern className="absolute inset-0 z-0 opacity-10" />
      <section className=" flex flex-col  md:flex-row md:justify-space  items-center justify-center lg:h-screen ">
        <div className=" flex flex-col md:flex-row md:justify-space max-w-screen px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-32">
          <div className="max-w-prose text-left">
            <h1 className="text-4xl font-bold text-gray-900 sm:text-4xl">
              I design, innovate, and deliver
              <strong className="text-indigo-600 transition-all duration-500 ml-2">
                {words[wordIndex]}
              </strong>
            </h1>

            <p className="mt-4 text-base text-pretty text-gray-700 sm:text-lg/relaxed">
              Innovative Electrical Engineer specializing in sustainable systems, smart solutions, and efficient design — from blueprints to final build.
            </p>

            <div className="mt-4 flex gap-4 sm:mt-6">
              <a
                className="inline-block rounded border border-indigo-600 bg-indigo-600 px-5 py-3 font-medium text-white shadow-sm transition-colors hover:bg-indigo-700"
                href="https://wa.me/728415398"
              >
                Get in Touch
              </a>

              <a
                className="inline-block rounded border border-gray-200 px-5 py-3 font-medium text-gray-700 shadow-sm transition-colors hover:bg-gray-50 hover:text-gray-900"
                href="#about"
              >
                About Me
              </a>
            </div>
            <div className="mt-4 text-sm text-gray-500">
              My Time: <span className="font-mono">{time}</span>
            </div>
          </div>
        </div>
        <div>
            <img className="max-w-1/2 max-h-96  md:ml-96" src="/images/reu3.png" />
        </div>
      </section>
    </div>
  )
}
