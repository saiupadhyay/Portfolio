import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar } from 'lucide-react';

const experienceData = [
    {
        role: "React Developer Intern",
        company: "MACTOSYS Software Technology Pvt. LTD",
        year: "2025 - 2026", // Assuming recent or adjust if user gave dates? They didn't, so I'll leave a placeholder or just year. User didn't give dates, I'll add a placeholder or omit. 
        // User didn't give duration. I'll use a generic placeholder or omit. Wait, user requests "duration - 2021 - 2025" for uni, but for this? 
        // "company - MACTOSYS ... disc - ..."
        // I will add a placeholder for duration or just leave it. Better to include a field.
        description: "Collaborated with the development team to build dynamic and responsive web applications using React.js. Translated UI/UX designs into high-quality code, optimized components for maximum performance across a vast array of web-capable devices and browsers, and integrated RESTful APIs to ensure seamless data flow."
    }
];

const Experience = () => {
    return (
        <section id="experience" className="flex items-center justify-center relative py-32 bg-black/20">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="max-w-4xl mx-auto"
                >
                    <h2 className="text-4xl md:text-6xl font-bold mb-16 text-center">
                        My <span className="text-blue-500">Experience</span>
                    </h2>

                    <div className="space-y-8">
                        {experienceData.map((exp, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="bg-white/5 border border-white/10 p-8 rounded-2xl backdrop-blur-sm hover:bg-white/10 transition-colors"
                            >
                                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                                    <div className="flex items-start gap-4">
                                        <div className="p-3 bg-blue-500/20 rounded-lg text-blue-400 mt-1">
                                            <Briefcase size={24} />
                                        </div>
                                        <div>
                                            <h3 className="text-xl md:text-2xl font-bold text-white">{exp.role}</h3>
                                            <p className="text-lg text-blue-400 font-medium">{exp.company}</p>
                                        </div>
                                    </div>
                                    {/* <div className="flex items-center gap-2 text-gray-400 bg-white/5 px-4 py-2 rounded-full text-sm">
                                        <Calendar size={16} />
                                        <span>{exp.year}</span>
                                    </div> */ /* Commenting out year since user didn't provide it, but structure is there */}
                                </div>
                                <p className="text-gray-400 text-lg leading-relaxed ml-0 md:ml-16">
                                    {exp.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Experience;
