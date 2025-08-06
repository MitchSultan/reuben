"use client";
import React from "react";

const heroImg =
  "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=facearea&w=400&h=400&facepad=2&q=80"; // Replace with your professional photo

const projects = [
  {
    title: "Smart Grid Automation",
    img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
    desc: "Designed and implemented a scalable smart grid automation system for a regional utility provider.",
  },
  {
    title: "Solar Microgrid Integration",
    img: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80",
    desc: "Integrated renewable solar microgrids, increasing energy efficiency by 30%.",
  },
  {
    title: "Industrial PLC Upgrade",
    img: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80",
    desc: "Upgraded PLC systems for a major manufacturer, reducing downtime by 25%.",
  },
];

const testimonials = [
  {
    name: "Jane Smith",
    role: "Project Manager, GreenTech",
    text: "Professional, reliable, and highly skilled. Delivered our automation project ahead of schedule.",
  },
  {
    name: "Dr. Alan Lee",
    role: "Colleague",
    text: "A true expert in electrical engineering—always ready to tackle complex challenges.",
  },
];

export default function ElectricalEngineerPortfolio() {
  return (
    <div className="container mx-auto bg-white ">
      {/* Hero Section */}
      <section className="bg-white lg:grid lg:h-screen lg:place-content-center">
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
      </section>

      {/* About Section */}
     <section className="overflow-hidden bg-gray-50 sm:grid sm:grid-cols-2 sm:items-center">
  <div className="p-8 md:p-12 lg:px-16 lg:py-24">
    <div className="mx-auto max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
      <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit
      </h2>

      <p className="hidden text-gray-500 md:mt-4 md:block">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, egestas tempus tellus etiam
        sed. Quam a scelerisque amet ullamcorper eu enim et fermentum, augue. Aliquet amet volutpat
        quisque ut interdum tincidunt duis.
      </p>

      <div className="mt-4 md:mt-8">
        <a
          href="#"
          className="inline-block rounded-sm bg-emerald-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-emerald-700 focus:ring-3 focus:ring-yellow-400 focus:outline-hidden"
        >
          Get Started Today
        </a>
      </div>
    </div>
  </div>

  <img
    alt=""
    src="https://images.unsplash.com/photo-1484959014842-cd1d967a39cf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
    className="h-full w-full object-cover sm:h-[calc(100%_-_2rem)] sm:self-end sm:rounded-ss-[30px] md:h-[calc(100%_-_4rem)] md:rounded-ss-[60px]"
  />
</section>

      {/* Work Experience */}
      <ol
  className="relative space-y-8 before:absolute before:top-0 before:left-1/2 before:h-full before:w-0.5 before:-translate-x-1/2 before:rounded-full before:bg-gray-200"
>
  <li className="group relative grid grid-cols-2 odd:-me-3 even:-ms-3">
    <div
      className="relative flex items-start gap-4 group-odd:flex-row-reverse group-odd:text-right group-even:order-last"
    >
      <span className="size-3 shrink-0 rounded-full bg-blue-600"></span>

      <div className="-mt-2">
        <time className="text-xs/none font-medium text-gray-700">12/02/2025</time>

        <h3 className="text-lg font-bold text-gray-900">Kickoff</h3>

        <p className="mt-0.5 text-sm text-gray-700">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga officiis tempora ipsum
          adipisci tenetur sunt quae exercitationem sed pariatur porro!
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
        <time className="text-xs/none font-medium text-gray-700">5/03/2025</time>

        <h3 className="text-lg font-bold text-gray-900">First Milestone</h3>

        <p className="mt-0.5 text-sm text-gray-700">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga officiis tempora ipsum
          adipisci tenetur sunt quae exercitationem sed pariatur porro!
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

        <h3 className="text-lg font-bold text-gray-900">Launch</h3>

        <p className="mt-0.5 text-sm text-gray-700">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga officiis tempora ipsum
          adipisci tenetur sunt quae exercitationem sed pariatur porro!
        </p>
      </div>
    </div>

    <div aria-hidden="true"></div>
  </li>
</ol>

      {/* Skills & Services */}
      <section
        id="skills"
        style={{
          maxWidth: 900,
          margin: "2rem auto",
          background: "#fff",
          borderRadius: 18,
          boxShadow: "0 2px 16px #22304618",
          padding: "2rem",
        }}
      >
        <h3 style={{ color: "#4f8cff", fontWeight: 700, marginBottom: 10 }}>
          Skills & Services
        </h3>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
            gap: "1.5rem",
            marginTop: 18,
          }}
        >
          <SkillCard icon="🔌" label="Circuit Design" />
          <SkillCard icon="🤖" label="PLC Programming" />
          <SkillCard icon="⚡" label="Industrial Automation" />
          <SkillCard icon="🌞" label="Renewable Energy Systems" />
          <SkillCard icon="🛠️" label="System Integration" />
          <SkillCard icon="📊" label="Energy Audits" />
        </div>
      </section>

      {/* Project Gallery */}
      <section
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
      </section>

      {/* Testimonials */}
      <section
        id="testimonials"
        style={{
          maxWidth: 900,
          margin: "2rem auto",
          background: "#fff",
          borderRadius: 18,
          boxShadow: "0 2px 16px #22304618",
          padding: "2rem",
        }}
      >
        <h3 style={{ color: "#4f8cff", fontWeight: 700, marginBottom: 10 }}>
          Testimonials
        </h3>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "1.5rem",
            marginTop: 18,
          }}
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
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        style={{
          maxWidth: 900,
          margin: "2rem auto 3rem auto",
          background: "#f6f8fc",
          borderRadius: 18,
          boxShadow: "0 2px 16px #22304610",
          padding: "2rem",
        }}
      >
        <h3 style={{ color: "#4f8cff", fontWeight: 700, marginBottom: 10 }}>
          Contact
        </h3>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "2rem",
            alignItems: "flex-start",
          }}
        >
          <form
            style={{
              flex: "1 1 320px",
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
            }}
            onSubmit={(e) => {
              e.preventDefault();
              alert("Thank you for reaching out!");
            }}
          >
            <input
              type="text"
              placeholder="Your Name"
              required
              style={inputStyle}
            />
            <input
              type="email"
              placeholder="Your Email"
              required
              style={inputStyle}
            />
            <textarea
              placeholder="Your Message"
              required
              rows={4}
              style={{ ...inputStyle, resize: "vertical" }}
            />
            <button
              type="submit"
              style={{
                background: "#4f8cff",
                color: "#fff",
                border: "none",
                borderRadius: 24,
                padding: "0.7rem 2rem",
                fontWeight: 600,
                fontSize: "1rem",
                cursor: "pointer",
                boxShadow: "0 2px 8px #22304633",
                transition: "background 0.2s",
              }}
            >
              Send Message
            </button>
          </form>
          <div style={{ flex: "1 1 220px", fontSize: "1.07rem" }}>
            <div style={{ marginBottom: 10 }}>
              <strong>Email:</strong>{" "}
              <a
                href="mailto:reuben.okafor@email.com"
                style={{ color: "#4f8cff" }}
              >
                reuben.okafor@email.com
              </a>
            </div>
            <div style={{ marginBottom: 10 }}>
              <strong>LinkedIn:</strong>{" "}
              <a
                href="https://linkedin.com/in/reubenokafor"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#4f8cff" }}
              >
                linkedin.com/in/reubenokafor
              </a>
            </div>
            <div>
              <strong>Phone:</strong>{" "}
              <a href="tel:+2348012345678" style={{ color: "#4f8cff" }}>
                +234 801 234 5678
              </a>
            </div>
          </div>
        </div>
      </section>

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
