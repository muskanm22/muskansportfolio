import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { BrainCircuit, Code, Server, Database, Settings, Languages } from 'lucide-react';
import { FaReact, FaHtml5, FaCss3Alt,  FaJava,  FaPython, FaGitAlt, FaGithub, FaFigma } from 'react-icons/fa';
import { SiJavascript, SiTailwindcss, SiSpring, SiExpress, SiMysql, SiPostgresql,  SiSwagger, SiPostman, SiIntellijidea} from 'react-icons/si';
import { VscVscode } from 'react-icons/vsc';

// Define types
type SkillCategory = 'all' | 'frontend' | 'backend' | 'database' | 'tools';

interface Category {
  id: SkillCategory;
  name: string;
  icon: React.ReactNode;
}

interface Skill {
  name: string;
  description: string;
  icon: React.ReactNode;
}

interface SkillsData {
  frontend: Skill[];
  backend: Skill[];
  database: Skill[];
  tools: Skill[];
}

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState<SkillCategory>('all');

  const categories: Category[] = [
    { id: 'all', name: 'All Skills', icon: <BrainCircuit size={20} /> },
    { id: 'frontend', name: 'Frontend', icon: <Code size={20} /> },
    { id: 'backend', name: 'Backend', icon: <Server size={20} /> },
    { id: 'database', name: 'Database', icon: <Database size={20} /> },
    { id: 'tools', name: 'Tools & DevOps', icon: <Settings size={20} /> },
  ];

  const skillsData: SkillsData = {
    frontend: [
      { name: 'React.js', description: 'Building responsive SPAs with React Hooks, Redux, Next.js, Router', icon: <FaReact className="text-cyan-400" /> },
      { name: 'JavaScript', description: 'Modern ES6+ development with async/await, TypeScript, DOM API', icon: <SiJavascript className="text-yellow-400" /> },
      { name: 'HTML5', description: 'Semantic and accessible web structures, SEO, Alt, Forms', icon: <FaHtml5 className="text-orange-500" /> },
      { name: 'CSS3', description: 'Modern layouts and animations, Flexbox, Grid, SASS', icon: <FaCss3Alt className="text-blue-500" /> },
      { name: 'Tailwind', description: 'Utility-first CSS framework, PostCSS, Design UI', icon: <SiTailwindcss className="text-sky-400" /> },

    ],
    backend: [
      { name: 'Java', description: 'Object-oriented programming, Spring ecosystem', icon: <FaJava className="text-red-500" /> },
      { name: 'Spring', description: 'Enterprise application framework, Boot, MVC', icon: <SiSpring className="text-green-500" /> },
      { name: 'Express.js', description: 'Web application framework for Node.js', icon: <SiExpress className="text-gray-300" /> },
      { name: 'REST API', description: 'Designing and building RESTful services', icon: <Server className="text-blue-400" size={20} /> },
      { name: 'Python', description: 'Scripting, automation, and backend development', icon: <FaPython className="text-blue-400" /> },
    ],
    database: [
      { name: 'MySQL', description: 'Relational database management', icon: <SiMysql className="text-blue-400" /> },
      { name: 'PostgreSQL', description: 'Advanced open-source relational database', icon: <SiPostgresql className="text-sky-600" /> },
    ],
    tools: [
      { name: 'Git', description: 'Version control system', icon: <FaGitAlt className="text-orange-500" /> },
      { name: 'GitHub', description: 'Code hosting platform for collaboration', icon: <FaGithub className="text-gray-200" /> },
      { name: 'Figma', description: 'UI/UX design and prototyping tool', icon: <FaFigma className="text-pink-500" /> },
      { name: 'VS Code', description: 'Source code editor', icon: <VscVscode className="text-blue-500" /> },
      { name: 'Swagger', description: 'API documentation and testing', icon: <SiSwagger className="text-green-500" /> },
      { name: 'Postman', description: 'API development and testing environment', icon: <SiPostman className="text-orange-400" /> },
      { name: 'IntelliJ', description: 'Powerful Java IDE for development', icon: <SiIntellijidea className="text-purple-400" /> },
    ],
  };

  const coreStrengths: string[] = [
    "Good Listener with strong communication skills",
    "Leadership qualities & discipline",
    "Challenge‑oriented and quick learner",
    "Analytical & logical thinker with excellent decision-making",
    "Adaptable across varied work environments"
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } }
  };

  // Combine all skills for 'all' category
  const allSkills: Skill[] = Object.values(skillsData).flat();

  return (
    <section id="skills" className="relative w-full px-4 py-16 md:py-24 overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-gradient-to-r from-teal-500/10 to-purple-500/10"
            style={{
              width: Math.random() * 200 + 50,
              height: Math.random() * 200 + 50,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, Math.random() * 20 - 10, 0],
              x: [0, Math.random() * 20 - 10, 0],
              rotate: [0, Math.random() * 360],
              scale: [1, 1 + Math.random() * 0.3, 1],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Heading */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16 mt-10"  
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 flex items-center justify-center gap-3">
            <BrainCircuit size={32} className="text-teal-400" />
            Skills & Expertise
          </h2>
          <p className="text-slate-300 max-w-2xl mx-auto">
            A comprehensive overview of my technical skills and core strengths that I bring to every project
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-10">
          {/* Skills Categories & Content */}
          <div className="w-full lg:w-2/3">
            {/* Category Filters */}
            <motion.div 
              className="flex flex-wrap justify-center gap-3 mb-10"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
            >
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    activeCategory === category.id 
                      ? 'bg-teal-600 text-white shadow-lg shadow-teal-500/50' 
                      : 'bg-slate-700 text-slate-300 hover:bg-slate-600 hover:shadow-md hover:shadow-teal-400/40'
                  }`}
                >
                  {category.icon}
                  {category.name}
                </button>
              ))}
            </motion.div>

            {/* Skills Sections */}
            {activeCategory === 'all' && (
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
              >
                {allSkills.map((skill, index) => (
                  <motion.div
                    key={`${skill.name}-${index}`}
                    variants={itemVariants}
                    className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-5 border border-slate-700 hover:border-teal-400/70 transition-all duration-500 hover:shadow-xl hover:shadow-teal-400/40 cursor-pointer"
                  >
                    <div className="flex items-center gap-4 mb-3">
                      <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-teal-500/10">
                        {skill.icon}
                      </div>
                      <h3 className="text-lg font-semibold text-white">{skill.name}</h3>
                    </div>
                    <p className="text-slate-400 text-sm">{skill.description}</p>
                  </motion.div>
                ))}
              </motion.div>
            )}

            {activeCategory !== 'all' && (
              <motion.div
                key={activeCategory} // key to re-trigger animation on category change
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
              >
                {skillsData[activeCategory].map((skill, index) => (
                  <motion.div
                    key={`${skill.name}-${index}`}
                    variants={itemVariants}
                    className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-5 border border-slate-700 hover:border-teal-400/70 transition-all duration-500 hover:shadow-xl hover:shadow-teal-400/40 cursor-pointer"
                  >
                    <div className="flex items-center gap-4 mb-3">
                      <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-teal-500/10">
                        {skill.icon}
                      </div>
                      <h3 className="text-lg font-semibold text-white">{skill.name}</h3>
                    </div>
                    <p className="text-slate-400 text-sm">{skill.description}</p>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </div>

          {/* Core Strengths */}
          <div className="w-full lg:w-1/3">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-6 border border-slate-700 h-full"
            >
              <h3 className="text-2xl font-semibold text-white mb-6 flex items-center gap-2">
                <BrainCircuit className="text-yellow-400" size={24} />
                Core Strengths
              </h3>
              
              <motion.ul className="space-y-4">
                {coreStrengths.map((strength, index) => (
                  <motion.li 
                    key={index}
                    initial={{ opacity: 0, x: 10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 + 0.5 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-3 text-slate-300"
                  >
                    <div className="w-2 h-2 rounded-full bg-teal-400 mt-2 flex-shrink-0"></div>
                    <span>{strength}</span>
                  </motion.li>
                ))}
              </motion.ul>

              {/* Languages */}
              <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 1 }}
                viewport={{ once: true }}
                className="mt-8 pt-6 border-t border-slate-700"
              >
                <h4 className="text-lg font-medium text-white mb-3 flex items-center gap-2">
                  <Languages className="text-purple-400" size={20} />
                  Languages
                </h4>
                <div className="flex flex-wrap gap-2">
                  {['Hindi', 'English', 'Urdu', 'Marathi'].map((lang) => (
                    <span key={lang} className="px-3 py-1 bg-slate-700/50 rounded-full text-sm text-slate-300">
                      {lang}
                    </span>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
