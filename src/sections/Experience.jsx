import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, Code2 } from 'lucide-react';

const experienceData = [
    {
        role: "React Developer Intern",
        company: "MACTOSYS Software Technology Pvt. LTD",
        year: "2025 - 2026",
        description: "Collaborated with the development team to build dynamic and responsive web applications using React.js. Translated UI/UX designs into high-quality code, optimized components for maximum performance across a vast array of web-capable devices and browsers, and integrated RESTful APIs to ensure seamless data flow.",
        tech: ["React.js", "Redux", "Tailwind CSS", "REST APIs", "Git"]
    }
];

const Experience = () => {
    return (
        <section id="experience" className="flex items-center justify-center relative py-32 overflow-hidden">
            {/* Background Decorations Removed for seamless blend */}

            <div className="container mx-auto px-4 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="max-w-5xl mx-auto"
                >
                    <h2 className="text-4xl md:text-6xl font-bold mb-16 text-center">
                        My <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Experience</span>
                    </h2>

                    <div className="space-y-12">
                        {experienceData.map((exp, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.2 }}
                                viewport={{ once: true }}
                                className="group relative"
                            >
                                {/* Glowing Border Gradient */}
                                <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-[2rem] opacity-30 group-hover:opacity-100 transition duration-1000 blur group-hover:blur-md" />

                                <div className="relative bg-black/40 backdrop-blur-xl border border-white/10 p-8 md:p-10 rounded-[2rem] overflow-hidden">
                                    {/* Grid Pattern Overlay */}
                                    <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]" />

                                    <div className="relative z-10 flex flex-col md:flex-row gap-8">
                                        {/* Left: Icon & Date */}
                                        <div className="flex flex-col items-center md:items-start gap-4 md:w-1/4">
                                            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center border border-white/10 shadow-[0_0_15px_rgba(6,182,212,0.15)] group-hover:scale-110 transition-transform duration-500">
                                                <Briefcase size={32} className="text-cyan-400" />
                                            </div>
                                            <div className="flex items-center gap-2 text-gray-400 bg-white/5 px-4 py-2 rounded-full text-sm font-medium border border-white/5">
                                                <Calendar size={14} />
                                                <span>{exp.year}</span>
                                            </div>
                                        </div>

                                        {/* Right: Content */}
                                        <div className="md:w-3/4">
                                            <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                                                {exp.role}
                                            </h3>
                                            <p className="text-xl text-cyan-500 font-medium mb-6">{exp.company}</p>

                                            <p className="text-gray-300 text-lg leading-relaxed mb-8">
                                                {exp.description}
                                            </p>

                                            {/* Tech Stack Tags */}
                                            <div className="flex flex-wrap gap-3">
                                                {exp.tech.map((tech, i) => (
                                                    <span
                                                        key={i}
                                                        className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-cyan-300 text-sm font-medium hover:bg-cyan-500/10 hover:border-cyan-500/30 transition-colors flex items-center gap-2"
                                                    >
                                                        <Code2 size={14} />
                                                        {tech}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Experience;
