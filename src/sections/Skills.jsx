import React from 'react';
import { motion } from 'framer-motion';
import InfiniteLoop from '../components/ui/InfiniteLoop';

const skills = [
    { name: "React", icon: "https://skillicons.dev/icons?i=react" },
    { name: "TypeScript", icon: "https://skillicons.dev/icons?i=ts" },
    { name: "JavaScript", icon: "https://skillicons.dev/icons?i=js" },
    { name: "Tailwind CSS", icon: "https://skillicons.dev/icons?i=tailwind" },
    { name: "Node.js", icon: "https://skillicons.dev/icons?i=nodejs" },
    { name: "Express", icon: "https://skillicons.dev/icons?i=express" },
    { name: "MongoDB", icon: "https://skillicons.dev/icons?i=mongodb" },
    { name: "Git", icon: "https://skillicons.dev/icons?i=git" },
    { name: "Next.js", icon: "https://skillicons.dev/icons?i=nextjs" },
    { name: "Python", icon: "https://skillicons.dev/icons?i=python" },
    { name: "SQL", icon: "https://skillicons.dev/icons?i=mysql" },
    { name: "AWS", icon: "https://skillicons.dev/icons?i=aws" }
];

const Skills = () => {
    return (
        <section id="skills" className="flex items-center justify-center relative py-32">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="max-w-6xl mx-auto"
                >
                    <h2 className="text-4xl md:text-6xl font-bold mb-8 text-center">
                        My <span className="text-purple-500">Skills</span>
                    </h2>

                    <div className="mb-16">
                        <InfiniteLoop items={skills} />
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {skills.map((skill, index) => (
                            <motion.div
                                key={skill.name}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.05)" }}
                                className="bg-white/5 border border-white/10 rounded-xl p-6 text-center backdrop-blur-sm transition-colors cursor-pointer flex flex-col items-center gap-4"
                            >
                                <img src={skill.icon} alt={skill.name} className="h-12 w-12 object-contain" />
                                <h3 className="text-xl font-medium text-gray-200">{skill.name}</h3>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Skills;
