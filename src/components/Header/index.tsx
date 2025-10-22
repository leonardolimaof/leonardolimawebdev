"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import profilePic from '../../img/photoperfil.jpg';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const menuVariants = {
        closed: {
            opacity: 0,
            height: 0,
            transition: {
                duration: 0.3
            }
        },
        open: {
            opacity: 1,
            height: "auto",
            transition: {
                duration: 0.3
            }
        }
    };

    const socialLinks = [
        { 
            icon: FaGithub, 
            url: 'https://github.com/leonardolimaArt', 
            label: 'GitHub'
        },
        { 
            icon: FaLinkedin, 
            url: 'https://www.linkedin.com/in/leonardo-lima-2a6b23155/', 
            label: 'LinkedIn'
        }
    ];

    return (
        <motion.header
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className="fixed top-0 left-0 right-0 z-50 bg-[#1a1c2e]/80 backdrop-blur-lg border-b border-white/10"
        >
            <div className="container mx-auto px-4 md:px-8">
                <div className="flex justify-between items-center h-20">
                    <div className="flex items-center space-x-4">
                        <motion.div 
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className="w-10 h-10 rounded-full overflow-hidden border-2 border-[#6366f1]"
                        >
                            <Image 
                                src={profilePic} 
                                alt="Leonardo Lima" 
                                className="w-full h-full object-cover"
                            />
                        </motion.div>
                        <div className="text-2xl font-bold bg-gradient-to-r from-[#fff] to-[#e0e7ff] bg-clip-text text-transparent">
                            Leonardo Lima
                        </div>
                    </div>

                    {/* Desktop Menu */}
                    <nav className="hidden md:block">
                        <ul className="flex space-x-8">
                            <motion.li whileHover={{ scale: 1.1 }}>
                                <Link href="/" className="text-gray-300 hover:text-white transition-colors">
                                    Home
                                </Link>
                            </motion.li>
                            <motion.li whileHover={{ scale: 1.1 }}>
                                <Link href="/projetos" className="text-gray-300 hover:text-white transition-colors">
                                    Projetos
                                </Link>
                            </motion.li>
                            <motion.li whileHover={{ scale: 1.1 }}>
                                <Link href="/video-aulas" className="text-gray-300 hover:text-white transition-colors">
                                    Video aulas
                                </Link>
                            </motion.li>
                        </ul>
                    </nav>

                    {/* Mobile Menu Button */}
                    <button 
                        className="md:hidden text-white p-2"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        <svg 
                            className="w-6 h-6" 
                            fill="none" 
                            stroke="currentColor" 
                            viewBox="0 0 24 24"
                        >
                            {isMenuOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>
                </div>

                {/* Mobile Menu */}
                <AnimatePresence>
                    {isMenuOpen && (
                        <motion.nav 
                            className="md:hidden"
                            initial="closed"
                            animate="open"
                            exit="closed"
                            variants={menuVariants}
                        >
                            <ul className="py-4 space-y-4">
                                <li>
                                    <Link 
                                        href="/" 
                                        className="text-gray-300 hover:text-white transition-colors block" 
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        Home
                                    </Link>
                                </li>
                                <li>
                                    <Link 
                                        href="/projetos" 
                                        className="text-gray-300 hover:text-white transition-colors block" 
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        Projetos
                                    </Link>
                                </li>
                                <li>
                                    <Link 
                                        href="/video-aulas" 
                                        className="text-gray-300 hover:text-white transition-colors block" 
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        Video aulas
                                    </Link>
                                </li>
                            </ul>
                        </motion.nav>
                    )}
                </AnimatePresence>
            </div>
        </motion.header>
    );
};

export default Header;