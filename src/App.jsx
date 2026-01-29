import React from "react";
import { useState, useEffect } from "react";
import Typed from "typed.js";
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillTwitterCircle,
} from "react-icons/ai";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { FaDownload, FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import {
  photo,
  bmcbuttonwhite,
  buyMeACoffee,
  bmcQrCode,
  resume,
  imagenationLogo,
  portPhoto,
  NodeJS,
  MongoDB,
  ReactJS,
  ExpressJS,
  NextJS,
  JavaScript,
  WordWeaver,
  quizzo,
  meetai,
  tinylink,
} from "./assets";
import {
  Project,
  Coffee,
  QRcode,
  DesignParticles,
  Carousel,
  MyTimeline,
} from "./components";

const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [name, setName] = useState("");
  const [messege, setMessege] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  // const [over, setOver] = useState(false);

  const el = React.useRef(null);
  const typed = React.useRef(null);
  React.useEffect(() => {
    const options = {
      strings: [
        "Full-Stack Developer.",
        "Software Engineer.",
        "React.js Developer.",
        "Node.js Expert.",
        "Problem Solver.",
      ],
      typeSpeed: 100,
      backSpeed: 50,
      showCursor: false,
      loop: true,
    };
    typed.current = new Typed(el.current, options);

    return () => {
      typed.current.destroy();
    };
  }, []);

  // Scroll detection for navbar background
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      // Close mobile menu on scroll for better UX
      if (mobileMenuOpen && window.scrollY > 100) {
        setMobileMenuOpen(false);
      }
    };
    
    // Mobile device detection
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      // Close mobile menu on desktop resize
      if (window.innerWidth >= 768) {
        setMobileMenuOpen(false);
      }
    };
    
    // Initial checks
    handleResize();
    
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, [mobileMenuOpen]);

  // Smooth scroll function
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
      setMobileMenuOpen(false);
    }
  };

  // Navigation items
  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' }
  ];

  const tools = [
    {
      name: "React.js",
      image: ReactJS,
    },
    {
      name: "Node.js",
      image: NodeJS,
    },
    {
      name: "JavaScript",
      image: JavaScript,
    },
    {
      name: "MongoDB",
      image: MongoDB,
    },
    {
      name: "Express.js",
      image: ExpressJS,
    },
    {
      name: "Next.js",
      image: NextJS,
    },
  ];

  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["C", "C++", "JavaScript (ES6+)", "TypeScript", "Python", "SQL"]
    },
    {
      title: "Frontend Technologies",
      skills: ["React.js 18", "Next.js 14", "Redux Toolkit", "Tailwind CSS", "HTML5", "CSS3", "Responsive Design", "SSR/SSG"]
    },
    {
      title: "Backend Technologies",
      skills: ["Node.js", "Express.js", "Fastify", "RESTful APIs", "GraphQL", "WebSocket", "JWT Authentication", "OAuth"]
    },
    {
      title: "Databases & Storage",
      skills: ["MongoDB", "MySQL", "PostgreSQL", "Redis", "AWS S3", "Database Optimization", "Schema Design"]
    },
    {
      title: "Cloud & DevOps",
      skills: ["AWS (EC2, S3, Lambda)", "Vercel", "GitHub Actions", "CI/CD Pipelines", "Docker", "Nginx"]
    },
    {
      title: "Development Tools",
      skills: ["Git", "GitHub", "Postman", "VS Code", "Chrome DevTools", "ESLint", "Prettier", "Webpack", "Vite"]
    },
    {
      title: "AI & APIs",
      skills: ["OpenAI GPT-4", "AI Integration",  "Third-party APIs"]
    },
    {
      title: "Testing & Quality",
      skills: ["Unit Testing", "Integration Testing", "Performance Optimization", "SEO Optimization", "Lighthouse Audits", "Code Reviews"]
    }
  ];

  return (
    <div className={darkMode ? "dark" : ""}>
      {/* <DesignParticles
        linkColor={darkMode ? "#ffffff" : "#000000"}
        particleColor={darkMode ? "#ffffff" : "#000000"}
      /> */}
      <main className="bg-gray-300  px-4 md:px-10 lg:px-20 dark:bg-gradient-to-t from-black to-gray-900 dark:text-white">
        {/* Modern Sticky Navigation */}
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-lg' 
            : 'bg-transparent'
        }`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center py-4">
              {/* Logo */}
              <div className="flex-shrink-0">
                <h1 className="text-2xl md:text-3xl font-burtons font-bold">
                  <button 
                    onClick={() => scrollToSection('home')} 
                    className="text-gray-800 dark:text-teal-300 hover:text-teal-500 transition duration-300"
                  >
                    Manish Kumar
                  </button>
                </h1>
              </div>
              
              {/* Desktop Navigation */}
              <div className="hidden lg:flex items-center space-x-8">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`px-3 py-2 text-sm font-medium rounded-md transition duration-300 ${
                      activeSection === item.id
                        ? 'text-teal-500 bg-teal-50 dark:bg-teal-900/30'
                        : 'text-gray-700 dark:text-gray-300 hover:text-teal-500'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
                
                {/* Theme Toggle */}
                <button
                  onClick={() => setDarkMode(!darkMode)}
                  className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 transition duration-300 hover:scale-110"
                >
                  {darkMode ? (
                    <BsFillSunFill className="text-yellow-400 text-lg" />
                  ) : (
                    <BsFillMoonStarsFill className="text-gray-700 text-lg" />
                  )}
                </button>
                
                {/* Resume Button */}
                <a
                  href={resume}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-cyan-500 to-teal-500 text-white rounded-md hover:shadow-lg transform transition duration-300 hover:scale-105"
                >
                  <FaDownload className="mr-2" />
                  Resume
                </a>
              </div>
              
              {/* Mobile Menu Button */}
              <div className="lg:hidden flex items-center space-x-2">
                <button
                  onClick={() => setDarkMode(!darkMode)}
                  className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 transition duration-300"
                >
                  {darkMode ? (
                    <BsFillSunFill className="text-yellow-400 text-sm" />
                  ) : (
                    <BsFillMoonStarsFill className="text-gray-700 text-sm" />
                  )}
                </button>
                <button
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  className="p-2 rounded-md text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none transition duration-300"
                >
                  {mobileMenuOpen ? <HiX size={24} /> : <HiMenuAlt3 size={24} />}
                </button>
              </div>
            </div>
            
            {/* Mobile Menu */}
            {mobileMenuOpen && (
              <>
                {/* Mobile Menu Backdrop */}
                <div 
                  className="fixed inset-0 bg-black/70 backdrop-blur-sm z-40 lg:hidden"
                  onClick={() => setMobileMenuOpen(false)}
                ></div>
                
                {/* Mobile Menu Content */}
                <div className="fixed top-0 right-0 h-full w-full bg-white dark:bg-gray-900 shadow-2xl z-50 lg:hidden transform transition-transform duration-300">
                  <div className="flex justify-between items-center p-4 border-b border-gray-200 dark:border-gray-700">
                    <h2 className="text-lg font-semibold text-gray-800 dark:text-white">Menu</h2>
                    <button
                      onClick={() => setMobileMenuOpen(false)}
                      className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                    >
                      <HiX size={24} className="text-gray-600 dark:text-gray-300" />
                    </button>
                  </div>
                  
                  <div className="px-4 py-6 space-y-1 max-h-[calc(100vh-120px)] overflow-y-auto">
                    {navItems.map((item) => (
                      <button
                        key={item.id}
                        onClick={() => scrollToSection(item.id)}
                        className={`block w-full text-left px-4 py-4 text-base font-medium rounded-xl transition-all duration-300 ${
                          activeSection === item.id
                            ? 'text-teal-500 bg-teal-50 dark:bg-teal-900/30 shadow-sm transform scale-105'
                            : 'text-gray-700 dark:text-gray-300 hover:text-teal-500 hover:bg-gray-50 dark:hover:bg-gray-800 hover:transform hover:scale-105'
                        }`}
                      >
                        {item.label}
                      </button>
                    ))}
                    
                    <div className="pt-6 border-t border-gray-200 dark:border-gray-700 space-y-4">
                      {/* Theme Toggle */}
                      <button
                        onClick={() => setDarkMode(!darkMode)}
                        className="flex items-center justify-center w-full p-4 bg-gray-100 dark:bg-gray-800 rounded-xl hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                      >
                        {darkMode ? (
                          <><BsFillSunFill className="text-yellow-400 mr-3" /> Light Mode</>
                        ) : (
                          <><BsFillMoonStarsFill className="text-gray-700 mr-3" /> Dark Mode</>
                        )}
                      </button>
                      
                      {/* Resume Button */}
                      <a
                        href={resume}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center justify-center w-full px-4 py-4 bg-gradient-to-r from-cyan-500 to-teal-500 text-white rounded-xl font-medium shadow-lg hover:shadow-xl transform transition-all duration-300 hover:scale-105"
                      >
                        <FaDownload className="mr-3" />
                        Download Resume
                      </a>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        </nav>

        {/* Hero Section */}
        <section id="home" className="min-h-screen flex items-center relative overflow-hidden">
          {/* Mobile-optimized background gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-cyan-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 opacity-60"></div>
          
          {/* Hero Content */}
          <div className="text-center px-4 lg:px-8 pt-20 pb-12 lg:pt-24 lg:pb-16 max-w-6xl mx-auto w-full relative z-10">
            <div className="animate-fade-in-up">
              <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-800 dark:text-white mb-4 md:mb-6 leading-tight">
                Hi, I'm <span className="bg-gradient-to-r from-cyan-500 to-teal-500 bg-clip-text text-transparent block md:inline mt-2 md:mt-0">Manish Kumar</span>
              </h1>
              <div className="h-12 md:h-16 mb-6 md:mb-8">
                <span
                  className="text-base md:text-lg lg:text-xl xl:text-2xl font-pacifico text-gray-600 dark:text-gray-300 inline-block"
                  ref={el}
                ></span>
              </div>

              <p className="text-base md:text-lg lg:text-xl max-w-4xl mx-auto leading-relaxed text-gray-600 dark:text-gray-300 mb-8 md:mb-12 px-2">
                Passionate Full-Stack Software Engineer specializing in React and Node.js. I build scalable, 
                user-centric web applications that drive business growth and deliver exceptional user experiences.
              </p>
              
              {/* Call-to-Action Buttons */}
              <div className="flex flex-col md:flex-row gap-4 justify-center items-center mb-8 md:mb-12 px-4">
                <button
                  onClick={() => scrollToSection('projects')}
                  className="w-full md:w-auto min-w-[200px] px-8 py-3 bg-gradient-to-r from-cyan-500 to-teal-500 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transform transition-all duration-300 hover:scale-105 text-base active:scale-95"
                >
                  View My Work
                </button>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="w-full md:w-auto min-w-[200px] px-8 py-3 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-full font-semibold hover:border-teal-500 hover:text-teal-500 transition-all duration-300 text-base active:scale-95"
                >
                  Get In Touch
                </button>
              </div>
              
              {/* Quick Contact Info */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 max-w-4xl mx-auto mb-8 md:mb-12 px-4">
                <div className="flex items-center justify-center space-x-3 p-4 bg-white/70 dark:bg-gray-800/70 backdrop-blur rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105 md:col-span-2 lg:col-span-1">
                  <FaEnvelope className="text-teal-500 text-base flex-shrink-0" />
                  <span className="text-sm text-center break-all leading-tight">manishkr061210@gmail.com</span>
                </div>
                <div className="flex items-center justify-center space-x-3 p-4 bg-white/70 dark:bg-gray-800/70 backdrop-blur rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105">
                  <FaPhone className="text-teal-500 text-base flex-shrink-0" />
                  <span className="text-sm leading-tight">+91 9693510834</span>
                </div>
                <div className="flex items-center justify-center space-x-3 p-4 bg-white/70 dark:bg-gray-800/70 backdrop-blur rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105">
                  <FaMapMarkerAlt className="text-teal-500 text-base flex-shrink-0" />
                  <span className="text-sm leading-tight">Godda Jharkhand, India</span>
                </div>
              </div>
              
              {/* Social Media Links */}
              <div className="flex text-4xl md:text-5xl justify-center gap-8 md:gap-16 py-8 text-gray-600">
                <a
                  rel="noreferrer"
                  href="#"
                  target="_blank"
                >
                  <AiFillTwitterCircle className="hover:fill-[#1d9bf0] transform transition duration-500 hover:scale-125 flex justify-center items-center" />
                </a>
                <a
                  rel="noreferrer"
                  href="https://www.linkedin.com/in/dev-manishkumar"
                  target="_blank"
                >
                  <AiFillLinkedin className="hover:fill-[#0a66c2] transform transition duration-500 hover:scale-125 flex justify-center items-center" />
                </a>
                <a
                  rel="noreferrer"
                  href="https://github.com/Manishkr1007"
                  target="_blank"
                >
                  <AiFillGithub className="dark:hover:fill-[#f0f6fc] hover:fill-black transform transition duration-500 hover:scale-125 flex justify-center items-center" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-16 sm:py-20 scroll-mt-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4 sm:mb-6">
                About Me
              </h2>
              <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto px-4">
                I'm a passionate developer who loves creating digital experiences that make a difference
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
              <div className="space-y-4 sm:space-y-6 order-2 lg:order-1">
                <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 leading-relaxed">
                  Full-Stack Software Engineer with strong expertise in React and Node.js, backed by a solid understanding of system design,
                  data structures, and algorithms. Known for building reliable, scalable web solutions that align with user needs and business goals.
                </p>
                <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 leading-relaxed">
                  Comfortable working across the stack, collaborating with teams, and contributing to mission-critical projects.
                  I enjoy turning complex problems into simple, beautiful and intuitive solutions.
                </p>
                
                <div className="space-y-3 sm:space-y-4">
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-800 dark:text-teal-300">What I Do Best:</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-teal-500 rounded-full flex-shrink-0"></div>
                      <span className="text-sm sm:text-base text-gray-700 dark:text-gray-300">Full-stack web application development</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-teal-500 rounded-full flex-shrink-0"></div>
                      <span className="text-sm sm:text-base text-gray-700 dark:text-gray-300">API design and database optimization</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-teal-500 rounded-full flex-shrink-0"></div>
                      <span className="text-sm sm:text-base text-gray-700 dark:text-gray-300">Performance optimization and scalable solutions</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-teal-500 rounded-full flex-shrink-0"></div>
                      <span className="text-sm sm:text-base text-gray-700 dark:text-gray-300">AI integration and modern web technologies</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="flex justify-center order-1 lg:order-2 mb-8 lg:mb-0">
                <div className="relative">
                  <div className="w-60 h-60 sm:w-72 sm:h-72 lg:w-80 lg:h-80 bg-gradient-to-br from-teal-400 to-cyan-600 rounded-full flex items-center justify-center shadow-2xl">
                    <img
                      className="w-52 h-52 sm:w-64 sm:h-64 lg:w-72 lg:h-72 rounded-full object-cover border-4 border-white shadow-lg"
                      src={photo}
                      alt="Manish Kumar"
                    />
                  </div>
                  <div className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 w-16 h-16 sm:w-20 sm:h-20 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg animate-bounce">
                    <span className="text-xl sm:text-2xl">👋</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-16 sm:py-20 scroll-mt-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16">
              <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4 sm:mb-6">Technical Skills</h3>
              <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-4xl mx-auto text-center px-4">
                As a Full-Stack Software Engineer, I specialize in building scalable web applications using modern technologies.
                With experience in both frontend and backend development, I create comprehensive solutions that deliver exceptional user experiences.
              </p>
            </div>
            
            {/* Skills Categories */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-16">
              {skillCategories.map((category, index) => (
                <div key={index} className="group bg-white dark:bg-gray-800 p-6 sm:p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                  <h4 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 text-center text-gray-800 dark:text-teal-300 group-hover:text-teal-500 transition-colors duration-300">
                    {category.title}
                  </h4>
                  <div className="flex flex-wrap gap-2 sm:gap-3 justify-center">
                    {category.skills.map((skill, skillIndex) => (
                      <span 
                        key={skillIndex} 
                        className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium shadow-md hover:shadow-lg transform transition-all duration-300 hover:scale-105 cursor-pointer"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          
            {/* Tech Stack Icons */}
            <div className="text-center">
              <h4 className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-white mb-6 sm:mb-8">Core Technologies</h4>
              <div className="grid grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 lg:gap-6 xl:gap-8 max-w-4xl mx-auto px-2 lg:px-0">
                {tools.map((tool, index) => {
                  return (
                    <div key={index} className="flex flex-col items-center group">
                      <div className="w-16 h-16 lg:w-18 lg:h-18 xl:w-20 xl:h-20 bg-white dark:bg-gray-800 rounded-lg lg:rounded-xl shadow-lg p-3 lg:p-4 transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 group-hover:shadow-2xl">
                        <img 
                          src={tool.image} 
                          alt={tool.name}
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <span className="mt-2 text-sm font-medium text-gray-700 dark:text-gray-300 group-hover:text-teal-500 transition-colors duration-300 text-center">
                        {tool.name}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-20 scroll-mt-20">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-16">
              <h3 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-6">Professional Experience</h3>
              <p className="text-lg text-gray-600 dark:text-gray-300">My journey in the tech industry</p>
            </div>
            
            <div className="space-y-12">
              <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-6">
                  <div className="flex-1">
                    <h4 className="text-2xl font-bold text-gray-800 dark:text-teal-300 mb-2">Full-Stack Developer</h4>
                    <h5 className="text-xl text-cyan-600 dark:text-cyan-400 font-semibold mb-2">Lawazia Tech Pvt. Ltd.</h5>
                    <p className="text-gray-600 dark:text-gray-400">Remote</p>
                  </div>
                  <div className="bg-teal-50 dark:bg-teal-900/30 px-4 py-2 rounded-lg mt-4 lg:mt-0">
                    <p className="text-teal-700 dark:text-teal-300 font-medium">Dec 2024 - Jan 2026</p>
                  </div>
                </div>
                <ul className="space-y-4 text-gray-700 dark:text-gray-300">
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-teal-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <strong className="text-gray-900 dark:text-white">End-to-End API Architecture:</strong> Engineered over 40 RESTful APIs using JavaScript, TypeScript and Node.js, creating a modular backend that powered dynamic frontend features and reduced development time by 25%.
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-teal-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <strong className="text-gray-900 dark:text-white">Database Performance Tuning:</strong> Redesigned schema structures and optimized complex queries in MySQL and MongoDB.
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-teal-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <strong className="text-gray-900 dark:text-white">CI/CD Pipeline Optimization:</strong> Streamlined deployment workflows using CI/CD, reducing manual deployment efforts by 40% and ensuring faster, more reliable delivery of features to production.
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            
            {/* Education Section */}
            <div className="text-center mb-16 mt-20">
              <h3 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-6">Education</h3>
              <p className="text-lg text-gray-600 dark:text-gray-300">Academic background</p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start">
                <div className="flex-1">
                  <h4 className="text-2xl font-bold text-gray-800 dark:text-teal-300 mb-2">B.Tech in Computer Science and Engineering</h4>
                  <h5 className="text-xl text-cyan-600 dark:text-cyan-400 font-semibold mb-2">Dumka Engineering College</h5>
                  <p className="text-gray-600 dark:text-gray-400">Dumka, India</p>
                </div>
                <div className="bg-teal-50 dark:bg-teal-900/30 px-4 py-2 rounded-lg mt-4 lg:mt-0 text-center">
                  <p className="text-teal-700 dark:text-teal-300 font-medium">2021 - 2025</p>
                  <p className="text-teal-700 dark:text-teal-300 font-medium">CGPA: 7.3</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects section */}
        <section id="projects" className="py-16 sm:py-20 scroll-mt-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16">
              <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4 sm:mb-6">Featured Projects</h3>
              <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed px-4">
                In my projects section, you will find a showcase of my technical
                abilities and creativity across a diverse range of fields,
                including AI development, software engineering, web development,
                and more. Each project represents my passion for innovation and my
                commitment to pushing the boundaries of what is possible with
                technology.
              </p>
            </div>

            <div className="flex flex-col space-y-6 lg:grid lg:grid-cols-2 lg:space-y-0 xl:grid-cols-3 lg:gap-8">{/* Projects will be here */}
            {/* Quizzoai Project */}
            <div className="group bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden mx-2 lg:mx-0">
              <div className="relative overflow-hidden">
                <img src={quizzo} alt="Quizzoai" className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-300" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-6">
                <h4 className="text-xl font-bold mb-2 text-gray-800 dark:text-teal-300 group-hover:text-teal-500 transition-colors duration-300">Quizzoai</h4>
                <p className="text-sm text-cyan-600 dark:text-cyan-400 mb-3 font-medium">AI-Powered Learning Platform</p>
                <p className="text-sm text-gray-700 dark:text-gray-300 mb-4 line-clamp-3">
                  A comprehensive educational technology platform that leverages AI to create personalized learning experiences with dynamic question generation and real-time feedback.
                </p>
                
                <div className="mb-4">
                  <div className="flex flex-wrap gap-1 mb-3">
                    {["Next.js", "TypeScript", "AI", "MongoDB"].map(tech => (
                      <span key={tech} className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-2 py-1 rounded text-xs">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex gap-3">
                  <a 
                    href="https://www.quizzoai.online/" 
                    className="flex-1 bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-600 hover:to-teal-600 text-white px-4 py-2 rounded-lg text-sm text-center transition duration-300 transform hover:scale-105"
                  >
                    Live Demo
                  </a>
                  <a 
                    href="https://github.com/Manishkr1007/QuizzoAI" 
                    className="flex-1 bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded-lg text-sm text-center transition duration-300 transform hover:scale-105"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>

            {/* MeetSense AI Project */}
            <div className="group bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden mx-2 md:mx-0">
              <div className="relative overflow-hidden">
                <img src={meetai} alt="MeetSense AI" className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-300" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-6">
                <h4 className="text-xl font-bold mb-2 text-gray-800 dark:text-teal-300 group-hover:text-teal-500 transition-colors duration-300">MeetSense AI</h4>
                <p className="text-sm text-cyan-600 dark:text-cyan-400 mb-3 font-medium">Intelligent Meeting Platform</p>
                <p className="text-sm text-gray-700 dark:text-gray-300 mb-4 line-clamp-3">
                  Revolutionary AI-powered meeting platform with intelligent agents, real-time transcription, and automated insights powered by GPT-4.
                </p>
                
                <div className="mb-4">
                  <div className="flex flex-wrap gap-1 mb-3">
                    {["Next.js 15", "React 19", "Stream SDK", "OpenAI"].map(tech => (
                      <span key={tech} className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-2 py-1 rounded text-xs">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex gap-3">
                  <a 
                    href="https://meetsense.vercel.app/" 
                    className="flex-1 bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-600 hover:to-teal-600 text-white px-4 py-2 rounded-lg text-sm text-center transition duration-300 transform hover:scale-105"
                  >
                    Live Demo
                  </a>
                  <a 
                    href="https://github.com/Manishkr1007/meet-senseAi" 
                    className="flex-1 bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded-lg text-sm text-center transition duration-300 transform hover:scale-105"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>

            {/* TinyLink Project */}
            <div className="group bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden mx-2 md:mx-0">
              <div className="relative overflow-hidden">
                <img src={tinylink} alt="TinyLink" className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-300" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-6">
                <h4 className="text-xl font-bold mb-2 text-gray-800 dark:text-teal-300 group-hover:text-teal-500 transition-colors duration-300">TinyLink</h4>
                <p className="text-sm text-cyan-600 dark:text-cyan-400 mb-3 font-medium">URL Shortening Service</p>
                <p className="text-sm text-gray-700 dark:text-gray-300 mb-4 line-clamp-3">
                  A fast and efficient URL shortening application with custom short codes and reliable redirect functionality.
                </p>
                
                <div className="mb-4">
                  <div className="flex flex-wrap gap-1 mb-3">
                    {["Next.js", "TypeScript", "Prisma", "Express.js"].map(tech => (
                      <span key={tech} className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-2 py-1 rounded text-xs">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex gap-3">
                  <a 
                    href="https://ti-snowy.vercel.app/" 
                    className="flex-1 bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-600 hover:to-teal-600 text-white px-4 py-2 rounded-lg text-sm text-center transition duration-300 transform hover:scale-105"
                  >
                    Live Demo
                  </a>
                  <a 
                    href="https://github.com/Manishkr1007/ti" 
                    className="flex-1 bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded-lg text-sm text-center transition duration-300 transform hover:scale-105"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        </section>

        {/* Achievements Section */}
        <section className="py-20">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-16">
              <h3 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-6">Achievements</h3>
              <p className="text-lg text-gray-600 dark:text-gray-300">Recognition for my contributions to the tech community</p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 px-2 lg:px-0">
              <div className="group bg-white dark:bg-gray-800 p-6 md:p-8 rounded-lg md:rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-lg">🏆</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2 text-gray-800 dark:text-teal-300">Social Summer of Code 2023</h4>
                    <p className="text-gray-700 dark:text-gray-300">
                      Achieved <strong>Top Contributor</strong> status across 10+ repositories, focusing on building reusable React components and contributing to open-source projects.
                    </p>
                  </div>
                </div>
              </div>
              <div className="group bg-white dark:bg-gray-800 p-6 md:p-8 rounded-lg md:rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-lg">👨‍💻</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2 text-gray-800 dark:text-teal-300">GirlScript Summer of Code 2024</h4>
                    <p className="text-gray-700 dark:text-gray-300">
                      <strong>Project Admin (WordWaver):</strong> Managed the open-source project WordWaver as a Project Administrator. 
                      Guided contributors, reviewed pull requests, assigned issues, and ensured smooth project collaboration throughout the program.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-16 sm:py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16">
              <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4 sm:mb-6">My Journey</h3>
              <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300">My life and career milestones</p>
            </div>
            <MyTimeline />
          </div>
        </section>

        {/* Certifications section */}
        <section className="py-16 sm:py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16">
              <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4 sm:mb-6">Certifications</h3>
              <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto px-4">
                I have completed many courses and certifications. Here are some of
                them. I am always learning new things and trying to improve my
                skills. I am currently learning React js.
              </p>
            </div>
            <div className="px-4">
              <Carousel />
            </div>
          </div>
        </section>

        {/* Contact and footer */}
        <section id="contact" className="py-16 sm:py-20 scroll-mt-20 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16">
              <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4 sm:mb-6">Get In Touch</h3>
              <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto px-4">
                I'd love to hear from you! Whether you have a project in mind or just want to chat about technology.
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">
              {/* Contact Form */}
              <div className="bg-white dark:bg-gray-800 p-6 sm:p-8 rounded-xl shadow-lg order-2 lg:order-1">
                <h4 className="text-xl sm:text-2xl font-semibold mb-6 text-gray-800 dark:text-teal-300 text-center lg:text-left">Send a Message</h4>
                <form
                  className="space-y-4 sm:space-y-6"
                  action="mailto:manishkr061210@gmail.com"
                  method="post"
                  encType="text/plain"
                >
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Name</label>
                    <input
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition duration-300"
                      type="text"
                      placeholder="Your full name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Email</label>
                    <input
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition duration-300"
                      type="email"
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Message</label>
                    <textarea
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition duration-300 resize-vertical"
                      rows="5"
                      placeholder="Tell me about your project or just say hello..."
                      value={messege}
                      onChange={(e) => setMessege(e.target.value)}
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-600 hover:to-teal-600 text-white font-semibold px-6 py-3 rounded-lg shadow-lg hover:shadow-xl transform transition-all duration-300 hover:scale-105"
                  >
                    Send Message
                  </button>
                </form>
              </div>
              
              {/* Contact Info & Thank You */}
              <div className="space-y-6 sm:space-y-8 order-1 lg:order-2">
                <div className="text-center lg:text-left">
                  <h4 className="text-2xl sm:text-3xl lg:text-4xl font-pacifico text-gray-800 dark:text-teal-300 mb-4 sm:mb-6">
                    Thanks for visiting!
                  </h4>
                  <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
                    I'm always excited to work on new projects and collaborate with amazing people. 
                    Let's build something great together!
                  </p>
                </div>
                
                {/* Contact Details */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4 sm:gap-6">
                  <div className="flex items-center space-x-3 sm:space-x-4 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
                    <FaEnvelope className="text-teal-500 text-lg sm:text-xl flex-shrink-0" />
                    <div>
                      <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">Email</p>
                      <p className="text-sm sm:text-base font-medium text-gray-800 dark:text-white break-all">manishkr061210@gmail.com</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 sm:space-x-4 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
                    <FaPhone className="text-teal-500 text-lg sm:text-xl flex-shrink-0" />
                    <div>
                      <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">Phone</p>
                      <p className="text-sm sm:text-base font-medium text-gray-800 dark:text-white">+91 9693510834</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 sm:space-x-4 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm sm:col-span-2 lg:col-span-1">
                    <FaMapMarkerAlt className="text-teal-500 text-lg sm:text-xl flex-shrink-0" />
                    <div>
                      <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">Location</p>
                      <p className="text-sm sm:text-base font-medium text-gray-800 dark:text-white">Dumka, India</p>
                    </div>
                  </div>
                </div>
                
                {/* Coffee & QR Code */}
                <div className="flex flex-col items-center space-y-4 sm:space-y-6 pt-4 sm:pt-6">
                  <div className="transform hover:scale-105 transition-transform duration-300">
                    <Coffee image={darkMode ? buyMeACoffee : bmcbuttonwhite} />
                  </div>
                  <div className="transform hover:scale-105 transition-transform duration-300">
                    <QRcode image={bmcQrCode} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Footer Spacer */}
        <div className="h-6 sm:h-10 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800"></div>
      </main>
    </div>
  );
};

export default App;
