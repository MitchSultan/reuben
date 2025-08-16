"use client";
import React from "react";
import AboutSection from "./AboutSection";
import { MarqueeDemo } from "./Competecies";
import Education from "./Education";


;

export default function ElectricalEngineerPortfolio() {
  return (
    <div className="container mx-auto bg-white ">
      <MarqueeDemo />
      
     

      {/* About Section */}
    

<AboutSection/>

      {/* Work Experience */}
      <section className="mt-24 flex flex-col items-center justify-center" id="projects">
        <h1 className="items-center text-4xl">My Work Experience</h1>
      <ol
  className="relative space-y-8 mt-12 before:absolute before:top-0 before:left-1/2 before:h-full before:w-0.5 before:-translate-x-1/2 before:rounded-full before:bg-gray-200"
>
  <li className="group relative grid grid-cols-2 odd:-me-3 even:-ms-3">
    <div
      className="relative flex items-start gap-4 group-odd:flex-row-reverse group-odd:text-right group-even:order-last"
    >
      <span className="size-3 shrink-0 rounded-full bg-blue-600"></span>

      <div className="-mt-2">
        <time className="text-xs/none font-medium text-gray-700">12/03/2022</time>

        <h3 className="text-lg font-bold text-gray-900">Design Technician | March 2022 – Present </h3>

        <p className="mt-0.5 max-w-96 text-sm text-gray-700">
        Spearhead grid extension project designs, ensuring compliance with 
REREC standards and sustainability goals expanding grid access to 
underserved communities.<br></br> Conduct energy research, site assessments and feasibility studies to 
identify sustainable solutions for rural electrification and optimizing energy 
distribution.  </p>
      </div>
    </div>

    <div aria-hidden="true"></div>
  </li>

  <li className="group relative grid grid-cols-2 odd:-me-3 even:-ms-3">
    <div
      className="relative flex items-start gap-4 group-odd:flex-row-reverse group-odd:text-right group-even:order-last"
    >
      <span className="size-3 shrink-0 rounded-full bg-blue-600"></span>

      <div className="-mt-2">
        <time className="text-xs/none font-medium text-gray-700">5/03/2025</time>

        <h3 className="text-lg font-bold text-gray-900">Additional Responsibilities (From 2024 - Present): </h3>

        <p className="mt-0.5 max-w-96 text-sm text-gray-700">
           Supervising construction teams to ensure compliance with industry standards 
and timely project completion. <br></br>
Monitoring construction contracts, ensuring compliance with standards 
and timelines.
        </p>
      </div>
    </div>

    <div aria-hidden="true"></div>
  </li>

  <li className="group relative grid grid-cols-2 odd:-me-3 even:-ms-3">
    <div
      className="relative flex items-start gap-4 group-odd:flex-row-reverse group-odd:text-right group-even:order-last"
    >
      <span className="size-3 shrink-0 rounded-full bg-blue-600"></span>

      <div className="-mt-2">
        <time className="text-xs/none font-medium text-gray-700">24/04/2025</time>

        <h3 className="text-lg font-bold text-gray-900">Field Engineer | Jan 2021 – Oct 2021 </h3>

        <p className="mt-0.5 max-w-96 text-sm text-gray-700">
       Engineered telecom energy solutions, integrating IoT and AI for optimized power 
distribution. <br></br>
Installed & configured renewable energy monitoring systems, enhancing grid efficiency. </p>
      </div>
    </div>

    <div aria-hidden="true"></div>
  </li>
</ol>
</section>
      {/* Education */}
      <Education />

      {/* Competencies */}
     

      {/* Project Gallery */}
    {/* <section
        id="projects"
        style={{
          maxWidth: 1100,
          margin: "2rem auto",
          background: "#f6f8fc",
          borderRadius: 18,
          boxShadow: "0 2px 16px #22304610",
          padding: "2rem",
        }}
      >
        <h3 style={{ color: "#4f8cff", fontWeight: 700, marginBottom: 10 }}>
          Project Gallery
        </h3>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "1.5rem",
            marginTop: 18,
          }}
        >
          {projects.map((p) => (
            <div
              key={p.title}
              style={{
                background: "#fff",
                borderRadius: 14,
                boxShadow: "0 2px 8px #22304612",
                overflow: "hidden",
                transition: "transform 0.2s",
                cursor: "pointer",
              }}
            >
              <img
                src={p.img}
                alt={p.title}
                style={{ width: "100%", height: 140, objectFit: "cover" }}
              />
              <div style={{ padding: "1rem" }}>
                <h4 style={{ margin: "0 0 0.5rem 0", color: "#223046" }}>
                  {p.title}
                </h4>
                <p style={{ fontSize: "0.98rem", color: "#223046bb" }}>
                  {p.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>*/}

      {/* Testimonials */}
     {/* <section
       
      >
        <h3 >
          Testimonials
        </h3>
        <div
         
        >
          {testimonials.map((t) => (
            <div
              key={t.name}
              style={{
                background: "#f6f8fc",
                borderRadius: 12,
                padding: "1.2rem 1rem",
                flex: "1 1 260px",
                boxShadow: "0 2px 8px #22304610",
              }}
            >
              <p style={{ fontStyle: "italic", marginBottom: 8 }}>"{t.text}"</p>
              <div style={{ fontWeight: 600, color: "#223046" }}>{t.name}</div>
              <div style={{ fontSize: "0.95rem", color: "#4f8cff" }}>
                {t.role}
              </div>
            </div>
          ))}
        </div>
      </section>*/ }
     

      {/* Contact Section */}
     
   

      {/* Subtle motion keyframes */}
      <style>{`
                @keyframes float {
                    0% { transform: translateY(0px);}
                    100% { transform: translateY(-16px);}
                }
                @keyframes fadeIn {
                    from { opacity: 0;}
                    to { opacity: 1;}
                }
                @keyframes fadeInUp {
                    from { opacity: 0; transform: translateY(40px);}
                    to { opacity: 1; transform: translateY(0);}
                }
                ::selection {
                    background: #4f8cff22;
                }
                input:focus, textarea:focus {
                    outline: 2px solid #4f8cff;
                }
            `}</style>
    </div>
  );
}

function SkillCard({ icon, label }) {
  return (
    <div
      style={{
        background: "#f6f8fc",
        borderRadius: 12,
        padding: "1.2rem",
        textAlign: "center",
        boxShadow: "0 2px 8px #22304610",
        fontWeight: 600,
        fontSize: "1.1rem",
        letterSpacing: 0.2,
        transition: "transform 0.2s",
      }}
    >
      <span style={{ fontSize: "2rem", display: "block", marginBottom: 8 }}>
        {icon}
      </span>
      {label}
    </div>
  );
}

const inputStyle = {
  border: "1.5px solid #c1c9d6",
  borderRadius: 8,
  padding: "0.7rem 1rem",
  fontSize: "1rem",
  fontFamily: "inherit",
  background: "#fff",
  color: "#223046",
  transition: "border 0.2s",
};
