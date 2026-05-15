import React from 'react';
import { motion } from 'framer-motion';

const WavingGhost = () => {
    return (
        <div className="relative w-64 h-64 md:w-80 md:h-80 flex items-center justify-center">
            {/* Question Mark */}
            <motion.div
                initial={{ opacity: 0, y: 10, x: 10 }}
                animate={{ opacity: [0, 1, 0], y: [-10, -30], x: [10, 30] }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
                className="absolute top-10 right-10 text-4xl font-bold text-gray-400 select-none"
            >
                ?
            </motion.div>

            {/* Ghost Body */}
            <motion.svg
                viewBox="0 0 200 200"
                className="w-full h-full drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]"
                animate={{
                    y: [0, -15, 0],
                }}
                transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            >
                {/* Body Shape */}
                <path
                    d="M 50 190 
                       Q 20 190 20 150 
                       L 20 80 
                       Q 20 20 100 20 
                       Q 180 20 180 80 
                       L 180 150 
                       Q 180 190 150 190
                       L 140 170
                       L 130 190
                       L 120 170
                       L 110 190
                       L 100 170
                       L 90 190
                       L 80 170
                       L 70 190
                       L 60 170
                       Z"
                    fill="none"
                    stroke="white"
                    strokeWidth="3"
                    strokeLinejoin="round"
                    className="drop-shadow-lg"
                />

                {/* Eyes */}
                <ellipse cx="70" cy="80" rx="10" ry="15" fill="white" />
                <ellipse cx="130" cy="80" rx="10" ry="15" fill="white" />

                {/* Waving Arm */}
                <motion.path
                    d="M 180 100 Q 220 80 230 110"
                    fill="none"
                    stroke="white"
                    strokeWidth="3"
                    strokeLinecap="round"
                    animate={{
                        d: [
                            "M 180 100 Q 220 80 230 110",
                            "M 180 100 Q 220 40 230 70",
                            "M 180 100 Q 220 80 230 110"
                        ]
                    }}
                    transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />

                {/* Left Arm (Stationary) */}
                <path
                    d="M 20 100 Q -10 120 10 140"
                    fill="none"
                    stroke="white"
                    strokeWidth="3"
                    strokeLinecap="round"
                />

                {/* Mouth (Small O) */}
                <circle cx="100" cy="110" r="5" fill="white" />

            </motion.svg>

            {/* Glow effect at bottom */}
            <div className="absolute -bottom-4 w-40 h-8 bg-white/20 blur-xl rounded-full animate-pulse" />
        </div>
    );
};

export default WavingGhost;
