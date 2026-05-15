import React from 'react';
import { motion } from 'framer-motion';
import { Award, ExternalLink } from 'lucide-react';

const certificationsData = [
    {
        name: "Data Science Fundamentals",
        issuer: "CodeWithHarry",
        date: "2025",
        link: "https://drive.google.com/file/d/1d7pQFG16JtECQkacb2Yq0hZgsQV5Vzre/view?usp=sharing",
        color: "blue"
    },
    {
        name: "Python Essentials",
        issuer: "CISCO",
        date: "2023",
        link: "https://drive.google.com/file/d/11e8gZSWHI1qQiLS7DcVEb_Mw2Q4S4VMY/view?usp=sharing",
        color: "yellow"
    },
    {
        name: "AWS Cloud Foundations",
        issuer: "AWS",
        date: "2024",
        link: "https://drive.google.com/file/d/1onwGyDSmQpU9a_GNcN2IKHupJkKI5cts/view?usp=sharing",
        color: "orange"
    },
];

const Certifications = () => {
    return (
        <section id="certifications" className="flex items-center justify-center relative py-32 overflow-hidden">
            {/* Background Decorations */}
            <div className="absolute inset-0 w-full h-full pointer-events-none">
                <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-[100px] animate-pulse" />
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[100px] animate-pulse delay-700" />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="max-w-6xl mx-auto"
                >
                    <h2 className="text-4xl md:text-6xl font-bold mb-16 text-center">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Certifications</span>
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {certificationsData.map((cert, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                whileHover={{ y: -10 }}
                                className="group relative"
                            >
                                {/* Glowing Hover Effect */}
                                <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-500 blur" />

                                <a
                                    href={cert.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="relative flex flex-col h-full bg-black/40 backdrop-blur-xl border border-white/10 p-8 rounded-2xl overflow-hidden hover:border-transparent transition-all"
                                >
                                    <div className="flex items-start justify-between mb-6">
                                        <div className={`p-3 rounded-xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 text-purple-400 group-hover:scale-110 transition-transform duration-300 border border-white/5`}>
                                            <Award size={28} />
                                        </div>
                                        <div className="p-2 rounded-full bg-white/5 text-gray-400 group-hover:text-white group-hover:bg-purple-500/20 transition-colors">
                                            <ExternalLink size={20} />
                                        </div>
                                    </div>

                                    <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">
                                        {cert.name}
                                    </h3>
                                    <p className="text-purple-400 font-medium mb-4">{cert.issuer}</p>

                                    <div className="mt-auto pt-4 border-t border-white/5 w-full flex justify-between items-center text-sm text-gray-500">
                                        <span>Issued</span>
                                        <span className="bg-white/5 px-3 py-1 rounded-full text-gray-300">{cert.date}</span>
                                    </div>
                                </a>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Certifications;
