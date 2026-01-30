import React, { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaDownload,
  FaInstagram,
  FaReact,
  FaNodeJs,
  FaDocker,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiSpringboot,
  SiJavascript,
  SiMysql,
  SiPostgresql,
  SiMongodb,
} from "react-icons/si";
import { ReactTyped } from "react-typed";
import profileImg from "../assets/muskanphoto1.jpeg";

// ---------- Smooth Typed Component ----------
const SmoothTyped = React.memo(() => {
  return (
    <ReactTyped
      strings={[
        "Full Stack Developer 💻",
        "Software Engineer 🚀",
        "MCA Candidate 🎓",
        "Tech Enthusiast ✨",
      ]}
      typeSpeed={45}
      backSpeed={25}
      loop
      showCursor={true}
      cursorChar="|"
    />
  );
});
SmoothTyped.displayName = "SmoothTyped";

// ---------- Types ----------
type TechStackItem = {
  name: string;
  icon: React.ReactNode;
};

type FloatingIcon = {
  icon: React.ReactNode;
  size: string;
};

const Home: React.FC = () => {
  const [isProfileOpen, setProfileOpen] = useState(false);

  // Framer Motion Variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  // Tech stack list
  const techStack: TechStackItem[] = [
    { name: "React", icon: <FaReact className="text-cyan-400" /> },
    { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
    { name: "TailwindCSS", icon: <SiTailwindcss className="text-sky-400" /> },
    { name: "Spring Boot", icon: <SiSpringboot className="text-green-600" /> },
    { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
    { name: "GitHub", icon: <FaGithub className="text-gray-200" /> },
    { name: "MySQL", icon: <SiMysql className="text-blue-400" /> },
    { name: "PostgreSQL", icon: <SiPostgresql className="text-sky-500" /> },
    { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
    { name: "Docker", icon: <FaDocker className="text-blue-500" /> },
  ];

  // Floating icons
  const floatingIcons: FloatingIcon[] = [
    { icon: <FaReact className="text-cyan-400 text-2xl" />, size: "w-6 h-6" },
    { icon: <FaNodeJs className="text-green-500 text-2xl" />, size: "w-6 h-6" },
    { icon: <SiJavascript className="text-yellow-400 text-2xl" />, size: "w-6 h-6" },
    { icon: <FaDocker className="text-blue-500 text-2xl" />, size: "w-6 h-6" },
    { icon: <SiMongodb className="text-green-500 text-2xl" />, size: "w-6 h-6" },
    { icon: <SiPostgresql className="text-sky-500 text-2xl" />, size: "w-6 h-6" },
    { icon: <FaGithub className="text-gray-200 text-2xl" />, size: "w-6 h-6" },
  ];

  // Background elements (memoized for smooth rendering)
  const bgBlobs = useMemo(() => Array.from({ length: 6 }), []);
  const bgParticles = useMemo(() => Array.from({ length: 40 }), []);

  return (
    <section className="relative min-h-screen w-full flex flex-col items-center justify-center px-4 pt-24 sm:pt-28 md:pt-32 lg:pt-36 pb-16 font-sans overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* ---------- Animated Glowing Background ---------- */}
      <div className="absolute inset-0 overflow-hidden z-0">
        {/* Glowing Gradient Blobs */}
        {bgBlobs.map((_, i) => (
          <motion.div
            key={`blob-${i}`}
            className="absolute rounded-full mix-blend-multiply filter blur-3xl opacity-50"
            style={{
              width: `${220 + Math.random() * 150}px`,
              height: `${220 + Math.random() * 150}px`,
              top: `${Math.random() * 80}%`,
              left: `${Math.random() * 80}%`,
              background: `radial-gradient(circle, ${
                ["#facc15", "#0ea5e9", "#a855f7", "#f472b6"][i % 4]
              }, transparent 70%)`,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, 25, 0],
              opacity: [0.4, 0.6, 0.4],
              scale: [1, 1.25, 1],
            }}
            transition={{
              duration: 18 + Math.random() * 8,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i,
            }}
          />
        ))}

        {/* Twinkling Particles */}
        {bgParticles.map((_, i) => {
          const size = Math.random() * 5 + 1;
          const colors = [
            "bg-cyan-400/50",
            "bg-purple-400/50",
            "bg-yellow-400/50",
            "bg-pink-400/50",
            "bg-teal-400/50",
          ];
          const color = colors[Math.floor(Math.random() * colors.length)];
          return (
            <motion.div
              key={`particle-${i}`}
              className={`absolute rounded-full ${color} blur-sm`}
              style={{
                width: `${size}px`,
                height: `${size}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -80, 0],
                x: [0, 15, 0],
                opacity: [0, 1, 0.3, 1, 0],
                scale: [0.6, 1, 0.6],
              }}
              transition={{
                duration: 7 + Math.random() * 3,
                repeat: Infinity,
                delay: Math.random() * 3,
                ease: "easeInOut",
              }}
            />
          );
        })}

        {/* Floating Tech Icons */}
        {floatingIcons.map((tech, i) => (
          <motion.div
            key={`tech-${i}`}
            className="absolute flex items-center justify-center"
            style={{
              top: `${15 + (i * 12) % 70}%`,
              left: `${10 + (i * 15) % 80}%`,
            }}
            animate={{
              y: [0, -25, 0, 25, 0],
              x: [0, 15, 0, -15, 0],
              rotate: [0, 5, 0, -5, 0],
            }}
            transition={{
              duration: 6 + i * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            {tech.icon}
          </motion.div>
        ))}
      </div>

      {/* ---------- Main Content ---------- */}
      <motion.div
        className="max-w-4xl w-full text-center relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        <div className="p-8 rounded-3xl shadow-2xl">
          {/* Profile Image */}
          <motion.div
            className="inline-block rounded-full p-[5px] bg-gradient-to-tr from-emerald-700 via-teal-600 to-cyan-700 shadow-lg cursor-pointer"
            whileHover={{ scale: 1.08, rotate: 2 }}
            animate={{ y: [0, -8, 0] }}
            transition={{ repeat: Infinity, duration: 4 }}
            variants={itemVariants}
            onClick={() => setProfileOpen(true)}
          >
            <img
              src={profileImg}
              alt="Muskan Mujawar"
              className="w-36 sm:w-44 md:w-52 lg:w-56 h-36 sm:h-44 md:h-52 lg:h-56 rounded-full object-cover border-4 border-white shadow-xl"
            />
          </motion.div>

          {/* Profile Modal */}
          {isProfileOpen && (
            <motion.div
              className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setProfileOpen(false)}
            >
              <motion.img
                src={profileImg}
                alt="Muskan Mujawar Large"
                className="rounded-2xl object-cover w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl shadow-2xl border-4 border-white"
                initial={{ scale: 0.5 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                onClick={(e) => e.stopPropagation()}
              />
            </motion.div>
          )}

          {/* Name */}
          <motion.h1
            className="mt-4 text-2xl sm:text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-pink-400 to-purple-400 animate-pulse"
            style={{ fontFamily: "'Poppins', sans-serif" }}
            variants={itemVariants}
          >
            Muskan Mujawar
          </motion.h1>

          {/* Typed Animation */}
          <motion.div
            className="mt-2 text-sm sm:text-lg md:text-xl font-medium text-white relative"
            variants={itemVariants}
          >
            <SmoothTyped />
          </motion.div>

          {/* Description */}
          <motion.p
            className="mt-4 max-w-2xl mx-auto text-xs sm:text-base text-gray-200 leading-relaxed px-2"
            variants={itemVariants}
          >
            Crafting seamless digital experiences from concept to deployment.
            Focused on clean code, scalable systems, and user-centric design —
            building applications that truly make a difference.
          </motion.p>

          {/* Social Links */}
          <motion.div
            className="mt-6 flex justify-center gap-5 text-xl sm:text-2xl text-teal-200"
            variants={itemVariants}
          >
            {[
              { icon: <FaGithub />, link: "https://github.com/muskan331" },
              {
                icon: <FaLinkedin />,
                link: "https://www.linkedin.com/in/muskan-mujawar-5723342bb/",
              },
              { icon: <FaTwitter />, link: "https://twitter.com/" },
              {
                icon: <FaInstagram />,
                link: "https://www.instagram.com/muskan_m7.14/",
              },
            ].map((social, i) => (
              <motion.a
                key={i}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-yellow-400 transition p-2 rounded-full bg-slate-700/50 hover:bg-slate-700/80"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                {social.icon}
              </motion.a>
            ))}
          </motion.div>

          {/* Buttons */}
          <motion.div
            className="mt-8 flex flex-col sm:flex-row justify-center items-center gap-4"
            variants={itemVariants}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                to="/projects"
                className="px-6 py-2.5 bg-gradient-to-r from-blue-600 to-indigo-700 text-white rounded-lg shadow-lg hover:shadow-xl transition-all flex items-center gap-2 border border-blue-500/30"
              >
                🔧 View My Projects
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <a
                href="/updatedResume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2.5 bg-gradient-to-r from-teal-500 to-emerald-600 text-white rounded-lg shadow-lg hover:shadow-xl transition-all flex items-center gap-2 border border-teal-400/30"
              >
                <FaDownload /> My Resume
              </a>
            </motion.div>
          </motion.div>

          {/* Tech Stack */}
          <motion.div
            className="mt-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <h3 className="text-2xl font-bold mb-6 text-white">Tech Stack</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {techStack.map((tech, index) => (
                <motion.span
                  key={tech.name}
                  className="px-3 py-1.5 text-xs sm:text-sm bg-gradient-to-r from-slate-800/80 to-slate-900/80 backdrop-blur-md border border-slate-600/40 rounded-full shadow-md hover:shadow-lg cursor-pointer text-white flex items-center gap-2"
                  whileHover={{
                    scale: 1.1,
                    backgroundColor: "#facc15",
                    color: "#000",
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 200,
                    delay: index * 0.05,
                  }}
                >
                  {tech.icon} {tech.name}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Home;
