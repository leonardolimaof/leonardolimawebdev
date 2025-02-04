"use client";

import { motion } from 'framer-motion';
import { FaYoutube } from 'react-icons/fa';
import React from 'react';

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

// Exemplo de estrutura para os vídeos
const videos = [
  {
    title: "Em breve",
    description: "Novos vídeos serão adicionados em breve. Fique ligado!",
    thumbnailUrl: "https://via.placeholder.com/640x360.png?text=Em+Breve",
    youtubeId: "" // Adicione o ID do vídeo do YouTube quando disponível
  }
];

export default function VideoAulas() {
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
              Vídeo Aulas
            </h1>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Aprenda desenvolvimento web com aulas práticas e projetos reais.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {videos.map((video, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-black/20 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-white/10"
              >
                {video.youtubeId ? (
                  <div className="relative pt-[56.25%]">
                    <iframe
                      className="absolute top-0 left-0 w-full h-full"
                      src={`https://www.youtube.com/embed/${video.youtubeId}`}
                      title={video.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                ) : (
                  <div className="relative pt-[56.25%] bg-black/40">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <FaYoutube className="w-16 h-16 text-white/50" />
                    </div>
                  </div>
                )}
                
                <div className="p-4">
                  <h2 className="text-xl font-bold mb-2">{video.title}</h2>
                  <p className="text-gray-200 text-sm">{video.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div 
            variants={itemVariants}
            className="text-center mt-8"
          >
            <p className="text-lg text-gray-200">
              Inscreva-se no canal para receber notificações quando novos vídeos forem publicados!
            </p>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}