"use client";

import Image from 'next/image';
import billyPic from '@/img/billy.png';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import React from 'react';

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.6
    }
  }
};

const projects = [
  {
    title: "Billy Brinquedos",
    description: "Projeto desenvolvido para a loja Billy Brinquedos, oferecendo uma plataforma online para a venda de brinquedos. Desenvolvido com Next.js, TypeScript e Tailwind CSS.",
    image: billyPic,
    liveUrl: "https://billybrinquedos.vercel.app",
    githubUrl: "https://github.com/leonardolimaof/billybrinquedos",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "E-commerce"]
  }
  // Adicione mais projetos aqui
];

export default function Projetos() {
  return (
    <div className="min-h-screen px-4 md:px-8 lg:px-20">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="container mx-auto max-w-6xl pt-24"
      >
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-[#2a2d4a]/80 backdrop-blur-lg rounded-2xl shadow-2xl p-4 sm:p-6 md:p-8 border border-white/10"
        >
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-[#fff] to-[#e0e7ff] bg-clip-text text-transparent">
              Meus Projetos
            </h1>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Conheça alguns dos projetos que desenvolvi utilizando as mais modernas tecnologias.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                variants={itemVariants}
                className="bg-white/10 backdrop-blur-lg rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                <div className="relative group">
                  <Image 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover transform transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-4 space-y-2">
                      <div className="flex gap-3">
                        <a 
                          href={project.githubUrl} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="bg-white/20 p-2 rounded-full hover:bg-white/30 transition-colors"
                        >
                          <FaGithub className="w-5 h-5" />
                        </a>
                        <a 
                          href={project.liveUrl} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="bg-white/20 p-2 rounded-full hover:bg-white/30 transition-colors"
                        >
                          <FaExternalLinkAlt className="w-5 h-5" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="p-6 space-y-4">
                  <h2 className="text-xl font-bold">{project.title}</h2>
                  <p className="text-gray-300 text-sm">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map(tag => (
                      <span 
                        key={tag}
                        className="text-xs px-3 py-1 bg-white/10 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
