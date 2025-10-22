"use client";

import { motion } from "framer-motion"
import React from 'react'
import { 
  FaCode, 
  FaMobile, 
  FaRocket, 
  FaUserClock, 
  FaDownload, 
  FaProjectDiagram,
  FaLightbulb,
  FaHandshake,
  FaChartLine
} from 'react-icons/fa'
import { IconType } from 'react-icons'
import { Photoperfil } from "../components/Photoperfil";
import SkillsChart from "../components/SkillsChart";

interface FeatureCardProps {
  icon: IconType;
  title: string;
  description: string;
  color: string;
}

interface StatCardProps {
  number: string;
  label: string;
  icon: IconType;
}

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
}

const fadeInLeft = {
  initial: { opacity: 0, x: -30 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.6 }
}

const fadeInRight = {
  initial: { opacity: 0, x: 30 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.6 }
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
}

const FeatureCard: React.FC<FeatureCardProps> = React.memo(({ icon: Icon, title, description, color }) => (
  <motion.div 
    variants={fadeInUp}
    whileHover={{ 
      scale: 1.05,
      boxShadow: "0 20px 40px rgba(0,0,0,0.1)"
    }}
    className="group flex items-start space-x-4 bg-gray-800/30 backdrop-blur-sm p-6 rounded-2xl hover:bg-gray-800/50 transition-all duration-500 border border-gray-700/30 hover:border-gray-600/50"
  >
    <div className={`${color} text-3xl group-hover:scale-110 transition-transform duration-300 flex-shrink-0 mt-1`}>
      <Icon />
    </div>
    <div>
      <h4 className="font-bold text-white text-lg mb-2 group-hover:text-[#6366f1] transition-colors duration-300">
        {title}
      </h4>
      <p className="text-gray-300 leading-relaxed">{description}</p>
    </div>
  </motion.div>
));

const StatCard: React.FC<StatCardProps> = React.memo(({ number, label, icon: Icon }) => (
  <motion.div 
    variants={fadeInUp}
    whileHover={{ scale: 1.05 }}
    className="bg-gradient-to-br from-[#6366f1]/20 to-[#8b5cf6]/20 backdrop-blur-sm p-6 rounded-2xl border border-[#6366f1]/30 text-center group hover:shadow-2xl transition-all duration-300"
  >
    <Icon className="text-4xl text-[#6366f1] mx-auto mb-3 group-hover:scale-110 transition-transform duration-300" />
    <div className="text-3xl font-bold text-white mb-2">{number}</div>
    <div className="text-gray-300 font-medium">{label}</div>
  </motion.div>
));

FeatureCard.displayName = 'FeatureCard';
StatCard.displayName = 'StatCard';

