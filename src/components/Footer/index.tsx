"use client";

import React from 'react';
import { FaInstagram, FaFacebook, FaTelegram, FaWhatsapp, FaLinkedin, FaGithub } from 'react-icons/fa';
import { motion } from 'framer-motion';

const socialLinks = [
    { icon: FaInstagram, href: "https://www.instagram.com/leonardolimaof", label: "Instagram" },
    { icon: FaFacebook, href: "https://www.facebook.com/LeonardoGomesLimaOf/", label: "Facebook" },
    { icon: FaTelegram, href: "https://t.me/leonardolimaof", label: "Telegram" },
    { icon: FaWhatsapp, href: "https://api.whatsapp.com/send?phone=5585996517732&text=Oi%20Leonardo,%20gostaria%20de%20tirar%20duvidas%20com%20voce!", label: "WhatsApp" },
    { icon: FaLinkedin, href: "https://www.linkedin.com/in/leonardo-lima-2a6b23155/", label: "LinkedIn" },
    { icon: FaGithub, href: "https://github.com/leonardolimaArt", label: "GitHub" }
];

const Footer = () => {
    return (
        <footer className="bg-[#1a1c2e] border-t border-white/10 py-8">
            <div className="container mx-auto px-4 md:px-8">
                <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-center md:text-left"
                    >
                        <h3 className="text-2xl font-bold bg-gradient-to-r from-[#fff] to-[#e0e7ff] bg-clip-text text-transparent mb-2">
                            Vamos conectar?
                        </h3>
                        <p className="text-gray-300">
                            Siga-me nas redes sociais para acompanhar meu trabalho e novidades!
                        </p>
                    </motion.div>

                    <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="flex flex-wrap justify-center gap-4"
                    >
                        {socialLinks.map((social, index) => (
                            <motion.a
                                key={social.label}
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.2, rotate: 8 }}
                                whileTap={{ scale: 0.9 }}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.3, delay: index * 0.1 }}
                                className="bg-[#2a2d4a] p-3 rounded-full hover:bg-[#6366f1] transition-colors duration-300"
                                aria-label={social.label}
                            >
                                <social.icon className="w-5 h-5 text-white" />
                            </motion.a>
                        ))}
                    </motion.div>
                </div>

                <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="mt-8 pt-4 border-t border-white/10 text-center"
                >
                    <p className="text-gray-400 text-sm">
                        © {new Date().getFullYear()} Leonardo Lima. Todos os direitos reservados.
                    </p>
                </motion.div>
            </div>
        </footer>
    );
};

export default Footer;
