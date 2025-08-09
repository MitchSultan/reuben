import React from 'react'

export default function AboutSection() {
return (
    <div id='about'>
             <section className="overflow-hidden mt-16 bg-gray-50 flex flex-col md:flex-row-reverse  sm:items-center">
<div className="p-8 md:p-12 lg:px-16 lg:py-24">
    <div className="mx-auto max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
        <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">
            I’m Reuben, a licensed Electrical Engineer.
        </h2>

        <p className="hidden text-gray-500 md:mt-4 md:block">
     Visionary Electrical Engineer and Project Leader with expertise in electrical 
design and implementation, stakeholder engagement, strategic project 
implementation and innovation in sustainable energy solutions. Passionate about 
leveraging cutting-edge technologies, data-driven decision-making and 
stakeholder engagement to drive energy access and innovation  </p>

        <div className="mt-4 flex flex-col md:flex-row gap-2 md:mt-8">
            <a
                href="https://wa.me/728415398"
                className="inline-block rounded-sm bg-emerald-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-emerald-700 focus:ring-3 focus:ring-yellow-400 focus:outline-hidden"
            >
                Connect Today
            </a>
            <a
                href="/chumba.pdf"
                download
                className="inline-block rounded-sm bg-white px-12 py-3 text-sm font-medium text-blue transition  focus:ring-3 focus:ring-yellow-400 focus:outline-hidden"
            >
                Download CV
            </a>
        </div>
    </div>
</div>

<img
    alt=""
    src="/images/reu2.jpg"
    className="h-auto  max-w-1/2 object-contain sm:h-[calc(100%_-_2rem)] sm:self-end sm:rounded-ss-[30px] md:h-[calc(100%_-_4rem)] md:rounded-ss-[60px]"
/>
</section></div>
)
}
