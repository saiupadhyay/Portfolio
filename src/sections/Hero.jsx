import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import Particles from '../components/ui/Particles';

const Hero = () => {
    return (
        <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
            <Particles />
            <div className="container mx-auto px-4 z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-xl md:text-2xl text-blue-400 font-medium mb-4">
                        Hello, I'm Sai
                    </h2>
                    <h1 className="text-5xl md:text-8xl font-bold mb-6 tracking-tight">
                        Building Digital <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">Experiences</span>
                    </h1>
                    <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
                        I craft accessible, pixel-perfect, and performant web experiences.
                        Bringing ideas to life with modern technologies.
                    </p>

                    <div className="flex justify-center gap-4">
                        <motion.a
                            href="/Sai_Upadhyay.pdf"
                            download
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-medium transition-colors"
                        >
                            Download Resume
                        </motion.a>
                        <motion.a
                            href="#contact"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="border border-gray-700 hover:border-gray-500 text-white px-8 py-3 rounded-full font-medium transition-colors"
                        >
                            Contact Me
                        </motion.a>
                    </div>
                </motion.div>
            </div>

            <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 text-gray-500"
            >
                <ArrowDown size={32} />
            </motion.div>
        </section>
    );
};

export default Hero;
