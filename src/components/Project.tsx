import React, { useState, useEffect, useRef } from "react";
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
  const sectionRef = useRef<HTMLElement | null>(null);
  const imageIntervalRef = useRef<number | null>(null);
  const [windowWidth, setWindowWidth] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  

  useEffect(() => {
    setWindowWidth(window.innerWidth);
    setIsMobile(window.innerWidth < 768);
    
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  // Start image rotation when a project is selected
  useEffect(() => {
    if (selectedProject && selectedProject.images && selectedProject.images.length > 1) {
      startImageRotation();
    }
    
    return () => {
      if (imageIntervalRef.current) {
        clearInterval(imageIntervalRef.current);
      }
    };
  }, [selectedProject]);

  // Image slider effect for project cards
  useEffect(() => {
    const interval = setInterval(() => {
      setCenterIndex((prev) => (prev + 1) % 5);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const startImageRotation = () => {
    if (imageIntervalRef.current) {
      clearInterval(imageIntervalRef.current);
    }
    
    imageIntervalRef.current = window.setInterval(() => {
      if (!isImageHovered && selectedProject?.images && selectedProject.images.length > 0) {
        setCurrentImageIndex(prev => 
          (prev + 1) % selectedProject.images!.length
        );
      }
    }, 3000);
  };

  const stopImageRotation = () => {
    if (imageIntervalRef.current) {
      clearInterval(imageIntervalRef.current);
      imageIntervalRef.current = null;
    }
  };

  const goToNextImage = () => {
    if (selectedProject?.images && selectedProject.images.length > 0) {
      setCurrentImageIndex((prev) => 
        (prev + 1) % selectedProject.images!.length
      );
    }
  };

  const goToPrevImage = () => {
    if (selectedProject?.images && selectedProject.images.length > 0) {
      setCurrentImageIndex((prev) => 
        prev === 0 ? selectedProject.images!.length - 1 : prev - 1
      );
    }
  };

  const projects: Project[] = [
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
    
  ];

  // Images for the slider
  const sliderImages = [
    "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    "https://images.unsplash.com/photo-1522881193457-37ae97c905bf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
  ];

  // Enhanced Particles animation
  const particles = Array.from({ length: isMobile ? 20 : 40 });
  const particleVariants:Variants = {
    animate: (i: number) => ({
      y: [0, -40, 0],
      x: [0, Math.random() * 80 - 40, 0],
      opacity: [0, 0.7, 0],
      scale: [0, 1, 0],
      transition: {
        repeat: Infinity,
        duration: 5 + Math.random() * 6,
        delay: i * 0.15,
        ease: "easeInOut",
      },
    }),
  };

  const floatingIcons = [
    { icon: "🚀", size: "text-xl sm:text-2xl", delay: 0 },
    { icon: "⚛️", size: "text-2xl sm:text-3xl", delay: 0.5 },
    { icon: "💻", size: "text-xl sm:text-2xl", delay: 1 },
    { icon: "🔒", size: "text-2xl sm:text-3xl", delay: 1.5 },
    { icon: "📊", size: "text-xl sm:text-2xl", delay: 2 },
    { icon: "🌐", size: "text-2xl sm:text-3xl", delay: 2.5 },
    { icon: "🔧", size: "text-xl sm:text-2xl", delay: 3 },
    { icon: "📱", size: "text-2xl sm:text-3xl", delay: 3.5 },
  ];

  const floatingIconVariants:Variants = {
    animate: (delay: number) => ({
      y: [0, -50, 0],
      rotate: [0, 15, 0],
      opacity: [0, 0.8, 0],
      transition: {
        repeat: Infinity,
        duration: 10,
        delay,
        ease: "easeInOut",
      },
    }),
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2, delayChildren: 0.3 } },
  };

  const itemVariants:Variants = {
    hidden: { y: 30, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.7, ease: "easeOut" } },
  };

  const modalBackdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.3 } },
  };

  const modalContentVariants:Variants = {
    hidden: { opacity: 0, scale: 0.8, y: 50 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.5, type: "spring", damping: 25 } },
    exit: { opacity: 0, scale: 0.8, transition: { duration: 0.2 } },
  };

  const techChipVariants:Variants = {
    hidden: { scale: 0, opacity: 0 },
    visible: (i: number) => ({ scale: 1, opacity: 1, transition: { delay: i * 0.1, type: "spring", stiffness: 300, damping: 20 } }),
  };

  const imageVariants = {
    enter: (direction: number) => ({
      opacity: 0,
      x: direction > 0 ? 300 : -300,
    }),
    center: {
      opacity: 1,
      x: 0,
    },
    exit: (direction: number) => ({
      opacity: 0,
      x: direction < 0 ? 300 : -300,
    })
  };

  // Calculate slider image offset based on screen size
  const getSliderOffset = () => {
    if (windowWidth < 640) return 60;
    if (windowWidth < 768) return 80;
    if (windowWidth < 1024) return 120;
    return 160;
  };

  // Calculate slider image size based on screen size
  const getSliderImageSize = () => {
    if (windowWidth < 640) return { width: '100px', height: '140px' };
    if (windowWidth < 768) return { width: '120px', height: '160px' };
    if (windowWidth < 1024) return { width: '160px', height: '200px' };
    return { width: '200px', height: '240px' };
  };

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="relative w-full px-4 py-12 md:py-16 lg:py-20 overflow-hidden bg-gradient-to-br from-slate-900/90 via-slate-800/90 to-slate-900/90 backdrop-blur-md border border-slate-700/50 shadow-2xl"
      style={{ marginTop: 0 }}
    >
      {/* Enhanced Glass-like Background Effect */}
      <div className="absolute inset-0 -z-20 overflow-hidden">
        <div className="absolute inset-0 bg-glass-effect bg-[size:100px_100px] opacity-30"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-teal-400/5 via-purple-500/5 to-cyan-400/5 backdrop-blur-3xl"></div>
      </div>

      {/* Enhanced Particles Background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        {particles.map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-gradient-to-r from-teal-400/30 to-purple-500/30"
            style={{
              width: Math.random() * (isMobile ? 40 : 100) + 20,
              height: Math.random() * (isMobile ? 40 : 100) + 20,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              filter: "blur(12px)",
            }}
            custom={i}
            variants={particleVariants}
            animate={isMobile ? {} : "animate"}
          />
        ))}
      </div>

      {/* Animated Grid Background */}
      <div className="absolute inset-0 -z-20 opacity-20">
        <div className="absolute inset-0 bg-grid-white/10 bg-[size:40px_40px]"></div>
        <motion.div 
          className="absolute inset-0 bg-gradient-to-b from-slate-900/0 to-slate-900"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        />
      </div>

      {/* Floating Icons */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        {floatingIcons.map((item, i) => (
          <motion.div
            key={i}
            className={`absolute ${item.size} text-teal-400/30`}
            style={{
              top: `${10 + (i * 12) % 80}%`,
              left: `${5 + (i * 15) % 90}%`,
            }}
            custom={item.delay}
            variants={floatingIconVariants}
            animate={isMobile ? {} : "animate"}
          >
            {item.icon}
          </motion.div>
        ))}
      </div>

      {/* Animated Light Beams */}
      <div className="absolute inset-0 -z-10 overflow-hidden opacity-30">
        <motion.div 
          className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-teal-400/10 to-transparent"
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute bottom-0 right-0 w-full h-1/2 bg-gradient-to-t from-purple-500/10 to-transparent"
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
      </div>

      {/* Projects Container */}
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Title Section with Improved Spacing */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} 
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-10 md:mb-14 lg:mb-16 pt-4"
        >
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 md:mb-5"
          >
            Our Latest <span className="bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">Projects</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-slate-300 max-w-2xl mx-auto text-base md:text-lg px-4 md:px-6 leading-relaxed"
          >
            Empowering businesses with next-gen software solutions. From startups to enterprises, we build scalable, secure, and innovative digital solutions.
          </motion.p>
        </motion.div>

        {/* Image Slider Section */}
        <section className="py-6 md:py-8 lg:py-10 flex flex-col items-center my-4 p-4 lg:p-0">
          <div className="relative flex items-center justify-center w-full h-40 sm:h-52 md:h-60 lg:h-72 overflow-hidden">
            {sliderImages.map((img, i) => {
              const offset = i - centerIndex;

              const adjustedOffset =
                offset < -Math.floor(sliderImages.length / 2)
                  ? offset + sliderImages.length
                  : offset > Math.floor(sliderImages.length / 2)
                  ? offset - sliderImages.length
                  : offset;

              const absOffset = Math.abs(adjustedOffset);
              const imageSize = getSliderImageSize();

              return (
                <motion.img
                  key={i}
                  src={img}
                  alt={`slide-${i}`}
                  className="absolute rounded-lg sm:rounded-xl shadow-lg border border-slate-700/50 backdrop-blur-sm"
                  animate={{
                    scale: absOffset === 0 ? 1 : 0.8,
                    x: adjustedOffset * getSliderOffset(),
                    zIndex: absOffset === 0 ? 10 : -absOffset,
                    opacity: absOffset > 2 ? 0 : 1 - absOffset * 0.3,
                  }}
                  transition={{ type: "spring", stiffness: 200, damping: 25 }}
                  style={{
                    width: imageSize.width,
                    height: imageSize.height,
                    objectFit: "cover",
                    cursor: "pointer",
                  }}
                />
              );
            })}
          </div>
        </section>

        {/* Projects Grid - Updated to 2x2 layout for better spacing */}
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
              className="bg-slate-800/30 backdrop-blur-md rounded-xl p-6 sm:p-7 border border-slate-700/50 hover:border-teal-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-teal-400/10 cursor-pointer relative overflow-hidden group"
              whileHover={isMobile ? {} : { scale: 1.02, y: -5, transition: { duration: 0.3 } }}
            >
              {/* Card content */}
              <div className="flex items-center gap-3 mb-4">
    <motion.div 
  className="flex items-center justify-center"
  whileHover={isMobile ? {} : { rotate: 360, scale: 1.2 }} 
  transition={{ duration: 0.5 }}
  style={{ width: 80, height: 80 }} // increase size as needed
