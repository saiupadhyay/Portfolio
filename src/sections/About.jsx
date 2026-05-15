import { motion } from 'framer-motion';
import WavingGhost from '../components/ui/WavingGhost';
import { Code, Globe, Coffee, Gamepad2 } from 'lucide-react';

const About = () => {
    return (
        <section id="about" className="flex items-center justify-center relative py-32 z-10">
            <div className="container mx-auto px-4">
                <h2 className="text-5xl md:text-7xl font-bold mb-16 text-center">
                    About <span className="text-blue-500">Me</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">

                    {/* 1. The Character (Tall Card) */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="md:col-span-1 md:row-span-2 bg-black/40 backdrop-blur-md border border-white/10 rounded-3xl p-8 flex items-center justify-center relative overflow-hidden group hover:border-blue-500/30 transition-colors"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <WavingGhost />
                    </motion.div>

                    {/* 2. Main Bio (Wide Card) */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="md:col-span-2 bg-black/40 backdrop-blur-md border border-white/10 rounded-3xl p-8 md:p-10 flex flex-col justify-center hover:border-white/20 transition-colors"
                    >
                        <h3 className="text-2xl font-semibold text-white mb-4 flex items-center gap-3">
                            <Code className="text-blue-500" />
                            passionate. dev.
                        </h3>
                        <p className="text-gray-300 text-lg leading-relaxed">
                            I am a software engineer with a keen eye for design. My journey started with curiosity about how the internet works, evolving into a career building seamless, user-centric interfaces.
                            <br /><br />
                            I specialize in <span className="text-blue-400">React</span>, <span className="text-blue-400">TypeScript</span>, and <span className="text-blue-400">Tailwind CSS</span>. Clean code and elegant solutions are my mantra.
                        </p>
                    </motion.div>

                    {/* 3. Location / Status */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="md:col-span-1 bg-black/40 backdrop-blur-md border border-white/10 rounded-3xl p-6 flex flex-col items-center justify-center text-center hover:border-green-500/30 transition-colors group"
                    >
                        <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                            <Globe className="text-green-400" />
                        </div>
                        <h4 className="text-xl font-medium text-white">Based in India</h4>
                        <p className="text-gray-400 text-sm">Open to remote opportunities</p>
                    </motion.div>

                    {/* 4. Hobbies / Interests */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="md:col-span-1 bg-black/40 backdrop-blur-md border border-white/10 rounded-3xl p-6 flex flex-col items-center justify-center text-center hover:border-purple-500/30 transition-colors group"
                    >
                        <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                            <Gamepad2 className="text-purple-400" />
                        </div>
                        <h4 className="text-xl font-medium text-white">Gamer & Explorer</h4>
                        <p className="text-gray-400 text-sm">Exploring design trends & open source</p>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default About;
