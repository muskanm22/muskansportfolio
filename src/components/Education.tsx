import React from "react";
import {
  GraduationCap,
  Percent,
  CircleDot,
  Laptop,
  BookOpenCheck,
  School,
  Pencil,
  University,
} from "lucide-react";
import { motion } from "framer-motion";

interface EducationItem {
  degree: string;
  institute: string;
  university: string;
  year: string;
  score?: string;
  cgpa?: string;
  icon: React.ReactNode;
}

const Education: React.FC = () => {
  const education: EducationItem[] = [
    {
      degree: "MCA",
      institute: "D.Y. Patil Agriculture & Technical University, Talsande",
      university: "D.Y. Patil University, Pune",
      year: "2023 – Present",
      score: "-",
      cgpa: "-",
      icon: <Laptop className="text-teal-400" size={28} />,
    },
    {
      degree: "B.Sc (Computer Science)",
      institute: "Dr. Patangrao Kadam Arts, Science & Commerce College, Sangli",
      university: "Shivaji University, Kolhapur",
      year: "2021 – 2023",
      score: "77.72%",
      cgpa: "8.64",
      icon: <BookOpenCheck className="text-purple-400" size={28} />,
    },
    {
      degree: "HSC",
      institute: "Dr. Patangrao Kadam Arts, Science & Commerce College, Sangli",
      university: "Maharashtra State Board (MSBSHSE)",
      year: "2019 – 2020",
      score: "61.23%",
      icon: <School className="text-teal-300" size={28} />,
    },
    {
      degree: "SSC",
      institute: "Vilarasao Shinde HighSchool, Ashta",
      university: "Maharashtra State Board (MSBSHSE)",
      year: "2017 – 2018",
      score: "76.80%",
      icon: <Pencil className="text-purple-300" size={28} />,
    },
  ];

  return (
    <section className="relative w-full min-h-screen px-4 pt-28 pb-20 overflow-hidden bg-slate-950">
      {/* ---------- Smooth Dynamic Aurora Background ---------- */}
      <div className="absolute inset-0 -z-20 overflow-hidden">
        <motion.div
          className="absolute inset-0 opacity-60 scale-105"
          animate={{
            backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            scale: [1.05, 1.1, 1.05],
          }}
          transition={{
            repeat: Infinity,
            duration: 40,
            ease: "easeInOut",
          }}
          style={{
            background:
              "linear-gradient(130deg, rgba(14,165,233,0.3), rgba(168,85,247,0.3), rgba(236,72,153,0.3), rgba(20,184,166,0.3))",
            backgroundSize: "400% 400%",
            willChange: "background-position, transform",
          }}
        />

        {/* Floating blurred glow layers (zoom + fade animation) */}
        <motion.div
          className="absolute w-[30rem] h-[30rem] bg-purple-500 rounded-full mix-blend-screen filter blur-3xl opacity-25 -top-20 -left-20"
          animate={{
            scale: [1, 1.2, 1],
            y: [0, -40, 0],
            opacity: [0.25, 0.35, 0.25],
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute w-[32rem] h-[32rem] bg-teal-400 rounded-full mix-blend-screen filter blur-3xl opacity-25 bottom-20 right-20"
          animate={{
            scale: [1, 1.15, 1],
            y: [0, 40, 0],
            opacity: [0.25, 0.35, 0.25],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute w-[28rem] h-[28rem] bg-pink-500 rounded-full mix-blend-screen filter blur-3xl opacity-20 top-1/3 left-1/2"
          animate={{
            scale: [1, 1.25, 1],
            x: [0, 30, 0],
            opacity: [0.2, 0.35, 0.2],
          }}
          transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* ---------- Title Section ---------- */}
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="relative flex justify-center mb-10 md:mb-12">
          <motion.div
            className="absolute w-72 h-28 bg-purple-500 rounded-2xl filter blur-3xl opacity-40"
            animate={{ x: [-30, 30, -30], scale: [1, 1.05, 1] }}
            transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute w-64 h-24 bg-teal-400 rounded-2xl filter blur-3xl opacity-40"
            animate={{ x: [30, -30, 30], scale: [1, 1.05, 1] }}
            transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
          />

          <motion.h2
            className="relative flex items-center text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-pink-400 to-purple-400 text-center z-10"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <GraduationCap className="text-indigo-400 mr-3" size={36} />
            Education
          </motion.h2>
        </div>

        <p className="text-center text-gray-300 text-sm sm:text-base mb-16 px-2">
          A snapshot of my academic journey, highlighting degrees, institutions,
          and achievements over the years.
        </p>

        {/* ---------- Education Cards ---------- */}
        <div className="flex flex-col gap-16">
          {education.map((edu, idx) => (
            <motion.div
              key={idx}
              className="relative overflow-hidden bg-white/10 border-l-4 border-indigo-500 rounded-2xl shadow-lg p-8 flex flex-col gap-6 min-h-[200px] md:min-h-[220px] lg:min-h-[240px] backdrop-blur-md hover:shadow-xl hover:bg-white/20 transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              whileHover={{
                y: -5,
                transition: { duration: 0.2 },
              }}
            >
              {/* Moving gradient overlay */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-400 to-yellow-400 opacity-10 md:opacity-20 blur-xl"
                animate={{ x: ["-40%", "40%", "-40%"] }}
                transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
              />

              <div className="relative z-10 flex flex-col justify-between h-full">
                <div className="flex items-start gap-4">
                  <div className="bg-indigo-100 p-3 rounded-full border border-indigo-300 flex-shrink-0">
                    {edu.icon}
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-lg md:text-xl font-semibold text-white">
                      {edu.degree}
                    </h3>
                    <p className="text-sm md:text-base text-gray-200">
                      {edu.institute}
                    </p>
                    <p className="text-xs text-gray-400">{edu.year}</p>
                  </div>
                </div>

                <div className="flex flex-wrap items-center text-sm text-gray-200 mt-4">
                  <University
                    size={16}
                    className="mr-2 text-teal-400 flex-shrink-0"
                  />
                  <span className="font-medium mr-2">Affiliated to:</span>
                  <span className="flex-1 min-w-0">{edu.university}</span>
                </div>

                <div className="mt-3 space-y-1">
                  {edu.score && (
                    <p className="flex items-center text-sm text-gray-200">
                      <Percent
                        size={16}
                        className="mr-2 text-teal-400 flex-shrink-0"
                      />
                      <span className="font-medium">Percentage:</span>
                      <span className="ml-1">{edu.score}</span>
                    </p>
                  )}
                  {edu.cgpa && (
                    <p className="flex items-center text-sm text-gray-200">
                      <CircleDot
                        size={16}
                        className="mr-2 text-purple-400 flex-shrink-0"
                      />
                      <span className="font-medium">CGPA:</span>
                      <span className="ml-1">{edu.cgpa}</span>
                    </p>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
