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
        <section id="education" className="min-h-screen flex items-center justify-center relative py-32 overflow-hidden">
            {/* Background Decorations Removed for seamless blend */}

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
                                    <div className={`w-full md:w-1/2 pl-12 md:pl-0 hidden md:block ${index % 2 === 0 ? 'md:pr-16 md:text-right' : 'md:pl-16'
                                        }`}>
                                        <div className={`inline-block text-gray-400 font-medium text-lg tracking-wide ${index % 2 !== 0 ? 'md:ml-auto' : 'md:mr-auto'
                                            }`}>
                                            {edu.year}
                                        </div>
                                    </div>

                                    {/* Content Card */}
                                    <div className={`w-full md:w-1/2 pl-12 md:pl-0 ${index % 2 === 0 ? 'md:pl-16' : 'md:pr-16'
                                        }`}>
                                        <div className="bg-white/5 backdrop-blur-xl border border-white/5 p-8 rounded-[2rem] hover:bg-white/10 hover:border-blue-500/20 transition-all duration-300 group shadow-lg hover:shadow-blue-500/10">
                                            <div className="flex items-start gap-5 mb-4">
                                                <div className={`p-4 rounded-2xl bg-${edu.color}-500/10 text-${edu.color}-400 group-hover:scale-110 group-hover:bg-${edu.color}-500/20 transition-all duration-300 shadow-[0_0_15px_rgba(0,0,0,0.2)]`}>
                                                    <edu.icon size={28} />
                                                </div>
                                                <div>
                                                    <h3 className="text-2xl font-bold text-white group-hover:text-blue-300 transition-colors">
                                                        {edu.degree}
                                                    </h3>
                                                    <p className="text-blue-400 font-medium text-lg mt-1">{edu.institution}</p>
                                                </div>
                                            </div>
                                            <p className="text-gray-400 leading-relaxed text-lg">
                                                {edu.description}
                                            </p>

                                            {/* Mobile Date (Visible only on mobile/narrow screens) */}
                                            <div className="mt-4 flex md:hidden items-center gap-2 text-gray-500 text-sm font-medium">
                                                <Calendar size={14} />
                                                <span>{edu.year}</span>
                                            </div>
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
