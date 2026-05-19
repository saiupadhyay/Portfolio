import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: "AI Personal CFO",
    description:
      "An AI-powered financial analytics dashboard that helps users track expenses, analyze spending patterns, and gain smart financial insights.",
    tags: ["Python", "Streamlit", "Financial Analytics", "Data Visualization"],
    github: "https://github.com/saiupadhyay/Ai-Personal-CFO.git",
    demo: "#",
  },
  {
    title: "BOOKSआलय – AI-Powered Book Discovery Platform",
    description:
      "A personalized book recommendation platform featuring mood-based discovery, goal-based search, and AI-driven summaries using NLP concepts.",
    tags: ["React.js", "JavaScript", "NLP", "APIs", "CSS"],
    github: "https://github.com/saiupadhyay/BooksAalay.git",
    demo: "#",
  },
  {
    title: "Snake Game",
    description:
      "A classic snake game built using JavaScript, demonstrating game logic, state handling, and interactive UI behavior.",
    tags: ["JavaScript", "HTML", "CSS"],
    github: "https://github.com/saiupadhyay/Snake-Game.git",
    demo: "#",
  },
];

const Projects = () => {
    return (
        <section id="projects" className="flex items-center justify-center relative py-32 bg-black/20">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="max-w-6xl mx-auto"
                >
                    <h2 className="text-4xl md:text-6xl font-bold mb-16 text-center">
                        Featured <span className="text-blue-500">Projects</span>
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {projects.map((project, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                whileHover={{ y: -10 }}
                                className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-colors group"
                            >
                                <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                                    {project.title}
                                </h3>
                                <p className="text-gray-400 mb-6 leading-relaxed">
                                    {project.description}
                                </p>
                                <div className="flex flex-wrap gap-2 mb-8">
                                    {project.tags.map(tag => (
                                        <span key={tag} className="bg-blue-500/10 text-blue-300 px-3 py-1 rounded-full text-sm font-medium">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <div className="flex gap-4">
                                    <a href={project.github} className="text-gray-400 hover:text-white transition-colors flex items-center gap-2">
                                        <Github size={20} /> Code
                                    </a>
                                    {/* <a href={project.demo} className="text-gray-400 hover:text-white transition-colors flex items-center gap-2">
                                        <ExternalLink size={20} /> Live Demo
                                    </a> */}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Projects;
