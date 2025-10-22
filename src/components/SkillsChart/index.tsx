"use client";

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FaReact, 
  FaNodeJs, 
  FaJs, 
  FaPython, 
  FaHtml5, 
  FaCss3Alt, 
  FaGitAlt,
  FaFigma
} from 'react-icons/fa';
import { 
  SiNextdotjs, 
  SiTypescript, 
  SiTailwindcss, 
  SiMongodb, 
  SiPostgresql,
  SiPrisma
} from 'react-icons/si';

interface Skill {
  name: string;
  level: number;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  color: string;
  category: 'frontend' | 'backend' | 'database' | 'tools';
}

const skills: Skill[] = [
  { name: 'React', level: 95, icon: FaReact, color: '#61DAFB', category: 'frontend' },
  { name: 'Next.js', level: 90, icon: SiNextdotjs, color: '#000000', category: 'frontend' },
  { name: 'TypeScript', level: 88, icon: SiTypescript, color: '#3178C6', category: 'frontend' },
  { name: 'JavaScript', level: 95, icon: FaJs, color: '#F7DF1E', category: 'frontend' },
  { name: 'Tailwind CSS', level: 92, icon: SiTailwindcss, color: '#06B6D4', category: 'frontend' },
  { name: 'HTML5', level: 98, icon: FaHtml5, color: '#E34F26', category: 'frontend' },
  { name: 'CSS3', level: 95, icon: FaCss3Alt, color: '#1572B6', category: 'frontend' },
  { name: 'Node.js', level: 85, icon: FaNodeJs, color: '#339933', category: 'backend' },
  { name: 'Python', level: 80, icon: FaPython, color: '#3776AB', category: 'backend' },
  { name: 'MongoDB', level: 75, icon: SiMongodb, color: '#47A248', category: 'database' },
  { name: 'PostgreSQL', level: 70, icon: SiPostgresql, color: '#336791', category: 'database' },
  { name: 'Prisma', level: 78, icon: SiPrisma, color: '#2D3748', category: 'database' },
  { name: 'Git', level: 90, icon: FaGitAlt, color: '#F05032', category: 'tools' },
  { name: 'Figma', level: 85, icon: FaFigma, color: '#F24E1E', category: 'tools' },
];

const categoryLabels = {
  frontend: 'Frontend',
  backend: 'Backend',
  database: 'Database',
  tools: 'Ferramentas'
};

const SkillBar: React.FC<{ skill: Skill; index: number }> = ({ skill, index }) => {
  const [animatedLevel, setAnimatedLevel] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedLevel(skill.level);
    }, index * 100);

    return () => clearTimeout(timer);
  }, [skill.level, index]);

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-gray-800/50 rounded-lg p-4 backdrop-blur-sm border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300"
    >
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center space-x-3">
          <skill.icon 
            className="text-2xl" 
            style={{ color: skill.color }}
          />
          <span className="font-medium text-white">{skill.name}</span>
        </div>
        <span className="text-sm font-bold text-gray-300">{skill.level}%</span>
      </div>
      
      <div className="w-full bg-gray-700 rounded-full h-2">
        <motion.div
          className="h-2 rounded-full"
          style={{ backgroundColor: skill.color }}
          initial={{ width: 0 }}
          animate={{ width: `${animatedLevel}%` }}
          transition={{ duration: 1, delay: index * 0.1, ease: "easeOut" }}
        />
      </div>
    </motion.div>
  );
};

const SkillsChart: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const filteredSkills = activeCategory === 'all' 
    ? skills 
    : skills.filter(skill => skill.category === activeCategory);

  const categories = ['all', 'frontend', 'backend', 'database', 'tools'];

  return (
    <div className="w-full">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-8"
      >
        <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-[#fff] to-[#e0e7ff] bg-clip-text text-transparent">
          Conhecimentos Técnicos
        </h3>
        <p className="text-gray-300 text-lg">
          Tecnologias e ferramentas que domino para criar soluções incríveis
        </p>
      </motion.div>

      {/* Filtros de Categoria */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="flex flex-wrap justify-center gap-2 mb-8"
      >
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
              activeCategory === category
                ? 'bg-[#6366f1] text-white shadow-lg'
                : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 hover:text-white'
            }`}
          >
            {category === 'all' ? 'Todas' : categoryLabels[category as keyof typeof categoryLabels]}
          </button>
        ))}
      </motion.div>

      {/* Grid de Skills */}
      <motion.div
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
      >
        {filteredSkills.map((skill, index) => (
          <SkillBar key={skill.name} skill={skill} index={index} />
        ))}
      </motion.div>

      {/* Estatísticas Resumidas */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4"
      >
        {Object.entries(categoryLabels).map(([key, label]) => {
          const categorySkills = skills.filter(skill => skill.category === key);
          const avgLevel = Math.round(
            categorySkills.reduce((acc, skill) => acc + skill.level, 0) / categorySkills.length
          );

          return (
            <div key={key} className="bg-gray-800/30 rounded-lg p-4 text-center border border-gray-700/50">
              <div className="text-2xl font-bold text-[#6366f1] mb-1">{avgLevel}%</div>
              <div className="text-sm text-gray-300">{label}</div>
              <div className="text-xs text-gray-400">{categorySkills.length} skills</div>
            </div>
          );
        })}
      </motion.div>
    </div>
  );
};

export default SkillsChart;