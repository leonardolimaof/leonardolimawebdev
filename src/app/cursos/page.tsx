"use client";

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import fullstackPic from '@/img/fullstack.webp';
import { motion } from 'framer-motion';
import { FaCode, FaReact, FaNodeJs, FaDatabase, FaGitAlt } from 'react-icons/fa';
import React from 'react';
import { IconType } from 'react-icons';

interface Technology {
  icon: IconType;
  name: string;
  description: string;
}

interface TechCardProps {
  tech: Technology;
}

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.4
    }
  }
};

const TechCard: React.FC<TechCardProps> = React.memo(({ tech }) => (
  <motion.div
    variants={itemVariants}
    className="flex items-center space-x-4 bg-black/20 backdrop-blur-sm p-4 rounded-xl hover:bg-black/30 transition-all duration-300 border border-white/10"
  >
    <div className="flex-shrink-0">
      <tech.icon className="w-8 h-8 text-gradient-to-r from-green-400 via-blue-500 to-purple-600" />
    </div>
    <div>
      <h3 className="font-semibold text-lg text-white">{tech.name}</h3>
      <p className="text-gray-200 text-sm">{tech.description}</p>
    </div>
  </motion.div>
));

TechCard.displayName = 'TechCard';

export default function Cursos() {
  const router = useRouter();

  const technologies = React.useMemo<Technology[]>(() => [
    { icon: FaCode, name: "HTML, CSS, JavaScript", description: "Fundamentos da web moderna" },
    { icon: FaReact, name: "React, Next.js", description: "Frameworks front-end poderosos" },
    { icon: FaNodeJs, name: "Node.js, Express", description: "Backend robusto e escalável" },
    { icon: FaDatabase, name: "MongoDB, SQL", description: "Bancos de dados modernos" },
    { icon: FaGitAlt, name: "Git, GitHub", description: "Controle de versão profissional" }
  ], []);

  const handleRedirect = React.useCallback(() => {
    router.push('/video-aulas');
  }, [router]);

  return (
    <div className="min-h-screen px-4 md:px-8 lg:px-20">
      <motion.div 
        className="container mx-auto max-w-6xl pt-10"
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        <motion.div 
          className="bg-[#2a2d4a]/80 backdrop-blur-lg rounded-2xl shadow-2xl p-4 sm:p-6 md:p-8 border border-white/10"
          variants={itemVariants}
        >
          <div className="flex flex-col items-center">
            <motion.h1 
              className="text-4xl md:text-5xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-[#fff] to-[#e0e7ff]"
              variants={itemVariants}
            >
              Curso Fullstack
            </motion.h1>

            <div className="w-full max-w-4xl mx-auto">
              <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
                <motion.div 
                  className="w-full lg:w-1/2"
                  variants={itemVariants}
                >
                  <div className="relative group max-w-[500px] mx-auto">
                    <div className="absolute -inset-1 bg-gradient-to-r from-[#6366f1] via-[#4f46e5] to-[#403a7e] rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200" />
                    <div className="relative">
                      <Image 
                        src={fullstackPic} 
                        alt="Fullstack Course" 
                        className="rounded-xl shadow-2xl transform transition-transform duration-500 group-hover:scale-105 w-full"
                      />
                    </div>
                  </div>
                </motion.div>

                <motion.div 
                  className="w-full lg:w-1/2 space-y-6"
                  variants={itemVariants}
                >
                  <div className="prose prose-lg text-gray-100">
                    <p className="text-lg leading-relaxed">
                      O curso de Fullstack é uma jornada completa pelo desenvolvimento web moderno. 
                      Você aprenderá a criar aplicações web completas e funcionais, dominando tanto 
                      o front-end quanto o back-end.
                    </p>
                  </div>

                  <motion.div 
                    className="grid gap-4"
                    variants={containerVariants}
                  >
                    {technologies.map((tech) => (
                      <TechCard key={tech.name} tech={tech} />
                    ))}
                  </motion.div>

                  <motion.div 
                    className="text-center pt-4"
                    variants={itemVariants}
                  >
                    <motion.button
                      onClick={handleRedirect}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-8 py-3 bg-[#6366f1] hover:bg-[#4f46e5] text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                      Começar Agora
                    </motion.button>
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
