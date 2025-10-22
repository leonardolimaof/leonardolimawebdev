"use client";

import Image from 'next/image';
import profilePic from '../../img/photoperfil.jpg';
import { motion } from 'framer-motion';
import { useState } from 'react';

export function Photoperfil() {
    const [imageLoaded, setImageLoaded] = useState(false);

    return (
        <motion.div
            className="relative w-full flex justify-center"
            initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{
                duration: 1,
                delay: 0.2,
                ease: [0, 0.71, 0.2, 1.01]
            }}
        >
            <div className="relative group">
                {/* Floating elements around photo */}
                <motion.div
                    className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-[#6366f1] to-[#8b5cf6] rounded-full opacity-80"
                    animate={{
                        y: [-10, 10, -10],
                        rotate: [0, 180, 360]
                    }}
                    transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />
                
                <motion.div
                    className="absolute -bottom-2 -left-6 w-6 h-6 bg-gradient-to-r from-[#ec4899] to-[#f43f5e] rounded-full opacity-70"
                    animate={{
                        y: [10, -10, 10],
                        x: [-5, 5, -5]
                    }}
                    transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 1
                    }}
                />

                <motion.div
                    className="absolute top-1/2 -left-8 w-4 h-4 bg-gradient-to-r from-[#10b981] to-[#06b6d4] rounded-full opacity-60"
                    animate={{
                        scale: [1, 1.5, 1],
                        rotate: [0, 180, 360]
                    }}
                    transition={{
                        duration: 2.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 0.5
                    }}
                />

                {/* Animated border rings */}
                <motion.div
                    className="absolute -inset-4 rounded-full"
                    style={{
                        background: "conic-gradient(from 0deg, #6366f1, #8b5cf6, #ec4899, #f43f5e, #10b981, #06b6d4, #6366f1)",
                        padding: "2px"
                    }}
                    animate={{
                        rotate: 360
                    }}
                    transition={{
                        duration: 6,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                >
                    <div className="w-full h-full rounded-full bg-gray-900" />
                </motion.div>

                {/* Secondary glow ring */}
                <motion.div
                    className="absolute -inset-2 rounded-full opacity-60"
                    style={{
                        background: "radial-gradient(circle, rgba(99, 102, 241, 0.3) 0%, transparent 70%)"
                    }}
                    animate={{
                        scale: [1, 1.1, 1],
                        opacity: [0.6, 0.9, 0.6]
                    }}
                    transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />

                {/* Photo container */}
                <div className="relative">
                    <motion.div
                        whileHover={{ 
                            scale: 1.05,
                            boxShadow: "0 25px 50px rgba(99, 102, 241, 0.4)"
                        }}
                        whileTap={{ scale: 0.98 }}
                        className="relative rounded-full overflow-hidden w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 border-4 border-white/20 backdrop-blur-sm shadow-2xl"
                        style={{
                            background: "linear-gradient(135deg, rgba(99, 102, 241, 0.1), rgba(139, 92, 246, 0.1))"
                        }}
                    >
                        {/* Loading placeholder */}
                        {!imageLoaded && (
                            <div className="absolute inset-0 bg-gradient-to-br from-gray-700 to-gray-800 animate-pulse flex items-center justify-center">
                                <div className="w-16 h-16 border-4 border-[#6366f1] border-t-transparent rounded-full animate-spin" />
                            </div>
                        )}

                        <Image
                            src={profilePic}
                            alt="Leonardo Lima - Desenvolvedor Web Full-Stack"
                            fill
                            className={`object-cover transform transition-all duration-700 group-hover:scale-110 ${
                                imageLoaded ? 'opacity-100' : 'opacity-0'
                            }`}
                            priority
                            onLoadingComplete={() => setImageLoaded(true)}
                            sizes="(max-width: 640px) 224px, (max-width: 768px) 256px, 288px"
                        />

                        {/* Overlay gradient */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </motion.div>

                    {/* Status indicator */}
                    <motion.div
                        className="absolute bottom-4 right-4 w-6 h-6 bg-green-400 rounded-full border-4 border-white shadow-lg"
                        animate={{
                            scale: [1, 1.2, 1],
                        }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                        title="Disponível para projetos"
                    >
                        <div className="absolute inset-0 bg-green-400 rounded-full animate-ping opacity-75" />
                    </motion.div>
                </div>

                {/* Floating tech icons */}
                <motion.div
                    className="absolute -top-8 left-1/2 transform -translate-x-1/2 text-2xl"
                    animate={{
                        y: [-5, 5, -5],
                        rotate: [0, 10, -10, 0]
                    }}
                    transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                >
                    💻
                </motion.div>

                <motion.div
                    className="absolute -bottom-8 right-4 text-xl"
                    animate={{
                        y: [5, -5, 5],
                        x: [-2, 2, -2]
                    }}
                    transition={{
                        duration: 3.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 1.5
                    }}
                >
                    🚀
                </motion.div>

                <motion.div
                    className="absolute top-1/3 -right-8 text-lg"
                    animate={{
                        rotate: [0, 360],
                        scale: [1, 1.2, 1]
                    }}
                    transition={{
                        duration: 5,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 0.8
                    }}
                >
                    ⚡
                </motion.div>
            </div>
        </motion.div>
    );
}