export default function Home() {
  const whatsappLink = "https://api.whatsapp.com/send?phone=5585996517732&text=Oi%20Leonardo,%20gostaria%20de%20tirar%20duvidas%20com%20voce!";

  const features = React.useMemo(() => [
    {
      icon: FaCode,
      title: "Desenvolvimento Full-Stack",
      description: "Criação completa de aplicações web modernas, desde o frontend até o backend, utilizando as melhores práticas e tecnologias atuais.",
      color: "text-emerald-400"
    },
    {
      icon: FaMobile,
      title: "Design Responsivo",
      description: "Interfaces adaptáveis que funcionam perfeitamente em todos os dispositivos, garantindo uma experiência única para todos os usuários.",
      color: "text-blue-400"
    },
    {
      icon: FaRocket,
      title: "Otimização & Performance",
      description: "Aplicações super rápidas e otimizadas, com foco em SEO, acessibilidade e performance para o melhor resultado possível.",
      color: "text-purple-400"
    },
    {
      icon: FaUserClock,
      title: "Suporte Completo",
      description: "Acompanhamento contínuo, manutenção preventiva e suporte técnico para garantir que seu projeto esteja sempre funcionando perfeitamente.",
      color: "text-yellow-400"
    },
    {
      icon: FaProjectDiagram,
      title: "Arquitetura Escalável",
      description: "Soluções pensadas para crescer junto com seu negócio, utilizando padrões de desenvolvimento que facilitam expansões futuras.",
      color: "text-pink-400"
    },
    {
      icon: FaLightbulb,
      title: "Inovação Constante",
      description: "Sempre atualizado com as últimas tendências e tecnologias do mercado para entregar soluções verdadeiramente inovadoras.",
      color: "text-orange-400"
    }
  ], []);

  const stats = React.useMemo(() => [
    { number: "50+", label: "Projetos Entregues", icon: FaProjectDiagram },
    { number: "3+", label: "Anos de Experiência", icon: FaChartLine },
    { number: "100%", label: "Satisfação dos Clientes", icon: FaHandshake },
    { number: "24/7", label: "Suporte Disponível", icon: FaUserClock }
  ], []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 md:px-8 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#1a1c2e] via-[#2a2d4a] to-[#1a1c2e] opacity-90" />
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#6366f1]/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#8b5cf6]/10 rounded-full blur-3xl animate-pulse" />
        </div>

        <motion.div 
          initial="initial"
          animate="animate"
          variants={staggerContainer}
          className="relative z-10 container mx-auto max-w-7xl pt-24"
        >
          <motion.div 
            variants={fadeInUp}
            className="bg-gray-800/30 backdrop-blur-xl rounded-3xl shadow-2xl p-8 md:p-12 border border-gray-700/50"
          >
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Profile Section */}
              <motion.div variants={fadeInLeft} className="text-center lg:text-left">
                <div className="w-full max-w-[300px] mx-auto lg:mx-0 mb-8">
                  <Photoperfil />
                </div>
                
                <motion.h1 
                  variants={fadeInUp}
                  className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-[#e0e7ff] to-[#6366f1] bg-clip-text text-transparent"
                >
                  Leonardo Lima
                </motion.h1>
                
                <motion.h2 
                  variants={fadeInUp}
                  className="text-xl md:text-2xl text-[#6366f1] font-semibold mb-6"
                >
                  Desenvolvedor Web Full-Stack
                </motion.h2>
                
                <motion.p 
                  variants={fadeInUp}
                  className="text-lg text-gray-300 mb-8 leading-relaxed"
                >
                  Transformo ideias em experiências digitais incríveis. Especialista em criar 
                  soluções web modernas, escaláveis e performáticas que geram resultados reais 
                  para seu negócio.
                </motion.p>

                <motion.div 
                  variants={fadeInUp}
                  className="flex flex-wrap gap-4 justify-center lg:justify-start"
                >
                  <motion.a
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(99, 102, 241, 0.4)" }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#6366f1] to-[#8b5cf6] text-white rounded-full font-semibold shadow-lg hover:shadow-2xl transition-all duration-300"
                  >
                    💬 Vamos Conversar
                  </motion.a>
                  
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center gap-2 px-8 py-4 bg-gray-800/50 border border-gray-600 text-white rounded-full font-semibold hover:bg-gray-700/50 transition-all duration-300"
                  >
                    <FaDownload />
                    Download CV
                  </motion.button>
                </motion.div>
              </motion.div>

              {/* Stats Section */}
              <motion.div variants={fadeInRight}>
                <div className="grid grid-cols-2 gap-4">
                  {stats.map((stat, index) => (
                    <StatCard key={index} {...stat} />
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 md:px-8 bg-gray-900/50">
        <motion.div 
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="container mx-auto max-w-7xl"
        >
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-[#e0e7ff] bg-clip-text text-transparent">
              Sobre Mim
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Sou um desenvolvedor apaixonado por tecnologia e inovação, com mais de 3 anos de experiência 
              criando soluções digitais que fazem a diferença. Minha missão é transformar suas ideias em 
              realidade através de código limpo, design intuitivo e tecnologias de ponta.
            </p>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <h3 className="text-3xl font-bold mb-12 text-center bg-gradient-to-r from-white to-[#e0e7ff] bg-clip-text text-transparent">
              Por que trabalhar comigo?
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <FeatureCard key={index} {...feature} />
              ))}
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-4 md:px-8">
        <motion.div 
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="container mx-auto max-w-7xl"
        >
          <SkillsChart />
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 md:px-8 bg-gradient-to-r from-[#6366f1]/10 to-[#8b5cf6]/10">
        <motion.div 
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="container mx-auto max-w-4xl text-center"
        >
          <motion.div variants={fadeInUp}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-[#e0e7ff] bg-clip-text text-transparent">
              Pronto para começar?
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Vamos transformar sua ideia em uma solução digital incrível. Entre em contato 
              e descubra como posso ajudar seu projeto a alcançar o próximo nível!
            </p>
            <motion.a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ 
                scale: 1.05, 
                boxShadow: "0 20px 40px rgba(99, 102, 241, 0.4)" 
              }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-[#6366f1] to-[#8b5cf6] text-white text-lg rounded-full font-semibold shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              🚀 Iniciar Projeto Agora
            </motion.a>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
}
