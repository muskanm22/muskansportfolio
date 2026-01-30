import React from 'react';
import { MapPin, Phone, Mail, Linkedin, Instagram } from 'lucide-react';
import { motion } from 'framer-motion';
import bgImage from '../assets/muskanimg3.jpeg';

const Contact: React.FC = () => {
  const spotsYellow = Array.from({ length: 12 });
  const spotsPink = Array.from({ length: 12 });
  const networkLines = Array.from({ length: 8 });

  const randomPosition = () => ({
    top: `${Math.random() * 100}%`,
    left: `${Math.random() * 100}%`,
  });

  return (
    <section className="relative w-full min-h-screen flex flex-col justify-center px-6 py-32 sm:py-40 overflow-hidden">
      {/* ---------- Full Background Image ---------- */}
      <div className="absolute inset-0 w-full h-full z-0">
        <img
          src={bgImage}
          alt="Background"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/50" /> {/* Dark overlay for readability */}
      </div>

      {/* ---------- Animated Spots & Lines ---------- */}
      {spotsYellow.map((_, i) => (
        <motion.div
          key={`yellow-${i}`}
          className="absolute w-[3px] sm:w-[5px] md:w-[6px] h-[3px] sm:h-[5px] md:h-[6px] rounded-full bg-yellow-400 opacity-70 blur-sm"
          style={randomPosition()}
          animate={{ y: [0, -10, 0], x: [0, 5, -5, 0], scale: [0.7, 1.2, 0.7], opacity: [0.5, 1, 0.5] }}
          transition={{ repeat: Infinity, duration: 6 + Math.random() * 2, ease: 'easeInOut', delay: Math.random() * 2 }}
        />
      ))}
      {spotsPink.map((_, i) => (
        <motion.div
          key={`pink-${i}`}
          className="absolute w-[3px] sm:w-[5px] md:w-[6px] h-[3px] sm:h-[5px] md:h-[6px] rounded-full bg-pink-400 opacity-60 blur-sm"
          style={randomPosition()}
          animate={{ y: [0, -8, 0], x: [0, -5, 5, 0], scale: [0.8, 1.2, 0.8], opacity: [0.4, 0.8, 0.4] }}
          transition={{ repeat: Infinity, duration: 5 + Math.random() * 2, ease: 'easeInOut', delay: Math.random() * 2 }}
        />
      ))}
      {networkLines.map((_, i) => (
        <motion.div
          key={`line-${i}`}
          className="absolute w-[1px] sm:w-[1px] md:w-[2px] h-24 sm:h-32 md:h-36 bg-white/10"
          style={randomPosition()}
          animate={{ y: [0, 15, 0], opacity: [0.2, 0.7, 0.2] }}
          transition={{ repeat: Infinity, duration: 8 + i, ease: 'easeInOut', delay: i * 0.3 }}
        />
      ))}

      {/* ---------- Main Content ---------- */}
      <div className="relative z-10 max-w-4xl mx-auto text-gray-100 flex flex-col gap-10 sm:gap-16">
        <motion.h1
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-center bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-pink-400 to-purple-400"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
        >
          Let’s Build Something Amazing Together!
        </motion.h1>

        <motion.p
          className="text-center text-base sm:text-lg md:text-xl lg:text-2xl max-w-2xl mx-auto tracking-wide"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.5, ease: 'easeOut', delay: 0.4 }}
        >
          Reach out via phone, email, or social media. Excited to collaborate on innovative projects!
        </motion.p>

        {/* ---------- Contact Grid ---------- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 px-2 sm:px-0">
          <ul className="space-y-5 sm:space-y-6 text-base sm:text-lg md:text-xl w-full">
            <li className="flex flex-col sm:flex-row items-start sm:items-center gap-3 w-full">
              <MapPin className="text-indigo-400" size={24} />
              <span className="break-words w-full"><strong>Location:</strong> A/P Ashta, Maharashtra, PIN-416301</span>
            </li>
            <li className="flex flex-col sm:flex-row items-start sm:items-center gap-3 w-full">
              <Phone className="text-indigo-400" size={24} />
              <span className="break-words w-full">
                <strong>Phone:</strong>{' '}
                <a href="tel:+919156070412" className="text-blue-400 hover:underline hover:text-yellow-400">
                  +91 9156070412
                </a>
              </span>
            </li>
            <li className="flex flex-col sm:flex-row items-start sm:items-center gap-3 w-full">
              <Mail className="text-indigo-400" size={24} />
              <span className="break-words w-full">
                <strong>Email:</strong>{' '}
                <a href="mailto:muskanmujawar995@gmail.com" className="text-blue-400 hover:underline hover:text-yellow-400">
                  muskanmujawar995@gmail.com
                </a>
              </span>
            </li>
            <li className="flex flex-col sm:flex-row items-start sm:items-center gap-3 w-full">
              <Linkedin className="text-indigo-400" size={24} />
              <span className="break-words w-full">
                <strong>LinkedIn:</strong>{' '}
                <a href="https://www.linkedin.com/in/muskan-mujawar-5723342bb/" target="_blank" rel="noreferrer" className="text-blue-400 hover:underline hover:text-yellow-400">
                  muskan-mujawar
                </a>
              </span>
            </li>
            <li className="flex flex-col sm:flex-row items-start sm:items-center gap-3 w-full">
              <Instagram className="text-indigo-400" size={24} />
              <span className="break-words w-full">
                <strong>Instagram:</strong>{' '}
                <a href="https://www.instagram.com/muskan_m7.14/" target="_blank" rel="noreferrer" className="text-pink-400 hover:underline hover:text-yellow-400">
                  @muskan_m7.14
                </a>
              </span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Contact;
