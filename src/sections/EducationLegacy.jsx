import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, Award } from 'lucide-react';

const educationData = [
    {
        degree: "Bachelor of Technology in Computer Science",
        institution: "MEDICAPS UNIVERSITY",
        year: "2021 - 2025",
        description: "Specializing in Software Engineering, Data Structures, and Algorithms. Leading the tech team for the annual university hackathon.",
        icon: GraduationCap,
        color: "blue"
    },
    {
        degree: "High School Diploma",
        institution: "KENDRIYA VIDYALYA",
        year: "2018 - 2021",
        description: "Focused on Science and Mathematics, building a strong foundation for analytical thinking and problem-solving.",
        icon: Award,
        color: "purple"
    }
];

const Education = () => {
    return (
        <section id="education" className="min-h-screen flex items-center justify-center relative py-32 bg-black/20 overflow-hidden">
            {/* Background Decorations */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 left-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-1/4 right-0 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="max-w-5xl mx-auto"
                >
                    <h2 className="text-4xl md:text-6xl font-bold mb-20 text-center">
                        My <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Education</span> Journey
                    </h2>

                    <div className="relative">
                        {/* Vertical Line */}
                        <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500/50 via-purple-500/50 to-transparent rounded-full" />

                        <div className="space-y-16">
                            {educationData.map((edu, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.6, delay: index * 0.2 }}
                                    viewport={{ once: true }}
                                    className={`relative flex flex-col md:flex-row items-center gap-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                                        }`}
                                >
                                    {/* Timeline Node (Center) */}
                                    <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full border-4 border-black bg-gradient-to-br from-blue-500 to-purple-600 z-10 shadow-[0_0_15px_rgba(59,130,246,0.5)]" />

                                    {/* Date (Opposite side on Desktop) */}
                                    <div className={`w-full md:w-1/2 pl-12 md:pl-0 ${index % 2 === 0 ? 'md:pr-16 md:text-right' : 'md:pl-16'
                                        }`}>
                                        <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm text-gray-300 text-sm mb-2 md:mb-0 transform hover:scale-105 transition-transform ${index % 2 !== 0 ? 'md:ml-auto' : 'md:mr-auto' // Align date properly
                                            }`}>
                                            <Calendar size={14} />
                                            <span>{edu.year}</span>
                                        </div>
                                    </div>

                                    {/* Content Card */}
                                    <div className={`w-full md:w-1/2 pl-12 md:pl-0 ${index % 2 === 0 ? 'md:pl-16' : 'md:pr-16'
                                        }`}>
                                        <div className="bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-2xl hover:bg-white/10 hover:border-blue-500/30 transition-all duration-300 group shadow-lg">
                                            <div className="flex items-start gap-4 mb-4">
                                                <div className={`p-3 rounded-xl bg-${edu.color}-500/20 text-${edu.color}-400 group-hover:scale-110 transition-transform duration-300`}>
                                                    <edu.icon size={24} />
                                                </div>
                                                <div>
                                                    <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-blue-300 transition-colors">
                                                        {edu.degree}
                                                    </h3>
                                                    <p className="text-blue-400 font-medium">{edu.institution}</p>
                                                </div>
                                            </div>
                                            <p className="text-gray-400 leading-relaxed">
                                                {edu.description}
                                            </p>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Education;
