'use client';
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
        <div
            style={{
                fontFamily: "Segoe UI, Roboto, Arial, sans-serif",
                background: "linear-gradient(135deg, #e3eafc 0%, #c1c9d6 100%)",
                color: "#223046",
                minHeight: "100vh",
                animation: "fadeIn 1s",
            }}
        >
            {/* Hero Section */}
            <section
                style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "4rem 8vw 3rem 8vw",
                    background: "linear-gradient(90deg, #223046 60%, #3a4a63 100%)",
                    color: "#fff",
                }}
                className="flex flex-col bg-[#223046] md:flex-row items-center justify-between"
            >
                <div>
                    <h1 style={{ fontSize: "2.8rem", marginBottom: "0.5rem", fontWeight: 700 }}>
                        Reuben Chumba
                    </h1>
                    <h2 style={{ fontSize: "1.5rem", fontWeight: 400, marginBottom: "1.5rem" }}>
                        Experienced Electrical Engineer | Automation & Renewable Energy Specialist
                    </h2>
                    <div style={{ display: "flex", gap: "1rem" }}>
                        <a
                            href="#contact"
                            style={{
                                background: "#4f8cff",
                                color: "#fff",
                                padding: "0.8rem 2rem",
                                borderRadius: "30px",
                                fontWeight: 600,
                                textDecoration: "none",
                                boxShadow: "0 2px 8px #22304633",
                                transition: "background 0.2s",
                            }}
                        >
                            Hire Me
                        </a>
                        <a
                            href="#projects"
                            style={{
                                background: "transparent",
                                border: "2px solid #4f8cff",
                                color: "#4f8cff",
                                padding: "0.8rem 2rem",
                                borderRadius: "30px",
                                fontWeight: 600,
                                textDecoration: "none",
                                transition: "background 0.2s, color 0.2s",
                            }}
                        >
                            View Projects
                        </a>
                    </div>
                </div>
                <img
                    src={heroImg}
                    alt="Reuben Okafor"
                    style={{
                        width: 180,
                        height: 180,
                        borderRadius: "50%",
                        objectFit: "cover",
                        border: "5px solid #4f8cff",
                        boxShadow: "0 4px 24px #22304655",
                        marginLeft: "2rem",
                        animation: "float 2.5s infinite ease-in-out alternate",
                    }}
                />
            </section>

            {/* About Section */}
            <section
                id="about"
                style={{
                    maxWidth: 900,
                    margin: "3rem auto",
                    background: "#fff",
                    borderRadius: 18,
                    boxShadow: "0 2px 16px #22304618",
                    padding: "2.5rem 2rem",
                    animation: "fadeInUp 1s",
                }}
            >
                <h3 style={{ color: "#4f8cff", fontWeight: 700, marginBottom: 10 }}>About Me</h3>
                <p style={{ fontSize: "1.1rem", lineHeight: 1.7 }}>
                    With over 10 years of experience in electrical engineering, I specialize in automation, circuit design, and renewable energy solutions. I hold a B.Eng in Electrical Engineering from the University of Lagos, and am a certified Professional Engineer (PE) and Siemens PLC Programmer. My mission is to deliver innovative, sustainable, and reliable engineering solutions that drive progress and efficiency.
                </p>
                <ul style={{ marginTop: 16, color: "#223046cc" }}>
                    <li>B.Eng, Electrical Engineering – University of Lagos</li>
                    <li>Professional Engineer (PE) – Nigeria</li>
                    <li>Certified Siemens PLC Programmer</li>
                </ul>
            </section>

            {/* Work Experience */}
            <section
                id="experience"
                style={{
                    maxWidth: 900,
                    margin: "2rem auto",
                    background: "#f6f8fc",
                    borderRadius: 18,
                    boxShadow: "0 2px 16px #22304610",
                    padding: "2rem",
                }}
            >
                <h3 style={{ color: "#4f8cff", fontWeight: 700, marginBottom: 10 }}>Work Experience</h3>
                <div>
                    <div style={{ marginBottom: 18 }}>
                        <h4 style={{ margin: 0, fontWeight: 600 }}>Lead Electrical Engineer – GreenTech Solutions</h4>
                        <span style={{ color: "#4f8cff" }}>2018 – Present</span>
                        <ul style={{ marginTop: 8 }}>
                            <li>Led automation projects for manufacturing clients, improving efficiency by up to 40%.</li>
                            <li>Designed and deployed renewable energy systems for commercial clients.</li>
                            <li>Mentored junior engineers and managed cross-functional teams.</li>
                        </ul>
                    </div>
                    <div>
                        <h4 style={{ margin: 0, fontWeight: 600 }}>Electrical Engineer – PowerGrid Nigeria</h4>
                        <span style={{ color: "#4f8cff" }}>2013 – 2018</span>
                        <ul style={{ marginTop: 8 }}>
                            <li>Developed and maintained PLC-based control systems for utility substations.</li>
                            <li>Implemented circuit protection and automation upgrades across the grid.</li>
                        </ul>
                    </div>
                </div>
            </section>

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
                <h3 style={{ color: "#4f8cff", fontWeight: 700, marginBottom: 10 }}>Skills & Services</h3>
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
                <h3 style={{ color: "#4f8cff", fontWeight: 700, marginBottom: 10 }}>Project Gallery</h3>
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
                                <h4 style={{ margin: "0 0 0.5rem 0", color: "#223046" }}>{p.title}</h4>
                                <p style={{ fontSize: "0.98rem", color: "#223046bb" }}>{p.desc}</p>
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
                <h3 style={{ color: "#4f8cff", fontWeight: 700, marginBottom: 10 }}>Testimonials</h3>
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
                            <div style={{ fontSize: "0.95rem", color: "#4f8cff" }}>{t.role}</div>
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
                <h3 style={{ color: "#4f8cff", fontWeight: 700, marginBottom: 10 }}>Contact</h3>
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
                            <a href="mailto:reuben.okafor@email.com" style={{ color: "#4f8cff" }}>
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
            <span style={{ fontSize: "2rem", display: "block", marginBottom: 8 }}>{icon}</span>
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