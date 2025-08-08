import React from 'react'

export default function HeroSection() {
  return (
    <div>
         <section className="bg-white flex flex-col  md:flex-row md:justify-space  items-center justify-center lg:h-screen ">
        <div className="mx-auto w-screen max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-32">
          <div className="max-w-prose text-left">
            <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
              Powering 
              <strong className="text-indigo-600"> ideas </strong>
              into reality
            </h1>

            <p className="mt-4 text-base text-pretty text-gray-700 sm:text-lg/relaxed">
              Innovative Electrical Engineer specializing in sustainable systems, smart solutions, and efficient design — from blueprints to final build.
            </p>

            <div className="mt-4 flex gap-4 sm:mt-6">
              <a
                className="inline-block rounded border border-indigo-600 bg-indigo-600 px-5 py-3 font-medium text-white shadow-sm transition-colors hover:bg-indigo-700"
                href="#"
              >
                Get Started
              </a>

              <a
                className="inline-block rounded border border-gray-200 px-5 py-3 font-medium text-gray-700 shadow-sm transition-colors hover:bg-gray-50 hover:text-gray-900"
                href="#"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
        <div>
            <img className="w-1/2 ml-24"                   src="/images/reu.jpg">
            </img>
        </div>
      </section>
    </div>
  )
}
