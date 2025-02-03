"use client";

import { motion } from "framer-motion"
import React from 'react'
import { FaCode, FaMobile, FaRocket, FaUserClock } from 'react-icons/fa'
import { IconType } from 'react-icons'
import { Photoperfil } from "../components/Photoperfil";

interface FeatureCardProps {
  icon: IconType;
  title: string;
  description: string;
  color: string;
}

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.4 }
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.05
    }
  }
}

const FeatureCard: React.FC<FeatureCardProps> = React.memo(({ icon: Icon, title, description, color }) => (
  <motion.div 
    variants={fadeInUp}
    className="flex items-start space-x-3 bg-black/20 backdrop-blur-sm p-4 rounded-lg hover:bg-black/30 transition-all duration-300 border border-white/10"
  >
    <Icon className={`text-2xl ${color} flex-shrink-0`} />
    <div>
      <h4 className="font-semibold text-white">{title}</h4>
      <p className="text-sm text-gray-200">{description}</p>
    </div>
  </motion.div>
));

FeatureCard.displayName = 'FeatureCard';

export default function Home() {
  const whatsappLink = "https://api.whatsapp.com/send?phone=5585996517732&text=Oi%20Leonardo,%20gostaria%20de%20tirar%20duvidas%20com%20voce!";

  const features = React.useMemo(() => [
    {
      icon: FaCode,
      title: "Desenvolvimento Web",
      description: "Sites responsivos e aplicações modernas",
      color: "text-green-400"
    },
    {
      icon: FaMobile,
      title: "Mobile First",
      description: "Design adaptativo para todos os dispositivos",
      color: "text-blue-400"
    },
    {
      icon: FaRocket,
      title: "Performance",
      description: "Otimização e velocidade em primeiro lugar",
      color: "text-purple-400"
    },
    {
      icon: FaUserClock,
      title: "Suporte Contínuo",
      description: "Acompanhamento e manutenção constante",
      color: "text-yellow-400"
    }
  ], []);

  return (
    <div className="min-h-screen px-4 md:px-8 lg:px-20">
      <motion.div 
        initial="initial"
        animate="animate"
        variants={staggerContainer}
        className="container mx-auto max-w-6xl pt-24"
      >
        <motion.div 
          variants={fadeInUp}
          className="bg-[#2a2d4a]/80 backdrop-blur-lg rounded-2xl shadow-2xl p-4 sm:p-6 md:p-8 border border-white/10"
        >
          <div className="flex flex-col items-center">
            <motion.div 
              variants={fadeInUp}
              className="w-full max-w-[280px] sm:max-w-[320px] md:max-w-[360px] mb-8"
            >
              <Photoperfil />
            </motion.div>

            <div className="w-full space-y-6">
              <motion.div variants={fadeInUp} className="text-center">
                <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-[#fff] to-[#e0e7ff] bg-clip-text text-transparent">
                  Sobre Mim
                </h2>
                <p className="text-lg text-gray-200 max-w-3xl mx-auto">
                  Olá, sou Leonardo Lima, um desenvolvedor web dedicado a transformar suas ideias em realidade. 
                  Com vasta experiência em tecnologias modernas, ofereço soluções personalizadas e eficientes para o seu negócio.
                </p>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <h3 className="text-2xl font-bold mb-6 text-center bg-gradient-to-r from-[#fff] to-[#e0e7ff] bg-clip-text text-transparent">
                  Por que trabalhar comigo?
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
                  {features.map((feature, index) => (
                    <FeatureCard key={index} icon={feature.icon} title={feature.title} description={feature.description} color={feature.color} />
                  ))}
                </div>
              </motion.div>

              <motion.div 
                variants={fadeInUp}
                className="text-center mt-8"
              >
                <p className="text-lg text-gray-100 mb-4">
                  Entre em contato e vamos discutir como posso ajudar a levar seu projeto ao próximo nível!
                </p>
                <motion.a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-block mt-4 px-6 py-3 bg-[#6366f1] hover:bg-[#4f46e5] text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Iniciar Projeto
                </motion.a>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
