import React, { useState } from 'react';
import { Briefcase, Star, X, Quote, Award, ChevronLeft, ChevronRight, Download, Calendar, MapPin, ExternalLink } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import championLogo from '../assets/championXi.png';
import starsOfTechLogo from '../assets/StarSoftech (1).png';
import certificate1 from '../assets/internshipCertificate .jpeg';

const Experience: React.FC = () => {
  const [zoomLogo, setZoomLogo] = useState<string | null>(null);
  const [zoomCertificate, setZoomCertificate] = useState<string | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [certificateIndex, setCertificateIndex] = useState(0);

  // Floating decorations
  const spots = Array.from({ length: 20 });
  const wires = Array.from({ length: 8 });
  const floatingIcons = [
    { Icon: Star, top: '15%', left: '10%', size: 18, color: 'text-yellow-400' },
    { Icon: Award, top: '30%', left: '80%', size: 18, color: 'text-indigo-400' },
    { Icon: Star, top: '70%', left: '20%', size: 14, color: 'text-pink-400' },
    { Icon: Award, top: '50%', left: '60%', size: 14, color: 'text-teal-400' },
  ];

  const testimonials = [
    {
      name: 'Nikesh Bhati',
      role: 'Co-Founder & CEO at StarsOfTech',
      feedback: 'You showcased excellent teamwork and problem-solving skills during critical project phases.',
    },
    
    {
      name: 'Suhail Sayyd',
      role: 'HR Manager at ChampionXI',
      feedback: 'Working with you was a pleasure — your ability to quickly adapt and deliver quality code really stood out.',
    },
    
  ];

  const experiences = [
    {
      logo: championLogo,
      company: 'ChampionXI Games Pvt. Ltd.',
      title: 'Software Engineering Intern',
      date: 'January 2025 – June 2025',
      location: 'Remote / Live Project',
      link: 'https://championxi.com/',
      description: (
        <>
          <p><strong>ChampionXI Games Pvt. Ltd.</strong> is an emerging startup building dynamic fantasy sports platforms.</p>
          <p>Worked as a <strong>Full-Stack Developer</strong> with Spring Boot, React.js (TypeScript) & Tailwind CSS.</p>
          <p>Collaborated with designers, backend developers, QA testers in Agile workflow.</p>
          <p>Used <strong>Swagger UI</strong> & <strong>Postman</strong> for API testing/documentation.</p>
          <p>Contributed to authentication, dashboards, debugging & optimization.</p>
        </>
      ),
      keyLearnings: [
        'Developed full-stack features in real-world projects.',
        'Learned debugging, clean coding & Git collaboration.',
        'Deepened RESTful architecture & microservices knowledge.',
        'Improved communication & problem-solving in Agile teams.',
      ],
    },
    {
      logo: starsOfTechLogo,
      company: 'StarsOfTech Pvt. Ltd.',
      title: 'Software Engineering ',
      date: 'July 2025 – Continue',
      location: 'Remote / Live Project',
      link: 'https://starsoftech.com/',
      description: (
        <>
          <p><strong>StarsOfTech Pvt. Ltd.</strong> is a fast-growing IT company delivering software solutions globally.</p>
          <p>Working as a <strong>Full-Stack Developer Intern</strong>, building APIs with Spring Boot & UI with React.js (TypeScript) & Tailwind CSS.</p>
          <p>Collaborating with managers, designers, and developers in Agile workflows.</p>
          <p>Engaged in debugging, optimization, and seamless API integrations.</p>
        </>
      ),
      keyLearnings: [
        'Hands-on experience in live projects.',
        'Enhanced full-stack skills with modern technologies.',
        'Learned Agile workflows & effective collaboration.',
        'Improved debugging & problem-solving skills.',
      ],
    },
  ];

  const certificates = [
    {
      image: certificate1,
      title: 'Full Stack Development Certification',
      issuer: 'ChampionXI',
      date: 'June 2025',
      downloadUrl: '/certificates/certificate1.pdf'
    },
  ];

  const prevSlide = () => setCurrentIndex((prev) => (prev === 0 ? experiences.length - 1 : prev - 1));
  const nextSlide = () => setCurrentIndex((prev) => (prev === experiences.length - 1 ? 0 : prev + 1));
  
  const prevCertificate = () => setCertificateIndex((prev) => (prev === 0 ? certificates.length - 1 : prev - 1));
  const nextCertificate = () => setCertificateIndex((prev) => (prev === certificates.length - 1 ? 0 : prev + 1));

  const downloadCertificate = (url: string, title: string) => {
    // Create a temporary anchor element
    const link = document.createElement('a');
    link.href = url;
    link.download = `${title.replace(/\s+/g, '_')}.pdf`;
    
    // Programmatically click the link to trigger download
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="relative w-full px-4 sm:px-6 py-20 overflow-hidden rounded-2xl">
      {/* Enhanced Background with Shimmer Effect */}
      <div className="absolute inset-0 -z-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"></div>
        
        {/* Shimmering Gradient Overlay */}
        <motion.div 
          className="absolute inset-0 bg-gradient-to-r from-transparent via-indigo-400/10 to-transparent"
          animate={{
            x: ["-100%", "200%"],
          }}
          transition={{
            repeat: Infinity,
            duration: 4,
            ease: "linear"
          }}
        />
        
        {/* Subtle Grid Pattern */}
        <div className="absolute inset-0 bg-grid-white/5 bg-[size:40px_40px]"></div>
      </div>

      {/* Floating spots */}
      {spots.map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-4 h-4 rounded-full bg-yellow-400 blur-md"
          style={{ top: `${Math.random() * 100}%`, left: `${Math.random() * 100}%` }}
          animate={{ y: [0, -25, 0], x: [0, 20, -20, 0], opacity: [0.3, 0.8, 0.3], scale: [0.8, 1.3, 0.8] }}
          transition={{ repeat: Infinity, duration: 7 + Math.random() * 5, ease: 'easeInOut', delay: i * 0.3 }}
        />
      ))}

      {/* Floating icons */}
      {floatingIcons.map((item, i) => (
        <motion.div
          key={i}
          className={`absolute ${item.color} -z-10`}
          style={{ top: item.top, left: item.left }}
          animate={{ y: [0, -20, 0], rotate: [0, 15, -15, 0], scale: [1, 1.2, 1] }}
          transition={{ repeat: Infinity, duration: 8 + i, ease: 'easeInOut', delay: i }}
        >
          <item.Icon size={item.size} />
        </motion.div>
      ))}

      {/* Wires */}
      {wires.map((_, i) => (
        <motion.div
          key={i}
          className="absolute h-[1px] bg-white/10 blur-sm rounded-full"
          style={{ top: `${Math.random() * 100}%`, left: `${Math.random() * 100}%`, width: `${50 + Math.random() * 200}px` }}
          animate={{ x: [-20, 20, -20], opacity: [0.2, 0.6, 0.2] }}
          transition={{ repeat: Infinity, duration: 15 + i * 2, ease: 'easeInOut' }}
        />
      ))}

      {/* Floating blobs */}
      <motion.div
        className="absolute w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-40 -z-20"
        style={{ top: '8%', left: '8%' }}
        animate={{ y: [0, -40, 0], scale: [1, 1.25, 1] }}
        transition={{ repeat: Infinity, duration: 18, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute w-72 h-72 bg-teal-500 rounded-full mix-blend-multiply filter blur-3xl opacity-40 -z-20"
        style={{ bottom: '8%', right: '8%' }}
        animate={{ y: [0, 40, 0], scale: [1, 1.3, 1] }}
        transition={{ repeat: Infinity, duration: 20, ease: 'easeInOut' }}
      />

      {/* Header */}
      <div className="max-w-5xl mx-auto pt-6 relative z-10 flex flex-col gap-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center"
        >
          <h2 className="flex items-center justify-center text-4xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-pink-400 to-purple-400 mb-4 text-center">
            <Briefcase className="text-indigo-600 mr-3" size={28} />
            Professional Experience
          </h2>
          <p className="text-slate-300 max-w-xl mx-auto text-base md:text-lg px-4 md:px-6 leading-relaxed text-center">
            My educational background and professional journey so far
          </p>
        </motion.div>

        {/* Card Slider */}
        <div className="relative w-full flex items-center justify-center">
          <motion.button 
            onClick={prevSlide} 
            className="absolute left-0 z-20 bg-indigo-600/40 hover:bg-indigo-600/60 text-white p-3 rounded-full m-2"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronLeft size={24} />
          </motion.button>

          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="w-full sm:w-[500px] md:w-[550px] bg-white/5 border border-indigo-400 rounded-2xl shadow-lg p-6 sm:p-8 cursor-pointer text-gray-100"
            >
              {/* Glow effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-400/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
              
              <div className="flex flex-col sm:flex-row sm:items-center items-center gap-5 relative z-10">
                <motion.div
                  className="w-16 h-16 rounded-full overflow-hidden border-2 border-indigo-400 bg-white flex items-center justify-center"
                  whileHover={{ scale: 1.25, rotate: 5 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                  onClick={() => setZoomLogo(experiences[currentIndex].logo)}
                >
                  <img src={experiences[currentIndex].logo} alt={`${experiences[currentIndex].company} Logo`} className="object-cover w-full h-full" />
                </motion.div>
                <div className="flex-1 text-center sm:text-left">
                  <h3 className="text-lg sm:text-2xl font-bold text-white">{experiences[currentIndex].title}</h3>
                  <p className="text-lg font-medium text-indigo-300">{experiences[currentIndex].company}</p>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 mt-1 text-sm text-gray-200">
                    <span className="flex items-center gap-1">
                      <Calendar size={14} />
                      {experiences[currentIndex].date}
                    </span>
                    <span className="hidden sm:block">•</span>
                    <span className="flex items-center gap-1">
                      <MapPin size={14} />
                      {experiences[currentIndex].location}
                    </span>
                  </div>
                  <a
                    href={experiences[currentIndex].link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-indigo-400 mt-1 inline-flex items-center gap-1 hover:underline cursor-pointer lowercase"
                  >
                    {experiences[currentIndex].link.replace(/^https?:\/\//, '')}
                    <ExternalLink size={12} />
                  </a>
                </div>
              </div>
              <div className="mt-6 text-gray-200 text-sm sm:text-base space-y-5 leading-relaxed text-justify relative z-10">
                {experiences[currentIndex].description}
                <motion.div 
                  className="mt-5 p-4 bg-indigo-900/20 rounded-xl border border-indigo-700/30"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <p className="font-semibold text-indigo-400 flex items-center gap-2">
                    <Star size={20} className="text-yellow-400" /> Key Learnings & Growth:
                  </p>
                  <ul className="list-disc list-inside ml-4 space-y-1 mt-2">
                    {experiences[currentIndex].keyLearnings.map((item, i) => (
                      <motion.li 
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 + i * 0.1 }}
                      >
                        {item}
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              </div>
            </motion.div>
          </AnimatePresence>

          <motion.button 
            onClick={nextSlide} 
            className="absolute right-0 z-20 bg-indigo-600/40 hover:bg-indigo-600/60 text-white p-3 rounded-full m-2"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronRight size={24} />
          </motion.button>
        </div>

        {/* Dots indicator for mobile */}
        <div className="flex justify-center gap-2 mt-4 md:hidden">
          {experiences.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all ${currentIndex === index ? 'bg-indigo-400 scale-125' : 'bg-indigo-800'}`}
            />
          ))}
        </div>

        {/* Certificates Section */}
        <motion.div 
          className="mt-24 relative"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="absolute -z-10 inset-0 bg-gradient-to-tr from-indigo-900/40 via-purple-800/30 to-indigo-900/40 rounded-3xl blur-3xl"
            animate={{ opacity: [0.4, 0.8, 0.4] }}
            transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
          />
          
          <h2 className="flex items-center justify-center text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400 mb-12 text-center">
            <Award className="mr-3 text-indigo-500" /> Certificates & Achievements
          </h2>
          
          <div className="relative flex items-center justify-center">
            {certificates.length > 1 && (
              <motion.button 
                onClick={prevCertificate} 
                className="absolute left-0 z-20 bg-indigo-600/40 hover:bg-indigo-600/60 text-white p-2 rounded-full m-2"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <ChevronLeft size={20} />
              </motion.button>
            )}
            
            <div className="w-full max-w-md overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={certificateIndex}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.1 }}
                  transition={{ duration: 0.4 }}
                  className="bg-white/5 backdrop-blur rounded-2xl p-6 border border-indigo-400 overflow-hidden shadow-lg"
                >
                  <motion.div 
                    className="relative group cursor-pointer"
                    whileHover={{ y: -5 }}
                    onClick={() => setZoomCertificate(certificates[certificateIndex].image)}
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-lg flex items-end justify-center p-4">
                      <p className="text-white text-sm mb-2">Click to view full certificate</p>
                    </div>
                    <img 
                      src={certificates[certificateIndex].image} 
                      alt={certificates[certificateIndex].title}
                      className="w-full h-48 object-contain rounded-lg shadow-md bg-white"
                    />
                  </motion.div>
                  
                  <div className="mt-4 text-center">
                    <h3 className="text-xl font-bold text-white">{certificates[certificateIndex].title}</h3>
                    <p className="text-indigo-300">{certificates[certificateIndex].issuer}</p>
                    <p className="text-gray-400 text-sm mt-1">{certificates[certificateIndex].date}</p>
                    
                    <motion.button
                      className="mt-4 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-full flex items-center justify-center gap-2 mx-auto text-sm"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => downloadCertificate(certificates[certificateIndex].downloadUrl, certificates[certificateIndex].title)}
                    >
                      <Download size={16} />
                      Download Certificate
                    </motion.button>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
            
            {certificates.length > 1 && (
              <motion.button 
                onClick={nextCertificate} 
                className="absolute right-0 z-20 bg-indigo-600/40 hover:bg-indigo-600/60 text-white p-2 rounded-full m-2"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <ChevronRight size={20} />
              </motion.button>
            )}
          </div>
        </motion.div>

        {/* Testimonials */}
        <motion.div 
          className="mt-24 relative"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <motion.div
            className="absolute -z-10 inset-0 bg-gradient-to-tr from-indigo-900/40 via-purple-800/30 to-indigo-900/40 rounded-3xl blur-3xl"
            animate={{ opacity: [0.4, 0.8, 0.4] }}
            transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
          />
          <h2 className="flex items-center justify-center text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400 mb-12 text-center">
            <Quote className="mr-3 text-indigo-500" /> Testimonials
          </h2>
          <div className="grid gap-10 md:grid-cols-2">
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 60, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                whileHover={{ scale: 1.03, boxShadow: '0 15px 25px rgba(99, 102, 241, 0.3)' }}
                transition={{ duration: 0.7, ease: 'easeOut', delay: i * 0.1 }}
                className="relative bg-white/5 backdrop-blur shadow-lg rounded-2xl p-8 border border-indigo-400 overflow-hidden cursor-default text-gray-100"
              >
                <motion.div
                  className="absolute w-44 h-44 bg-gradient-to-r from-indigo-400 to-purple-500 rounded-full blur-3xl opacity-40 -top-14 -right-14"
                  animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.5, 0.3] }}
                  transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
                />
                <Quote className="absolute top-4 left-4 text-indigo-500/20" size={40} />
                <p className="text-gray-100 italic leading-relaxed relative z-10">"{t.feedback}"</p>
                <div className="mt-6 relative z-10">
                  <p className="font-semibold text-white">{t.name}</p>
                  <p className="text-sm text-gray-300">{t.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Zoom Modal for Logos */}
      <AnimatePresence>
        {zoomLogo && (
          <motion.div
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setZoomLogo(null)}
          >
            <motion.div
              className="relative max-w-lg w-full rounded-xl overflow-hidden"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              transition={{ type: "spring", damping: 25 }}
              onClick={(e) => e.stopPropagation()}
            >
              <img src={zoomLogo} alt="Zoomed Logo" className="w-full h-auto object-contain rounded-xl shadow-2xl" />
              <motion.button
                className="absolute top-3 right-3 text-white bg-black/60 rounded-full p-2 hover:bg-black/80 transition"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setZoomLogo(null)}
                aria-label="Close zoomed logo"
              >
                <X size={24} />
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Zoom Modal for Certificates */}
      <AnimatePresence>
        {zoomCertificate && (
          <motion.div
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setZoomCertificate(null)}
          >
            <motion.div
              className="relative max-w-4xl w-full max-h-full flex flex-col items-center"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 20 }}
              onClick={(e) => e.stopPropagation()}
            >
              <img 
                src={zoomCertificate} 
                alt="Zoomed Certificate" 
                className="max-w-full max-h-[70vh] object-contain rounded-lg shadow-2xl mx-auto" 
              />
              <div className="flex justify-center mt-4 gap-4 flex-wrap">
                <motion.button
                  className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-full flex items-center justify-center gap-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => downloadCertificate(certificates[certificateIndex].downloadUrl, certificates[certificateIndex].title)}
                >
                  <Download size={18} />
                  Download
                </motion.button>
                <motion.button
                  className="px-4 py-2 bg-gray-600 hover:bg-gray-700 text-white rounded-full flex items-center justify-center gap-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setZoomCertificate(null)}
                >
                  <X size={18} />
                  Close
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Experience;