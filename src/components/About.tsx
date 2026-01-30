import React from "react";
import { motion, type Variants } from "framer-motion";
import { UserCheck, BookOpenCheck, Code2, Lightbulb } from "lucide-react";

// ✅ Type definitions
interface NeonBlobProps {
  top: string;
  left: string;
  size: string;
  color: string;
  duration: number;
  yRange: number[];
  xRange: number[];
}

interface Quality {
  icon: React.ReactNode;
  text: string;
}

interface Stat {
  count: string;
  label: string;
}

// ✅ Floating Neon Blob Component
const NeonBlob: React.FC<NeonBlobProps> = ({
  top,
  left,
  size,
  color,
  duration,
  yRange,
  xRange,
}) => {
  return (
    <motion.div
      className={`absolute rounded-full ${color} filter blur-3xl opacity-70`}
      style={{ width: size, height: size, top, left }}
      animate={{
        y: yRange,
        x: xRange,
        scale: [1, 1.4, 1],
        rotate: [0, 25, 0],
      }}
      transition={{ repeat: Infinity, duration, ease: "easeInOut" }}
    />
  );
};

const About: React.FC = () => {
  const spotVariants: Variants = {
    animate: {
      y: [0, -15, 0],
      x: [0, 15, -15, 0],
      opacity: [0.3, 1, 0.3],
      scale: [0.7, 1.4, 0.7],
      transition: { repeat: Infinity, duration: 6, ease: "easeInOut" },
    },
  };

  const spots = Array.from({ length: 18 });

  const qualities: Quality[] = [
    {
      icon: <UserCheck size={30} className="text-indigo-400 mt-1" />,
      text: "Passionate Software Engineer pursuing MCA.",
    },
    {
      icon: <BookOpenCheck size={30} className="text-purple-400 mt-1" />,
      text: "Always learning & exploring modern technologies.",
    },
    {
      icon: <Code2 size={30} className="text-fuchsia-400 mt-1" />,
      text: "Writing clean, scalable code & managing projects end-to-end.",
    },
    {
      icon: <Lightbulb size={30} className="text-yellow-400 mt-1" />,
      text: "Problem solver adaptable to dynamic environments.",
    },
  ];

  const stats: Stat[] = [
    { count: "10+", label: "Completed Projects" },
    { count: "95%", label: "Client Satisfaction" },
    { count: "1+ Yr", label: "Experience" },
  ];

  return (
    <section className="relative w-full px-4 sm:px-6 pt-32 sm:pt-36 md:pt-40 pb-16 sm:pb-20 md:pb-28 font-sans overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* ✅ Neon Blobs */}
      <NeonBlob
        top="8%"
        left="8%"
        size="16rem"
        color="bg-purple-400"
        duration={12}
        yRange={[0, -40, 0]}
        xRange={[0, 30, 0]}
      />
      <NeonBlob
        top="65%"
        left="75%"
        size="20rem"
        color="bg-teal-400"
        duration={14}
        yRange={[0, 40, 0]}
        xRange={[0, -35, 0]}
      />
      <NeonBlob
        top="30%"
        left="50%"
        size="14rem"
        color="bg-pink-400"
        duration={10}
        yRange={[0, -30, 0]}
        xRange={[0, 25, 0]}
      />

      {/* ✅ Floating Spots */}
      {spots.map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 rounded-full bg-yellow-400 opacity-90 blur-sm"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          variants={spotVariants}
          animate="animate"
        />
      ))}

      <div className="max-w-5xl mx-auto relative z-10">
        {/* HEADER */}
        <motion.h2
          className="text-3xl sm:text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-white to-purple-900 mb-3 flex items-center gap-3 justify-center text-center"
          initial={{ opacity: 0, y: -25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          About Me
        </motion.h2>

        {/* Short Caption */}
        <motion.p
          className="text-center text-xs sm:text-sm md:text-base italic font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-pink-400 to-purple-400 mb-12"
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Crafting Ideas ✦ Building Futures
        </motion.p>

        <div className="flex flex-col gap-8">
          {/* About Text */}
          <motion.p
            className="text-gray-100 text-sm sm:text-base md:text-lg leading-relaxed text-center"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            I am a dedicated software engineer with a strong academic
            background and hands-on experience in building applications from
            scratch. My journey began with a deep curiosity for how technology
            works, which soon transformed into a passion for solving problems
            through coding. Over time, I have worked on diverse projects,
            ranging from small-scale applications to scalable solutions.
            <br />
            <br />
            My vision is to continuously learn and adapt to new technologies
            while creating impactful digital experiences. Whether it's crafting
            user-friendly interfaces, optimizing backend performance, or
            ensuring seamless deployment, I thrive on challenges that push my
            creativity and skills to the next level.
          </motion.p>

          {/* Qualities */}
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {qualities.map((item, i) => (
              <motion.li
                key={i}
                className="flex items-start gap-3 p-4 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 shadow-md cursor-default hover:shadow-pink-400/40"
                whileHover={{
                  x: 6,
                  rotate: [0, 3, -3, 0],
                  scale: 1.05,
                }}
                transition={{ type: "tween", duration: 0.6 }}
              >
                {item.icon}
                <span className="text-gray-100 text-sm sm:text-base">
                  {item.text}
                </span>
              </motion.li>
            ))}
          </ul>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mt-6 text-center">
            {stats.map((item, i) => (
              <motion.div
                key={i}
                className="p-5 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 shadow-md hover:shadow-yellow-400/40"
                whileHover={{
                  scale: 1.1,
                  y: -5,
                  rotate: [0, 3, -3, 0],
                }}
                transition={{ type: "tween", duration: 0.6 }}
              >
                <p className="text-xl sm:text-2xl md:text-3xl font-bold bg-gradient-to-r from-yellow-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
                  {item.count}
                </p>
                <p className="text-xs sm:text-sm text-gray-100 mt-1">
                  {item.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;