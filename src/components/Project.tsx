import React, { useState, useEffect, useRef, useCallback } from "react";
import { ExternalLink, X, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import NipserIcon from "../assets/nipser.jpeg"; 
import SchoolIcon from "../assets/SMS.jpeg";
import StarsIcon from "../assets/StarSoftech (1).png";
import CrimePortalIcon from "../assets/kanun.jpg"; 

interface Project {
  name: string;
  techStack: string[];
  icon: any;
  description: string;
  points: string[];
  url?: string;
  details: string;
  images?: string[];
}

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isImageHovered, setIsImageHovered] = useState(false);
  const [centerIndex, setCenterIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  
  const sectionRef = useRef<HTMLElement | null>(null);
  const imageIntervalRef = useRef<number | null>(null);
  const sliderIntervalRef = useRef<number | null>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);

  // Optimized resize handler
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    
    let resizeTimeout: number;
    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = window.setTimeout(checkMobile, 100);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      clearTimeout(resizeTimeout);
    };
  }, []);

  // Optimized intersection observer
  useEffect(() => {
    const options = {
      threshold: 0.1,
      rootMargin: '50px'
    };

    observerRef.current = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        // Unobserve after first trigger
        if (sectionRef.current && observerRef.current) {
          observerRef.current.unobserve(sectionRef.current);
        }
      }
    }, options);

    if (sectionRef.current && observerRef.current) {
      observerRef.current.observe(sectionRef.current);
    }

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  // Clean up intervals
  useEffect(() => {
    return () => {
      if (imageIntervalRef.current) {
        clearInterval(imageIntervalRef.current);
      }
      if (sliderIntervalRef.current) {
        clearInterval(sliderIntervalRef.current);
      }
    };
  }, []);

  // Optimized slider effect
  useEffect(() => {
    if (sliderIntervalRef.current) {
      clearInterval(sliderIntervalRef.current);
    }

    sliderIntervalRef.current = window.setInterval(() => {
      setCenterIndex(prev => (prev + 1) % 5);
    }, 3000);

    return () => {
      if (sliderIntervalRef.current) {
        clearInterval(sliderIntervalRef.current);
      }
    };
  }, []);

  // Optimized image rotation
  const startImageRotation = useCallback(() => {
    if (imageIntervalRef.current) {
      clearInterval(imageIntervalRef.current);
    }
    
    if (!selectedProject?.images || selectedProject.images.length <= 1) return;
    
    imageIntervalRef.current = window.setInterval(() => {
      if (!isImageHovered && selectedProject?.images) {
        setCurrentImageIndex(prev => (prev + 1) % selectedProject.images!.length);
      }
    }, 3000);
  }, [selectedProject, isImageHovered]);

  // Handle project selection
  useEffect(() => {
    if (selectedProject?.images && selectedProject.images.length > 1) {
      startImageRotation();
    }
    
    return () => {
      if (imageIntervalRef.current) {
        clearInterval(imageIntervalRef.current);
        imageIntervalRef.current = null;
      }
    };
  }, [selectedProject, startImageRotation]);

  const stopImageRotation = useCallback(() => {
    if (imageIntervalRef.current) {
      clearInterval(imageIntervalRef.current);
      imageIntervalRef.current = null;
    }
  }, []);

  const goToNextImage = useCallback(() => {
    if (selectedProject?.images && selectedProject.images.length > 0) {
      setCurrentImageIndex(prev => (prev + 1) % selectedProject.images!.length);
    }
  }, [selectedProject]);

  const goToPrevImage = useCallback(() => {
    if (selectedProject?.images && selectedProject.images.length > 0) {
      setCurrentImageIndex(prev => 
        prev === 0 ? selectedProject.images!.length - 1 : prev - 1
      );
    }
  }, [selectedProject]);

  // Memoized project data
  const projects = useRef<Project[]>([
    {
      name: "Nipser – Scholarship Portal",
      techStack: [
        "TypeScript",
        "React",
        "Tailwind CSS",
        "Spring Boot",
        "PostgreSQL",
        "Swagger UI",
        "Postman",
        "GitHub",
      ],
      icon: <img src={NipserIcon} alt="Nipser Icon" className="w-12 h-12" />,
      description:
        "A secure and scalable portal to streamline scholarship applications and administrative workflows.",
      points: [
        "Built using TypeScript + React for type-safe, component-driven UI.",
        "Implemented secure login and dynamic role-based access control.",
        "Managed thousands of student records using PostgreSQL.",
      ],
      url: "https://nipserscholarship.com/",
      details: `The Nipser Scholarship Portal was developed over a period of 3 months by a dedicated team of 5 developers, including frontend, backend, and database specialists.

The frontend was built using **TypeScript with React**, styled with **Tailwind CSS** to ensure a clean and responsive design. The backend was developed using **Spring Boot**, exposing RESTful APIs documented through **Swagger UI** and tested using **Postman**.

The application handled sensitive data with strict validation, role management, and auditing features. PostgreSQL was used as the primary database to manage large-scale relational data efficiently.

Development followed agile methodology, with bi-weekly sprints, continuous integration, and regular testing cycles. The team worked closely under the guidance of an experienced team lead who ensured clear task distribution and code quality through reviews and collaboration.

Every feature was implemented with a focus on scalability, maintainability, and performance.`,
      images: [
        "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
      ]
    },
    {
      name: "SmartAcad - School Management System",
      techStack: [
        "React.js",
        "Tailwind CSS",
        "Spring Boot",
        "MySQL",
        "Swagger UI",
        "Postman",
        "GitHub",
      ],
      icon: <img src={SchoolIcon} alt="School Icon" className="w-12 h-12" />,
      description:
        "Comprehensive school system to manage admissions, academics, attendance, and student records.",
      points: [
        "Frontend built using React.js and Tailwind CSS for modular UI.",
        "Developed APIs with Spring Boot, tested using Postman.",
        "Utilized MySQL for fast, efficient relational data management.",
        "Real-time attendance tracking and report generation.",
      ],
      url: "https://smartacad.in/",
      details: `SmartAcad School Management System was developed over 4 months by a team of 4 developers. This comprehensive platform revolutionizes how educational institutions manage their daily operations, from admissions to academic reporting.

The frontend was built using **React.js** with **TypeScript** for type safety, coupled with **Tailwind CSS** for a modern, responsive design that works seamlessly across all devices. The backend was powered by **Spring Boot**, providing robust RESTful APIs that were thoroughly documented using **Swagger UI** and tested with **Postman**.

Key features include:
- **Admission Management**: Streamlined student enrollment process
- **Academic Tracking**: Complete academic record management
- **Attendance System**: Real-time attendance monitoring with analytics
- **Exam Management**: Comprehensive exam scheduling and result processing
- **Fee Management**: Automated fee collection and reporting
- **Parent Portal**: Real-time updates for parents on student performance

The system uses **MySQL** for efficient data management and handles high-volume transactions with optimized queries and indexing. Security was a top priority, with role-based access control, data encryption, and secure authentication mechanisms.

Our team followed agile development practices with two-week sprints, continuous integration, and regular code reviews to ensure high code quality and timely delivery.`,
      images: [
        "https://images.unsplash.com/photo-1522881193457-37ae97c905bf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
      ]
    },
    {
      name: "Stars of Tech - Official Website",
      techStack: [
        "React.js",
        "Tailwind CSS",
        "Spring Boot",
        "PostgreSQL",
        "Swagger UI",
        "Postman",
        "GitHub"
      ],
      icon: <img src={StarsIcon} alt="Stars Icon" className="w-12 h-12" />,
      description:
        "Official company website showcasing services, portfolio, and client success stories.",
      points: [
        "Built with React.js and TypeScript for robust frontend experience.",
        "Implemented responsive design with Tailwind CSS for all devices.",
        "Managed content efficiently with custom CMS integration.",
      ],
      url: "https://starsoftech.com/",
      details: `The Stars of Tech official website was designed to represent our brand and showcase our capabilities to potential clients. The project was developed by our in-house team over 2 months.

The frontend was built using **React.js with TypeScript** for type safety and better development experience. We used **Tailward CSS** for styling, ensuring a consistent and responsive design across all device sizes.

The backend was powered by **Spring Boot** with Express, providing a fast and efficient server environment. For content management, we implemented a custom CMS that allows our team to easily update content without technical knowledge.

Key sections include:
- **Portfolio Showcase**: Highlighting our successful projects with case studies
- **Services Overview**: Detailed information about our development services
- **Team Introduction**: Meet our talented developers and experts
- **Blog Section**: Industry insights and company updates
- **Contact Integration**: Seamless communication channels for client inquiries

The site is optimized for performance with lazy loading, image optimization, and efficient code splitting. We also implemented SEO best practices to ensure high visibility in search engine results.`,
      images: [
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        "https://images.unsplash.com/photo-1497215728101-856f4ea42174?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
      ]
    },
    {
      name: "Crime Portal",
      techStack: [
        "HTML", "CSS", "JavaScript", "jQuery", "Owl Carousel", "Isotope JS", "ASP.NET C#", "MSCaptcha", "Animate.css"
      ],
      icon: <img src={CrimePortalIcon} alt="Crime Portal Logo" className="w-12 h-12"/>,
      description: "A secure, responsive, and interactive web portal for crime-related information and user engagement.",
      points: [
        "Responsive design optimized for desktop, tablet, and mobile.",
        "Interactive UI: sticky navigation, carousels, sliders, 'Back to Top' button.",
        "Portfolio filtering implemented with Isotope JS.",
        "CAPTCHA security integrated using MSCaptcha in ASP.NET.",
        "Smooth animations using Animate.css.",
        "Content sections: About, Services, Team, FAQ, Blog, Testimonials, Portfolio, Contact Form."
      ],
      url: "https://dainty-custard-fd1a0a.netlify.app/",
      details: `Crime Portal is a web-based project developed as part of my graduation in Computer Science (2023). The project focuses on creating a modern, responsive, and secure web application where users can interact with different sections of the website. 

**Frontend:** HTML, CSS (style.css, animate.css), JavaScript, jQuery  
**Libraries & Plugins:** Owl Carousel (sliders & carousels), Isotope (portfolio grid & filtering), jQuery Easing (animations)  
**Backend:** ASP.NET with C#  
**Security:** MSCaptcha library for CAPTCHA generation and validation  
**Media Assets:** Images and icons for blogs, portfolio, team, and testimonials  

**Learning Outcomes:**  
- Built a complete web project integrating both frontend and backend technologies.  
- Learned responsive design principles and modern UI/UX techniques.  
- Gained practical experience in ASP.NET development with C#.  
- Implemented security measures using CAPTCHA verification.  
- Worked with third-party libraries and plugins to enhance interactivity.  
- Improved understanding of UX and interface design.`,
      images: [
        "https://i.pinimg.com/736x/61/fc/1f/61fc1fe47a8a9ef8788790b164e95bc3.jpg",
        "https://i.pinimg.com/1200x/6b/f8/2d/6bf82ddaee812ba5cf46cc5d80e0968d.jpg",
        "https://i.pinimg.com/1200x/a7/5b/cc/a75bcc88195339696dbb2808f28371d9.jpg",
      ]
    }
  ]).current;

  // Memoized slider images
  const sliderImages = useRef([
    "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    "https://images.unsplash.com/photo-1522881193457-37ae97c905bf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
  ]).current;

  // Optimized animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { 
        staggerChildren: 0.15, 
        delayChildren: 0.1 
      } 
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1, 
      transition: { 
        duration: 0.4, 
        ease: "easeOut" 
      } 
    },
  };

  const modalContentVariants: Variants = {
    hidden: { opacity: 0, scale: 0.9, y: 20 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      y: 0, 
      transition: { 
        duration: 0.3, 
        ease: "easeOut" 
      } 
    },
    exit: { 
      opacity: 0, 
      scale: 0.9, 
      transition: { 
        duration: 0.2 
      } 
    },
  };

  const techChipVariants: Variants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: (i: number) => ({ 
      scale: 1, 
      opacity: 1, 
      transition: { 
        delay: i * 0.05, 
        duration: 0.2 
      } 
    }),
  };

  // Optimized slider calculations
  const getSliderOffset = useCallback(() => {
    if (typeof window === 'undefined') return 160;
    if (window.innerWidth < 640) return 60;
    if (window.innerWidth < 768) return 80;
    if (window.innerWidth < 1024) return 120;
    return 160;
  }, []);

  const getSliderImageSize = useCallback(() => {
    if (typeof window === 'undefined') return { width: '200px', height: '240px' };
    if (window.innerWidth < 640) return { width: '100px', height: '140px' };
    if (window.innerWidth < 768) return { width: '120px', height: '160px' };
    if (window.innerWidth < 1024) return { width: '160px', height: '200px' };
    return { width: '200px', height: '240px' };
  }, []);

  // Handle modal close
  const handleCloseModal = useCallback(() => {
    setSelectedProject(null);
    stopImageRotation();
    setIsImageHovered(false);
    setCurrentImageIndex(0);
  }, [stopImageRotation]);

  // Handle image navigation
  const handleImageNavigate = useCallback((direction: 'prev' | 'next') => {
    if (direction === 'next') {
      goToNextImage();
    } else {
      goToPrevImage();
    }
  }, [goToNextImage, goToPrevImage]);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="relative w-full px-4 py-12 md:py-16 lg:py-20 overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 border border-slate-700/50 shadow-2xl"
      style={{ marginTop: 0, willChange: 'transform' }}
    >
      {/* Simplified background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-slate-900/90 via-slate-800/90 to-slate-900/90"></div>

      {/* Grid background with reduced opacity */}
      <div 
        className="absolute inset-0 -z-5 opacity-5" 
        style={{
          backgroundImage: `linear-gradient(to right, #64748b 1px, transparent 1px),
                            linear-gradient(to bottom, #64748b 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
        }}
      />

      {/* Projects Container */}
      <div className="max-w-7xl mx-auto relative">
        {/* Title Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} 
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-10 md:mb-14 lg:mb-16 pt-4"
        >
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 md:mb-5"
          >
            Our Latest <span className="bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">Projects</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="text-slate-300 max-w-2xl mx-auto text-base md:text-lg px-4 md:px-6 leading-relaxed"
          >
            Empowering businesses with next-gen software solutions. From startups to enterprises, we build scalable, secure, and innovative digital solutions.
          </motion.p>
        </motion.div>

        {/* Image Slider Section */}
        <div className="py-6 md:py-8 lg:py-10 flex flex-col items-center my-4 p-4 lg:p-0">
          <div className="relative flex items-center justify-center w-full h-40 sm:h-52 md:h-60 lg:h-72 overflow-hidden">
            {sliderImages.map((img, i) => {
              const offset = i - centerIndex;
              const adjustedOffset = offset < -2 ? offset + 5 : offset > 2 ? offset - 5 : offset;
              const absOffset = Math.abs(adjustedOffset);
              const imageSize = getSliderImageSize();
              const offsetValue = getSliderOffset();

              return (
                <motion.img
                  key={i}
                  src={img}
                  alt={`slide-${i}`}
                  className="absolute rounded-lg sm:rounded-xl shadow-lg border border-slate-700/50 bg-slate-800"
                  animate={{
                    scale: absOffset === 0 ? 1 : 0.8,
                    x: adjustedOffset * offsetValue,
                    zIndex: 5 - absOffset,
                    opacity: absOffset > 2 ? 0 : 1 - absOffset * 0.3,
                  }}
                  transition={{ 
                    type: "spring", 
                    stiffness: 180, 
                    damping: 20,
                    mass: 1
                  }}
                  style={{
                    width: imageSize.width,
                    height: imageSize.height,
                    objectFit: "cover",
                  }}
                  loading="lazy"
                />
              );
            })}
          </div>
        </div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mt-10 md:mt-12"
        >
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="bg-slate-800/40 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 hover:border-teal-400/30 transition-all duration-200 cursor-pointer group"
              whileHover={!isMobile ? { y: -3 } : {}}
              onClick={() => {
                setSelectedProject(project);
                setCurrentImageIndex(0);
              }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="flex-shrink-0">
                  {project.icon}
                </div>
                <h3 className="text-xl sm:text-2xl font-semibold text-white group-hover:text-teal-400 transition-colors duration-200">
                  {project.name}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.techStack.map((tech, i) => (
                  <motion.span
                    key={i}
                    custom={i}
                    variants={techChipVariants}
                    initial="hidden"
                    animate={isVisible ? "visible" : "hidden"}
                    className="bg-teal-500/20 text-teal-400 text-xs px-3 py-1 rounded-full border border-teal-400/20"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>

              <p className="text-slate-300 text-base mb-4 leading-relaxed">
                {project.description}
              </p>

              <ul className="space-y-2 text-slate-300 text-sm mb-6">
                {project.points.map((point, i) => (
                  <li key={i} className="flex items-start">
                    <span className="text-teal-400 mr-2">•</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              <div className="flex gap-3 flex-wrap">
                <button
                  className="flex items-center gap-2 bg-teal-600/80 hover:bg-teal-700 text-white text-sm font-medium px-4 py-2.5 rounded-full transition"
                >
                  <span>View Details</span>
                  <ExternalLink size={16} />
                </button>
                {project.url && project.url !== "#" && (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-slate-700/80 hover:bg-slate-600 text-slate-300 hover:text-white text-sm font-medium px-4 py-2.5 rounded-full transition"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <span>Visit Site</span>
                    <ExternalLink size={16} />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Modal */}
        <AnimatePresence mode="wait">
          {selectedProject && (
            <motion.div
              className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={handleCloseModal}
            >
              <motion.div
                className="bg-slate-800/90 backdrop-blur-md w-full max-w-2xl lg:max-w-4xl rounded-xl p-4 sm:p-6 relative max-h-[90vh] overflow-y-auto border border-slate-700/50"
                variants={modalContentVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={handleCloseModal}
                  className="absolute top-3 right-3 text-slate-300 hover:text-teal-400 transition z-10"
                  aria-label="Close modal"
                >
                  <X size={24} />
                </button>

                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-slate-700/50 flex items-center justify-center overflow-hidden">
                    {selectedProject.icon}
                  </div>
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white">{selectedProject.name}</h3>
                </div>

                {/* Image Gallery */}
                {selectedProject.images && selectedProject.images.length > 0 && (
                  <div 
                    className="relative h-48 sm:h-56 md:h-64 lg:h-72 mb-4 rounded-lg overflow-hidden bg-slate-900"
                    onMouseEnter={() => setIsImageHovered(true)}
                    onMouseLeave={() => setIsImageHovered(false)}
                  >
                    <img
                      src={selectedProject.images[currentImageIndex]}
                      alt={`${selectedProject.name} screenshot`}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    
                    {selectedProject.images.length > 1 && (
                      <>
                        <button
                          className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition"
                          onClick={(e) => {
                            e.stopPropagation();
                            handleImageNavigate('prev');
                          }}
                          aria-label="Previous image"
                        >
                          <ChevronLeft size={20} />
                        </button>
                        <button
                          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition"
                          onClick={(e) => {
                            e.stopPropagation();
                            handleImageNavigate('next');
                          }}
                          aria-label="Next image"
                        >
                          <ChevronRight size={20} />
                        </button>
                        
                        <div className="absolute bottom-2 left-0 right-0 flex justify-center gap-2">
                          {selectedProject.images.map((_, index) => (
                            <button
                              key={index}
                              className={`w-2 h-2 rounded-full transition-all ${
                                index === currentImageIndex ? 'bg-teal-400' : 'bg-slate-400/50'
                              }`}
                              onClick={(e) => {
                                e.stopPropagation();
                                setCurrentImageIndex(index);
                              }}
                              aria-label={`View image ${index + 1}`}
                            />
                          ))}
                        </div>
                      </>
                    )}
                  </div>
                )}

                <div className="flex flex-wrap gap-2 mb-4">
                  {selectedProject.techStack.map((tech, i) => (
                    <span key={i} className="bg-teal-500/20 text-teal-400 text-xs sm:text-sm px-3 py-1 rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="text-slate-300 whitespace-pre-line leading-relaxed text-sm sm:text-base">
                  {selectedProject.details}
                </div>

                {selectedProject.url && selectedProject.url !== "#" && (
                  <div className="mt-6 flex justify-center">
                    <a
                      href={selectedProject.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 bg-teal-600 hover:bg-teal-700 text-white font-medium px-6 py-3 rounded-full transition"
                    >
                      <span>Visit Live Project</span>
                      <ExternalLink size={18} />
                    </a>
                  </div>
                )}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Projects;