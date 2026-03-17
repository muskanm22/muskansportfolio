import React, { useState, useEffect, useRef, useCallback } from "react";
import { ExternalLink, X, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import NipserIcon from "../assets/nipser.jpeg"; 
import SchoolIcon from "../assets/SMS.jpeg";
import StarsIcon from "../assets/StarSoftech (1).png";
import CrimePortalIcon from "../assets/kanun.jpg";
import SharpTradersIcon from "../assets/sharptrader.jpeg"; 
import CaIcon from "../assets/CA.png"; 

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
      setCenterIndex(prev => (prev + 1) % 7); // Updated to 7 for new projects
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

  // Memoized project data (added 2 new projects)
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

The frontend was built using **React.js with TypeScript** for type safety and better development experience. We used **Tailwind CSS** for styling, ensuring a consistent and responsive design across all device sizes.

The backend was powered by **Spring Boot**, providing a fast and efficient server environment. For content management, we implemented a custom CMS that allows our team to easily update content without technical knowledge.

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
    },
    {
      name: "Sharp Traders - Sanitary & Bathware Shop",
      techStack: [
        "TypeScript",
        "React",
        "Tailwind CSS",
        "Spring Boot",
        "PostgreSQL",
        "Swagger UI",
        "REST APIs",
        "JWT Authentication",
        "Redux Toolkit",
        "GitHub"
      ],
      icon: <img src={SharpTradersIcon} alt="Sharp Traders Icon" className="w-12 h-12" />,
      description: "A comprehensive e-commerce platform for sanitary, plumbing, and bathware products with secure payment integration and admin dashboard.",
      points: [
        "Full-stack e-commerce solution with product catalog and inventory management.",
        "Secure user authentication and role-based access control (Admin/Customer).",
        "Shopping cart functionality with order tracking and payment gateway integration.",
        "Admin dashboard for product management, order processing, and sales analytics.",
      ],
      url: "https://sharp-traders.com", // Replace with actual URL
      details: `Sharp Traders is a modern e-commerce platform developed for a sanitary, plumbing, and bathware retail business. The project was built over 3 months using Spring Boot for the backend and React with TypeScript for the frontend.

**Backend Architecture:**
- Built with **Spring Boot** and **PostgreSQL** for robust data management
- RESTful APIs with **Swagger UI** documentation
- **JWT authentication** for secure user sessions
- Image storage and management system for product photos
- Inventory management with real-time stock updates

**Frontend Features:**
- **React with TypeScript** for type-safe component development
- **Redux Toolkit** for efficient state management
- **Tailwind CSS** for responsive and modern UI design
- Product filtering by categories (Sanitary, Plumbing, Bathware)
- Shopping cart with persistent storage
- Secure checkout process with payment gateway integration
- Order history and tracking for customers

**Admin Dashboard:**
- Product management (Add, Edit, Delete products)
- Category management
- Order processing and status updates
- Customer management
- Sales reports and analytics
- Inventory alerts for low stock

The platform handles hundreds of products across multiple categories including sanitary ware, bathroom fittings, plumbing supplies, tiles, and accessories. The system ensures smooth transactions, real-time inventory updates, and provides a seamless shopping experience for customers.`,
      images: [
         "https://content.jdmagicbox.com/v2/comp/pune/n9/020pxx20.xx20.250702115652.b8n9/catalogue/pooja-sanitaryware-dhanori-pune-sanitaryware-dealers-xemw54ysg5.jpg",
 
        "https://i0.wp.com/uchify.com/wp-content/uploads/2024/11/bathroom-supply-shops-pro-field.png?resize=753%2C488&ssl=1",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4KNNo-BH4l-FW943kNutz8jc627BkbE4qUg&s",
               "https://img.freepik.com/premium-photo/photo-wellorganized-plumbing-supply-store_1055425-47501.jpg"
      ]
    },
    {
      name: "CA & Associates - Professional Website",
      techStack: [
        "HTML5",
        "CSS3",
        "JavaScript",
        "Bootstrap 5",
        "jQuery",
        "AOS Animation",
        "Font Awesome",
        "Google Maps API",
        "Contact Form Integration"
      ],
      icon: <img src={CaIcon} alt="CA Website Icon" className="w-12 h-12" />,
      description: "A professional, responsive static website for a Chartered Accountant firm showcasing services, expertise, and client resources.",
      points: [
        "Clean, professional design with modern UI/UX principles.",
        "Fully responsive layout optimized for all devices.",
        "Service pages for Audit, Taxation, GST, and Financial Consulting.",
        "Interactive elements with AOS scroll animations.",
        "Contact form with validation and email integration.",
        "Google Maps integration for office location.",
        "SEO optimized with meta tags and semantic HTML.",
      ],
      url: "https://ca-associates.com", // Replace with actual URL
      details: `The CA & Associates website is a professional static website developed for a Chartered Accountant firm. Built with pure HTML, CSS, and JavaScript, this project focuses on creating a trustworthy and professional online presence for financial services.

**Frontend Technologies:**
- **HTML5** with semantic markup for better SEO
- **CSS3** with custom properties and modern layouts
- **Bootstrap 5** for responsive grid system and components
- **JavaScript** for interactive elements and form validation
- **jQuery** for DOM manipulation and AJAX requests
- **AOS (Animate on Scroll)** library for smooth scroll animations

**Key Sections:**
- **Hero Section**: Professional introduction with call-to-action
- **Services**: Detailed service pages including:
  - Audit & Assurance
  - Taxation (Income Tax, GST)
  - Financial Consulting
  - Business Registration
  - Accounting Services
- **About Us**: Firm history, mission, and team profiles
- **Resources**: Tax calculators, forms, and important updates
- **Blog**: Financial tips and regulatory updates
- **Contact**: Contact form, Google Maps, office hours, and phone/email

**Features:**
- Sticky navigation bar for easy access
- Service cards with hover effects
- Testimonials carousel
- FAQ accordion section
- Newsletter signup form
- Social media integration
- GDPR compliant cookie notice
- Fast loading with optimized assets

The website is designed to build trust with potential clients, showcase expertise, and provide easy access to important financial resources. The clean, professional design reflects the seriousness and reliability expected from a CA firm.`,
      images: [
        "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
        "data:image/jpeg;base64,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",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6IZG6zrs4hiq-t4e4oyAblk4GlZgn35BsyA&s",
        "https://www.shutterstock.com/image-photo/efficient-african-american-accountant-using-600nw-2604751891.jpg"
      ]
    }
  ]).current;

  // Memoized slider images (updated with 2 new images)
  const sliderImages = useRef([
    "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    "https://images.unsplash.com/photo-1522881193457-37ae97c905bf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    "https://images.unsplash.com/photo-1555529669-e69e7aa56ba9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
    "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80"
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
              const adjustedOffset = offset < -2 ? offset + 7 : offset > 2 ? offset - 7 : offset;
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

        {/* Projects Grid - Updated to 3 columns on large screens */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mt-10 md:mt-12"
        >
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="bg-slate-800/40 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 hover:border-teal-400/30 transition-all duration-200 cursor-pointer group h-full flex flex-col"
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
                {project.techStack.slice(0, 4).map((tech, i) => (
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
                {project.techStack.length > 4 && (
                  <span className="bg-slate-700/50 text-slate-300 text-xs px-3 py-1 rounded-full">
                    +{project.techStack.length - 4}
                  </span>
                )}
              </div>

              <p className="text-slate-300 text-base mb-4 leading-relaxed flex-grow">
                {project.description}
              </p>

              <ul className="space-y-2 text-slate-300 text-sm mb-6">
                {project.points.slice(0, 2).map((point, i) => (
                  <li key={i} className="flex items-start">
                    <span className="text-teal-400 mr-2">•</span>
                    <span>{point}</span>
                  </li>
                ))}
                {project.points.length > 2 && (
                  <li className="text-teal-400 text-sm">+{project.points.length - 2} more features</li>
                )}
              </ul>

              <div className="flex gap-3 flex-wrap mt-auto">
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