>
  {project.icon}
</motion.div>

                <h3 className="text-xl sm:text-2xl font-semibold text-white group-hover:text-teal-400 transition-colors duration-300">
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
                    className="bg-teal-500/20 text-teal-400 text-xs px-3 py-1.5 rounded-full backdrop-blur-sm hover:bg-teal-500/30 transition-colors duration-300 border border-teal-400/20"
                    whileHover={isMobile ? {} : { scale: 1.05 }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>

              <p className="text-slate-300 text-base sm:text-lg mb-4 group-hover:text-slate-200 transition-colors duration-300 leading-relaxed">
                {project.description}
              </p>

              <ul className="list-disc list-inside space-y-2 text-slate-300 text-sm sm:text-base group-hover:text-slate-200 transition-colors duration-300 mb-6">
                {project.points.map((point, i) => (
                  <motion.li key={i} initial={{ opacity: 0, x: -10 }} animate={isVisible ? { opacity: 1, x: 0 } : {}} transition={{ delay: 0.6 + i * 0.1 }}>
                    {point}
                  </motion.li>
                ))}
              </ul>

              <div className="mt-6 flex gap-3 flex-wrap">
                <motion.button
                  onClick={() => {
                    setSelectedProject(project);
                    setCurrentImageIndex(0);
                  }}
                  className="flex items-center gap-2 bg-teal-600/80 hover:bg-teal-700/80 text-white text-sm font-medium px-4 sm:px-5 py-2.5 sm:py-3 rounded-full transition group/btn relative overflow-hidden backdrop-blur-sm border border-teal-500/30"
                  whileHover={isMobile ? {} : { scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="relative z-10">View Details</span>
                  <motion.span animate={{ x: [0, 4, 0] }} transition={{ repeat: Infinity, duration: 1.5 }} className="relative z-10">
                    <ExternalLink size={16} />
                  </motion.span>
                  <div className="absolute inset-0 -z-10 bg-gradient-to-r from-teal-600/80 to-teal-700/80 group-hover/btn:from-teal-700/80 group-hover/btn:to-teal-800/80 transition-all duration-300"></div>
                </motion.button>
                {project.url && project.url !== "#" && (
                  <motion.a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-slate-700/80 hover:bg-slate-600/80 text-slate-300 hover:text-white text-sm font-medium px-4 sm:px-5 py-2.5 sm:py-3 rounded-full transition group/btn relative overflow-hidden backdrop-blur-sm border border-slate-600/50"
                    whileHover={isMobile ? {} : { scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className="relative z-10">Visit Site</span>
                    <motion.span animate={{ x: [0, 4, 0] }} transition={{ repeat: Infinity, duration: 1.5 }} className="relative z-10">
                      <ExternalLink size={16} />
                    </motion.span>
                    <div className="absolute inset-0 -z-10 bg-gradient-to-r from-slate-700/80 to-slate-600/80 group-hover/btn:from-slate-600/80 group-hover/btn:to-slate-700/80 transition-all duration-300"></div>
                  </motion.a>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              className="fixed inset-0 z-[1000] bg-slate-900/95 backdrop-blur-md flex items-center justify-center p-3 sm:p-4 md:p-5"
              variants={modalBackdropVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              onClick={() => {
                setSelectedProject(null);
                stopImageRotation();
                setIsImageHovered(false);
              }}
            >
              <motion.div
                className="bg-slate-800/80 backdrop-blur-lg w-full max-w-md sm:max-w-lg md:max-w-2xl lg:max-w-4xl rounded-xl md:rounded-2xl p-4 sm:p-5 md:p-6 relative shadow-2xl max-h-[90vh] overflow-y-auto border border-slate-700/50"
                variants={modalContentVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={() => {
                    setSelectedProject(null);
                    stopImageRotation();
                    setIsImageHovered(false);
                  }}
                  className="absolute top-3 right-3 sm:top-4 sm:right-4 text-slate-300 hover:text-teal-400 transition z-10 bg-slate-700/50 backdrop-blur-sm p-1 rounded-full border border-slate-600/50"
                  aria-label="Close modal"
                >
                  <X size={22} className="sm:w-6 sm:h-6" />
                </button>

                <div className="flex items-center gap-3 mb-4 sm:mb-5">
                  <motion.div 
                    className="w-10 h-10 rounded-lg bg-slate-700/50 backdrop-blur-sm flex items-center justify-center overflow-hidden border border-slate-600/50"
                    whileHover={{ rotate: 360, scale: 1.1 }} 
                    transition={{ duration: 0.5 }}
                  >
                    {selectedProject.icon}
                  </motion.div>
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white">{selectedProject.name}</h3>
                </div>

                {/* Image Gallery */}
                {selectedProject.images && selectedProject.images.length > 0 && (
                  <div 
                    className="relative h-48 sm:h-56 md:h-64 lg:h-72 mb-4 sm:mb-5 md:mb-6 rounded-lg md:rounded-xl overflow-hidden border border-slate-700/50"
                    onMouseEnter={() => {
                      setIsImageHovered(true);
                      stopImageRotation();
                    }}
                    onMouseLeave={() => {
                      setIsImageHovered(false);
                      startImageRotation();
                    }}
                    onTouchStart={() => {
                      setIsImageHovered(true);
                      stopImageRotation();
                    }}
                    onTouchEnd={() => {
                      setIsImageHovered(false);
                      startImageRotation();
                    }}
                  >
                    <AnimatePresence initial={false} custom={1}>
                      <motion.img
                        key={currentImageIndex}
                        src={selectedProject.images[currentImageIndex]}
                        alt={`${selectedProject.name} screenshot ${currentImageIndex + 1}`}
                        className="absolute inset-0 w-full h-full object-cover"
                        custom={1}
                        variants={imageVariants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={{ duration: 0.5 }}
                      />
                    </AnimatePresence>
                    
                    {/* Navigation arrows */}
                    {selectedProject.images.length > 1 && (
                      <>
                        <button
                          className="absolute left-2 sm:left-3 top-1/2 transform -translate-y-1/2 bg-slate-900/70 hover:bg-slate-900 text-white p-1.5 sm:p-2 rounded-full transition-all duration-300 z-10 backdrop-blur-sm border border-slate-700/50"
                          onClick={(e) => {
                            e.stopPropagation();
                            goToPrevImage();
                          }}
                          aria-label="Previous image"
                        >
                          <ChevronLeft size={18} className="sm:w-5 sm:h-5 md:w-6 md:h-6" />
                        </button>
                        <button
                          className="absolute right-2 sm:right-3 top-1/2 transform -translate-y-1/2 bg-slate-900/70 hover:bg-slate-900 text-white p-1.5 sm:p-2 rounded-full transition-all duration-300 z-10 backdrop-blur-sm border border-slate-700/50"
                          onClick={(e) => {
                            e.stopPropagation();
                            goToNextImage();
                          }}
                          aria-label="Next image"
                        >
                          <ChevronRight size={18} className="sm:w-5 sm:h-5 md:w-6 md:h-6" />
                        </button>
                      </>
                    )}
                    
                    {/* Image navigation dots */}
                    {selectedProject.images.length > 1 && (
                      <div className="absolute bottom-2 sm:bottom-3 left-0 right-0 flex justify-center gap-1.5 sm:gap-2 z-10">
                        {selectedProject.images.map((_, index) => (
                          <button
                            key={index}
                            className={`w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full transition-all ${
                              index === currentImageIndex ? 'bg-teal-400' : 'bg-slate-400/70'
                            }`}
                            onClick={(e) => {
                              e.stopPropagation();
                              setCurrentImageIndex(index);
                            }}
                            aria-label={`View image ${index + 1}`}
                          />
                        ))}
                      </div>
                    )}
                  </div>
                )}

                <div className="flex flex-wrap gap-2 mb-4 sm:mb-5 md:mb-6">
                  {selectedProject.techStack.map((tech, i) => (
                    <span key={i} className="bg-teal-500/20 text-teal-400 text-xs sm:text-sm font-medium px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full backdrop-blur-sm border border-teal-400/20">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="prose prose-invert max-w-none">
                  <p className="text-slate-300 whitespace-pre-line leading-relaxed text-sm sm:text-base">{selectedProject.details}</p>
                </div>

                {selectedProject.url && selectedProject.url !== "#" && (
                  <div className="mt-6 flex justify-center">
                    <motion.a
                      href={selectedProject.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 bg-teal-600/80 hover:bg-teal-700/80 text-white font-medium px-6 py-3 rounded-full transition group/btn relative overflow-hidden backdrop-blur-sm border border-teal-500/30"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <span className="relative z-10">Visit Live Project</span>
                      <ExternalLink size={18} className="relative z-10" />
                      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-teal-600/80 to-teal-700/80 group-hover/btn:from-teal-700/80 group-hover/btn:to-teal-800/80 transition-all duration-300"></div>
                    </motion.a>
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