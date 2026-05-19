import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Code2, Terminal } from 'lucide-react';

const projects = [
  {
    title: "AI Personal CFO",
    category: "AI & Financial Analytics",
    description:
      "An AI-powered financial analytics dashboard that helps users track expenses, analyze spending patterns, and gain smart financial insights through interactive visualizations.",
    tags: ["Python", "Streamlit", "Financial Analytics", "Data Visualization"],
    github: "https://github.com/saiupadhyay/Ai-Personal-CFO.git",
    demo: "#",
    color: "green",
    icon: Terminal,
    image: "/projects/CFO.png",
  },
  {
    title: "BOOKSआलय",
    category: "AI & NLP",
    description:
      "A personalized book recommendation platform featuring mood-based discovery and AI-driven summaries. It utilizes Natural Language Processing to understand user preferences and deliver tailored reading suggestions.",
    tags: ["React.js", "Python", "NLP", "Flask"],
    github: "https://github.com/saiupadhyay/BooksAalay.git",
    demo: "#",
    color: "blue",
    icon: Terminal,
    image: "/projects/booksaalay.png",
  },
  {
    title: "Snake Game",
    category: "Retro Gaming",
    description:
      "A modern implementation of the classic Snake game. Features smooth canvas rendering, score tracking, and progressively increasing difficulty logic built with pure JavaScript.",
    tags: ["JavaScript", "HTML5 Canvas", "CSS3"],
    github: "https://github.com/saiupadhyay/Snake-Game.git",
    demo: "#",
    color: "purple",
    icon: Terminal,
    image: "/projects/snake-game.png",
  },
];
const Projects = () => {
    return (
        <section id="projects" className="flex items-center justify-center relative py-32 overflow-hidden">
            <div className="container mx-auto px-4 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="max-w-6xl mx-auto"
                >
                    <h2 className="text-4xl md:text-6xl font-bold mb-24 text-center">
                        Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Projects</span>
                    </h2>

                    <div className="space-y-32">
                        {projects.map((project, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12 lg:gap-20`}
                            >
                                {/* Visual Side (Mock Browser Window) */}
                                <div className="w-full lg:w-1/2 group">
                                    <div className="relative rounded-2xl bg-[#1e1e1e] border border-white/10 overflow-hidden shadow-2xl transform transition-transform duration-500 group-hover:-translate-y-2 group-hover:shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
                                        {/* Browser Header */}
                                        <div className="h-8 bg-white/5 border-b border-white/5 flex items-center px-4 gap-2">
                                            <div className="w-3 h-3 rounded-full bg-red-500/80" />
                                            <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                                            <div className="w-3 h-3 rounded-full bg-green-500/80" />
                                        </div>

                                        {/* Window Content */}
                                        <div className="relative overflow-hidden bg-black/50 aspect-video group-hover:opacity-90 transition-opacity">
                                            {project.image ? (
                                                <img
                                                    src={project.image}
                                                    alt={project.title}
                                                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                                                />
                                            ) : (
                                                <div className={`w-full h-full bg-gradient-to-br from-${project.color}-500/10 to-purple-500/10 p-8 flex items-center justify-center relative`}>
                                                    <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:32px_32px]" />
                                                    <div className={`p-6 rounded-2xl bg-${project.color}-500/20 backdrop-blur-sm border border-${project.color}-500/30 group-hover:scale-110 transition-transform duration-500`}>
                                                        <project.icon size={64} className={`text-${project.color}-400`} />
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>

                                {/* Content Side */}
                                <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left">
                                    <span className={`text-${project.color}-400 font-medium tracking-wider text-sm mb-4 uppercase`}>
                                        {project.category}
                                    </span>
                                    <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
                                        {project.title}
                                    </h3>
                                    <p className="text-gray-400 text-lg leading-relaxed mb-8">
                                        {project.description}
                                    </p>

                                    <div className="flex flex-wrap justify-center lg:justify-start gap-3 mb-10">
                                        {project.tags.map(tag => (
                                            <span key={tag} className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-gray-300 text-sm hover:bg-white/10 transition-colors">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    <div className="flex gap-6">
                                        <a
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-2 text-white font-medium hover:text-blue-400 transition-colors group/link"
                                        >
                                            <Github size={20} />
                                            <span>View Source</span>
                                            <ExternalLink size={16} className="opacity-0 -ml-2 group-hover/link:opacity-100 group-hover/link:ml-0 transition-all" />
                                        </a>
                                        {/* <a href={project.demo} className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
                                            Live Demo
                                        </a> */}
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

export default Projects;
