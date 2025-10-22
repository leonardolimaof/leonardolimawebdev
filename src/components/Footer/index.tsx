"use client";

import React from 'react';
import { FaInstagram, FaFacebook, FaTelegram, FaWhatsapp, FaLinkedin, FaGithub, FaHeart, FaCode } from 'react-icons/fa';
import { motion } from 'framer-motion';

const socialLinks = [
    { icon: FaInstagram, href: "https://www.instagram.com/leonardolimaof", label: "Instagram", color: "#E4405F" },
    { icon: FaFacebook, href: "https://www.facebook.com/LeonardoGomesLimaOf/", label: "Facebook", color: "#1877F2" },
    { icon: FaTelegram, href: "https://t.me/leonardolimaof", label: "Telegram", color: "#0088CC" },
    { icon: FaWhatsapp, href: "https://api.whatsapp.com/send?phone=5585996517732&text=Oi%20Leonardo,%20gostaria%20de%20tirar%20duvidas%20com%20voce!", label: "WhatsApp", color: "#25D366" },
    { icon: FaLinkedin, href: "https://www.linkedin.com/in/leonardo-lima-2a6b23155/", label: "LinkedIn", color: "#0077B5" },
    { icon: FaGithub, href: "https://github.com/leonardolimaArt", label: "GitHub", color: "#181717" }
];

const quickLinks = [
    { label: "Home", href: "/" },
    { label: "Projetos", href: "/projetos" },
    { label: "Video Aulas", href: "/video-aulas" }
];

const Footer = () => {
    return (
        <footer className="relative bg-gray-900/50 backdrop-blur-sm border-t border-gray-700/50">
            {/* Background decorations */}
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent" />
            
            <div className="relative z-10 container mx-auto px-4 md:px-8 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                    {/* Brand Section */}
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="lg:col-span-2"
                    >
                        <h3 className="text-3xl font-bold bg-gradient-to-r from-white via-[#e0e7ff] to-[#6366f1] bg-clip-text text-transparent mb-4">
                            Leonardo Lima
                        </h3>
                        <p className="text-gray-300 mb-6 leading-relaxed">
                            Desenvolvedor Full-Stack apaixonado por criar experiências digitais incríveis. 
                            Transformando ideias em soluções tecnológicas que geram resultados reais.
                        </p>
                        <div className="flex items-center space-x-2 text-gray-400">
                            <span>Feito com</span>
                            <FaHeart className="text-red-400 animate-pulse" />
                            <span>e</span>
                            <FaCode className="text-[#6366f1]" />
                            <span>por Leonardo Lima</span>
                        </div>
                    </motion.div>

                    {/* Quick Links */}
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        viewport={{ once: true }}
                    >
                        <h4 className="text-xl font-semibold text-white mb-6">Links Rápidos</h4>
                        <ul className="space-y-3">
                            {quickLinks.map((link, index) => (
                                <motion.li key={link.label}>
                                    <motion.a
                                        href={link.href}
                                        whileHover={{ x: 5 }}
                                        className="text-gray-300 hover:text-[#6366f1] transition-colors duration-300 flex items-center"
                                    >
                                        <span className="w-2 h-2 bg-[#6366f1] rounded-full mr-3 opacity-70" />
                                        {link.label}
                                    </motion.a>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Social Links */}
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        <h4 className="text-xl font-semibold text-white mb-6">Conecte-se</h4>
                        <div className="flex flex-wrap gap-3">
                            {socialLinks.map((social, index) => (
                                <motion.a
                                    key={social.label}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ 
                                        scale: 1.1, 
                                        rotate: 5,
                                        boxShadow: `0 8px 25px ${social.color}40`
                                    }}
                                    whileTap={{ scale: 0.95 }}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.3, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    className="group relative bg-gray-800/50 p-3 rounded-xl hover:bg-gray-700/50 transition-all duration-300 border border-gray-700/50 hover:border-gray-600/50"
                                    aria-label={social.label}
                                >
                                    <social.icon 
                                        className="w-5 h-5 text-gray-300 group-hover:text-white transition-colors duration-300" 
                                        style={{ color: social.color }}
                                    />
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>
                </div>

                {/* Bottom section */}
                <motion.div 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    viewport={{ once: true }}
                    className="pt-8 border-t border-gray-700/50"
                >
                    <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                        <p className="text-gray-400 text-sm text-center md:text-left">
                            © {new Date().getFullYear()} Leonardo Lima. Todos os direitos reservados.
                        </p>
                        <div className="flex items-center space-x-6 text-sm text-gray-400">
                            <motion.a 
                                href="#" 
                                whileHover={{ color: "#6366f1" }}
                                className="hover:text-[#6366f1] transition-colors duration-300"
                            >
                                Política de Privacidade
                            </motion.a>
                            <motion.a 
                                href="#" 
                                whileHover={{ color: "#6366f1" }}
                                className="hover:text-[#6366f1] transition-colors duration-300"
                            >
                                Termos de Uso
                            </motion.a>
                        </div>
                    </div>
                </motion.div>
            </div>
        </footer>
    );
};

export default Footer;
