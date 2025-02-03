"use client";

import Image from 'next/image';
import profilePic from '@/img/photoperfil.jpg';
import { motion } from 'framer-motion';

export function Photoperfil() {
    return (
        <motion.div 
            className="relative w-full flex justify-center"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
                duration: 0.8,
                delay: 0.5,
                ease: [0, 0.71, 0.2, 1.01]
            }}
        >
            <div className="relative group">
                {/* Efeito de borda animada */}
                <motion.div
                    className="absolute -inset-2 rounded-full"
                    style={{
                        background: "conic-gradient(from 0deg, #833AB4, #C13584, #E1306C, #FD1D1D, #F56040, #FCAF45, #833AB4)",
                    }}
                    animate={{
                        rotate: 360
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                />
                
                {/* Efeito de brilho */}
                <motion.div
                    className="absolute -inset-1 bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"
                    animate={{
                        rotate: 360
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                />
                
                {/* Container da foto */}
                <div className="relative">
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="relative rounded-full overflow-hidden w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 border-4 border-white/10"
                    >
                        <Image 
                            src={profilePic} 
                            alt="Professional Photo" 
                            className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
                            priority
                        />
                    </motion.div>
                </div>
            </div>
        </motion.div>
    );
}