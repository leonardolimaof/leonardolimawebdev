"use client";

import Image from 'next/image';
import billyPic from '@/img/billy.png';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaReact, FaNodeJs, FaMobile, FaShoppingCart } from 'react-icons/fa';
import { SiNextdotjs, SiTypescript, SiTailwindcss, SiVercel } from 'react-icons/si';
import React from 'react';

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { 
    opacity: 1, 
    y: 0
  }
};

const projects = [
  {
    title: "Billy Brinquedos",
    subtitle: "E-commerce de Brinquedos",
    description: "Plataforma completa de e-commerce para venda de brinquedos com sistema de carrinho, checkout e gestão de produtos. Interface moderna e responsiva para uma experiência de compra otimizada.",
    image: billyPic,
    liveUrl: "https://billybrinquedos.vercel.app",
    githubUrl: "https://github.com/leonardolimaof/billybrinquedos",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "E-commerce"],
    techIcons: [SiNextdotjs, SiTypescript, SiTailwindcss, FaShoppingCart],
    gradient: "from-blue-500 to-purple-600",
    featured: true
  },
  {
    title: "Boora Comer Delivery",
    subtitle: "App de Delivery de Comida",
    description: "Aplicação moderna de delivery de comida com interface intuitiva, sistema de pedidos em tempo real, integração com métodos de pagamento e experiência mobile-first otimizada.",
    image: null, // Placeholder será usado
    liveUrl: "https://booracomerdelivery.vercel.app/",
    githubUrl: "#", // Adicione o GitHub se disponível
    tags: ["React", "Next.js", "Mobile-First", "Real-time"],
    techIcons: [FaReact, SiNextdotjs, FaMobile, SiVercel],
    gradient: "from-orange-500 to-red-600",
    featured: true
  },
  {
    title: "AreaDev Front Teste",
    subtitle: "Sistema de Autenticação",
    description: "Aplicação de teste front-end com sistema completo de autenticação, interface de login moderna e responsiva. Desenvolvido para demonstrar competências em desenvolvimento frontend.",
    image: null, // Placeholder será usado
    liveUrl: "https://areadev-frontteste.vercel.app/auth/login",
    githubUrl: "#", // Adicione o GitHub se disponível
    tags: ["React", "Authentication", "Frontend", "Responsive"],
    techIcons: [FaReact, SiVercel, FaNodeJs, SiTailwindcss],
    gradient: "from-green-500 to-teal-600",
    featured: false
  }
];

export default function Projetos() {
  return (
    <div className="min-h-screen px-4 md:px-8">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="container mx-auto max-w-7xl pt-24"
      >
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-[#e0e7ff] to-[#6366f1] bg-clip-text text-transparent">
            Meus Projetos
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Conheça alguns dos projetos que desenvolvi utilizando tecnologias modernas, 
            focando sempre em experiência do usuário e performance.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="group relative bg-gray-800/30 backdrop-blur-sm rounded-3xl overflow-hidden border border-gray-700/50 hover:border-gray-600/50 transition-all duration-500 hover:shadow-2xl"
            >
              {/* Project Image/Placeholder */}
              <div className="relative h-64 overflow-hidden">
                {project.image ? (
                  <Image 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                    fill
                  />
                ) : (
                  <div className={`w-full h-full bg-gradient-to-br ${project.gradient} flex items-center justify-center relative`}>
                    <div className="text-6xl text-white/80">
                      {project.title.includes('Boora') ? '🍕' : project.title.includes('AreaDev') ? '🔐' : '📱'}
                    </div>
                    <div className="absolute inset-0 bg-black/20" />
                  </div>
                )}
                
                {/* Overlay with actions */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
                    <div className="flex gap-3">
                      {project.techIcons.map((Icon, iconIndex) => (
                        <div 
                          key={iconIndex}
                          className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white transform transition-transform duration-300 hover:scale-110"
                        >
                          <Icon className="w-5 h-5" />
                        </div>
                      ))}
                    </div>
                    <div className="flex gap-3">
                      {project.githubUrl !== "#" && (
                        <motion.a 
                          href={project.githubUrl} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          className="w-12 h-12 bg-gray-900/80 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-gray-800/80 transition-colors duration-300"
                        >
                          <FaGithub className="w-6 h-6" />
                        </motion.a>
                      )}
                      <motion.a 
                        href={project.liveUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="w-12 h-12 bg-[#6366f1]/80 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-[#5b5af5]/80 transition-colors duration-300"
                      >
                        <FaExternalLinkAlt className="w-6 h-6" />
                      </motion.a>
                    </div>
                  </div>
                </div>

                {/* Featured badge */}
                {project.featured && (
                  <div className="absolute top-4 right-4 bg-gradient-to-r from-[#6366f1] to-[#8b5cf6] px-3 py-1 rounded-full text-sm font-semibold text-white">
                    Featured
                  </div>
                )}
              </div>
              
              {/* Content */}
              <div className="p-8">
                <div className="mb-4">
                  <h2 className="text-2xl font-bold text-white mb-2 group-hover:text-[#6366f1] transition-colors duration-300">
                    {project.title}
                  </h2>
                  <p className="text-[#6366f1] font-medium text-sm">
                    {project.subtitle}
                  </p>
                </div>
                
                <p className="text-gray-300 leading-relaxed mb-6">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tag}
                      className="px-3 py-1 bg-gray-700/50 hover:bg-gray-600/50 rounded-full text-sm text-gray-300 transition-colors duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-[#6366f1]/10 to-[#8b5cf6]/10 rounded-2xl p-8 border border-gray-700/30">
            <h3 className="text-2xl font-bold text-white mb-4">
              Interessado em um projeto?
            </h3>
            <p className="text-gray-300 mb-6">
              Vamos conversar sobre como posso ajudar a transformar suas ideias em realidade
            </p>
            <motion.a
              href="https://api.whatsapp.com/send?phone=5585996517732&text=Oi%20Leonardo,%20gostaria%20de%20tirar%20duvidas%20com%20voce!"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#6366f1] to-[#8b5cf6] text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            >
              💬 Iniciar Conversa
            </motion.a>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
