import React from "react";
import { useState } from "react";
import Typed from "typed.js";
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillTwitterCircle,
} from "react-icons/ai";
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
      skills: ["OpenAI GPT-4", "AI Integration", "Prompt Engineering", "Stream SDK", "Third-party APIs", "Webhook Integration"]
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
      <main className="bg-gray-300  px-10 md:px-20 lg:px-40 dark:bg-gradient-to-t from-black to-gray-900 dark:text-white">
        {/* Header section */}
        <section>
          <nav className="py-10 mb-6 flex justify-between">
            <h1 className="text-3xl font-burtons">
              <a href="#">Manish kumar</a>
            </h1>
            <ul className="flex items-center">
              <li>
                {darkMode ? (
                  <BsFillSunFill
                    onClick={() => setDarkMode(!darkMode)}
                    className="cursor-pointer fill-yellow-400 text-2xl transition duration-500 hover:scale-125 ease-in-out"
                  />
                ) : (
                  <BsFillMoonStarsFill
                    onClick={() => setDarkMode(!darkMode)}
                    className="cursor-pointer fill-slate-900 text-xl transition duration-500 hover:scale-125 ease-in-out"
                  />
                )}
              </li>
              <li>
                <a
                  rel="noreferrer"
                  className="bg-gradient-to-r hover:bg-gradient-to-l from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md 
              ml-8"
                  href={resume}
                  target="_blank"
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>

          {/* Above page */}
          <div className="text-center p-8">
            <h2 className="text-6xl py-4 text-gray-800 dark:text-teal-300 font-medium mb-4">
             Manish Kumar
            </h2>
            <span
              className="text-2xl md:text-3xl sm:text-2xl py-8 m-4 font-pacifico text-gray-600"
              ref={el}
            ></span>

            <p className="text-medium md:text-xl max-w-4xl dark:text-teal-600 mx-auto leading-8 text-gray-800 mt-8">
              Full-Stack Software Engineer with strong expertise in React and Node.js, backed by a solid understanding of system design,
              data structures, and algorithms. Known for building reliable, scalable web solutions that align with user needs and business goals.
              Comfortable working across the stack, collaborating with teams, and contributing to mission-critical projects.
            </p>
            <div className="mt-8 p-6 bg-gray-100 dark:bg-gray-800 rounded-lg max-w-2xl mx-auto">
              <h3 className="text-xl font-semibold mb-4 text-center">Contact Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div className="text-center">
                  <strong>Email:</strong> manishkr061210@gmail.com
                </div>
                <div className="text-center">
                  <strong>Phone:</strong> +91 9693510834
                </div>
              </div>
            </div>
          </div>
          <div className="flex text-5xl justify-center gap-16 py-3 text-gray-600">
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
              <AiFillLinkedin className="hover:fill-[#0a66c2]  transform transition duration-500 hover:scale-125 flex justify-center items-center" />
            </a>
            <a
              rel="noreferrer"
              href="https://github.com/Manishkr1007"
              target="_blank"
            >
              <AiFillGithub className="dark:hover:fill-[#f0f6fc] hover:fill-black  transform transition duration-500 hover:scale-125 flex justify-center items-center" />
            </a>
          </div>

          {/* Avatar */}
          <div
            className="bg-gradient-to-b from-teal-500 rounded-full mt-16 mx-auto overflow-hidden relative flex cursor-pointer 
          transition duration-500 hover:scale-105 sm:h-52 sm:w-52 md:h-64 md:w-64 lg:h-72 lg:w-72 justify-center items-center"
          >
            <img
              className="object-cover w-full h-full flex items-center"
              src={photo}
              // onMouseOver={() => setOver(true)}
              // onMouseOut={() => setOver(false)}
            />
          </div>
        </section>

        {/* About section */}

        <section className="shadow-lg mt-5">
          <div className="flex flex-col items-center">
            <h3 className="text-3xl py-1 mt-20 mb-4">Technical Skills</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-teal-600 text-md flex text-center max-w-4xl">
              As a Full-Stack Software Engineer, I specialize in building scalable web applications using modern technologies.
              With experience in both frontend and backend development, I create comprehensive solutions that deliver exceptional user experiences.
            </p>
          </div>
          
          {/* Skills Categories */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 py-10">
            {skillCategories.map((category, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
                <h4 className="text-xl font-semibold mb-4 text-center text-gray-800 dark:text-teal-300">
                  {category.title}
                </h4>
                <div className="flex flex-wrap gap-2 justify-center">
                  {category.skills.map((skill, skillIndex) => (
                    <span 
                      key={skillIndex} 
                      className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-3 py-1 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
          
          {/* Tech Stack Icons */}
          <div className="flex flex-col items-center">
            <h4 className="text-xl py-4 mb-4">Core Technologies</h4>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 pb-10">
            {tools.map((tool, index) => {
              return (
                <div key={index} className="items-center flex justify-center">
                  <div className="items-center">
                    <div className="w-[100px]">
                      <img src={tool.image} />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Experience Section */}
        <section className="shadow-lg mt-5">
          <div className="flex flex-col items-center">
            <h3 className="text-3xl py-1 mt-20 mb-8">Professional Experience</h3>
            <div className="max-w-4xl mx-auto">
              <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                  <div>
                    <h4 className="text-2xl font-semibold text-gray-800 dark:text-teal-300">Full-Stack Developer</h4>
                    <h5 className="text-xl text-cyan-600 dark:text-cyan-400 font-medium">Lawazia Tech Pvt. Ltd.</h5>
                  </div>
                  <div className="text-right">
                    <p className="text-gray-600 dark:text-gray-300">Remote</p>
                    <p className="text-gray-600 dark:text-gray-300">Dec 2024 - Jan 2026</p>
                  </div>
                </div>
                <ul className="list-disc list-inside space-y-3 text-gray-700 dark:text-gray-300">
                  <li><strong>End-to-End API Architecture:</strong> Engineered over 40 RESTful APIs using JavaScript, TypeScript and Node.js, creating a modular backend that powered dynamic frontend features and reduced development time by 25%.</li>
                  <li><strong>Database Performance Tuning:</strong> Redesigned schema structures and optimized complex queries in MySQL and MongoDB.</li>
                  <li><strong>CI/CD Pipeline Optimization:</strong> Streamlined deployment workflows using CI/CD, reducing manual deployment efforts by 40% and ensuring faster, more reliable delivery of features to production.</li>
                </ul>
              </div>
            </div>
            
            {/* Education Section */}
            <h3 className="text-3xl py-1 mt-20 mb-8">Education</h3>
            <div className="max-w-4xl mx-auto">
              <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start">
                  <div>
                    <h4 className="text-2xl font-semibold text-gray-800 dark:text-teal-300">B.Tech in Computer Science and Engineering</h4>
                    <h5 className="text-xl text-cyan-600 dark:text-cyan-400 font-medium">Dumka Engineering College</h5>
                    <p className="text-gray-600 dark:text-gray-300">Dumka, India</p>
                  </div>
                  <div className="text-right">
                    <p className="text-gray-600 dark:text-gray-300">2021 - 2025</p>
                    <p className="text-gray-600 dark:text-gray-300">CGPA: 7.3</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects section */}
        <section className="shadow-lg mt-5 p-2 flex flex-col">
          <div className="flex flex-col items-center">
            <h3 className="text-3xl py-1 mt-20 mb-3">Projects</h3>
            <p className="text-md p-4 leading-8 text-gray-800 dark:text-teal-600 flex text-center">
              In my projects section, you will find a showcase of my technical
              abilities and creativity across a diverse range of fields,
              including AI development, software engineering, web development,
              and more. Each project represents my passion for innovation and my
              commitment to pushing the boundaries of what is possible with
              technology. With a focus on practicality and usefulness, my
              projects demonstrate my ability to develop intelligent and
              effective solutions to real-world problems. Browse through my
              portfolio to discover the range and depth of my technical
              expertise.
            </p>
          </div>

          <div className="lg:flex flex-wrap gap-8 md:flex items-start justify-center p-2">
            {/* Quizzoai Project */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg max-w-md">
              <div className="mb-4">
                <img src={quizzo} alt="Quizzoai" className="w-full h-48 object-cover rounded-lg" />
              </div>
              <h4 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-teal-300">Quizzoai - AI-Powered Online Test Series & Learning Platform</h4>
              <p className="text-sm text-cyan-600 dark:text-cyan-400 mb-4">Comprehensive Educational Technology Platform</p>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-4">
                A comprehensive educational technology platform that leverages artificial intelligence to create personalized learning experiences. 
                Features dynamic question generation from any topic using AI, real-time test evaluation with instant feedback, 
                gamification with coin-based reward system, and personal AI chatbot for learning guidance.
              </p>
              <div className="mb-4">
                <h5 className="text-sm font-semibold text-gray-800 dark:text-teal-300 mb-2">Key Features:</h5>
                <ul className="list-disc list-inside space-y-1 text-xs text-gray-700 dark:text-gray-300">
                  <li>Dynamic question generation from any topic or paragraph using AI</li>
                  <li>Real-time test evaluation with instant feedback</li>
                  <li>Gamification with coin-based reward system</li>
                  <li>Personal AI chatbot for learning guidance</li>
                  <li>Performance tracking and analytics</li>
                  <li>Responsive design optimized for all devices</li>
                  <li>35% performance improvement through SSR optimization</li>
                  <li>Lighthouse score increased from 92 to 98</li>
                </ul>
              </div>
              <div className="mb-4">
                <h5 className="text-sm font-semibold text-gray-800 dark:text-teal-300 mb-2">Tech Stack:</h5>
                <div className="flex flex-wrap gap-1">
                  {["Next.js ", "TypeScript", "Tailwind CSS", "Fastify", "Node.js", "MongoDB", "OpenAI API", "JWT Auth", "Vercel"].map(tech => (
                    <span key={tech} className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-2 py-1 rounded text-xs">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex gap-4">
                <a href="https://www.quizzoai.online/" className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded text-sm">Live Demo</a>
                <a href="https://github.com/Manishkr1007/QuizzoAI" className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded text-sm">GitHub</a>
              </div>
            </div>

            {/* MeetSense AI Project */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg max-w-md">
              <div className="mb-4">
                <img src={meetai} alt="MeetSense AI" className="w-full h-48 object-cover rounded-lg" />
              </div>
              <h4 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-teal-300">MeetSense AI - Intelligent Meeting Agent Platform</h4>
              <p className="text-sm text-cyan-600 dark:text-cyan-400 mb-4">AI-Powered Meeting Management & Collaboration Suite</p>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-4">
                Revolutionary AI-powered meeting platform that transforms how teams collaborate. Features intelligent meeting agents 
                that can facilitate discussions, take notes, and provide real-time insights. The platform includes automated 
                transcription, smart scheduling, and comprehensive post-meeting analytics powered by GPT-4.
              </p>
              <div className="mb-4">
                <h5 className="text-sm font-semibold text-gray-800 dark:text-teal-300 mb-2">Core Features:</h5>
                <ul className="list-disc list-inside space-y-1 text-xs text-gray-700 dark:text-gray-300">
                  <li>Customizable AI agents for different meeting types and roles</li>
                  <li>Real-time transcription with speaker identification</li>
                  <li>Automated meeting summaries with action items extraction</li>
                  <li>Live interaction capabilities with voice and text commands</li>
                  <li>Integration with popular calendar and productivity tools</li>
                  <li>Advanced analytics and meeting performance insights</li>
                  <li>Secure authentication and enterprise-grade security</li>
                </ul>
              </div>
              <div className="mb-4">
                <h5 className="text-sm font-semibold text-gray-800 dark:text-teal-300 mb-2">Tech Stack:</h5>
                <div className="flex flex-wrap gap-1">
                  {["Next.js 15", "React 19", "TypeScript", "Stream SDK", "Better Auth", "Polar SDK", "OpenAI API", "tRPC", "Drizzle ORM", "Neon Database", "TailwindCSS 4", "React Query", "Framer Motion", "Radix UI", "WebRTC", "Inngest", "Zod"].map(tech => (
                    <span key={tech} className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-2 py-1 rounded text-xs">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex gap-4">
                <a href="https://meetsense.vercel.app/" className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded text-sm">Live Demo</a>
                <a href="https://github.com/Manishkr1007/meet-senseAi" className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded text-sm">GitHub</a>
              </div>
            </div>

            {/* TinyLink Project */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg max-w-md">
              <div className="mb-4">
                <img src={tinylink} alt="TinyLink" className="w-full h-48 object-cover rounded-lg" />
              </div>
              <h4 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-teal-300">TinyLink - URL Shortening Service</h4>
              <p className="text-sm text-cyan-600 dark:text-cyan-400 mb-4">Simple & Fast URL Shortener</p>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-4">
                A basic yet efficient URL shortening application that allows users to convert long URLs into shorter, more manageable links. 
                Users can paste any long URL, optionally choose a custom short code, and receive a shortened link that redirects visitors to the original destination.
              </p>
              <div className="mb-4">
                <h5 className="text-sm font-semibold text-gray-800 dark:text-teal-300 mb-2">Key Features:</h5>
                <ul className="list-disc list-inside space-y-1 text-xs text-gray-700 dark:text-gray-300">
                  <li>Instant URL shortening with one-click operation</li>
                  <li>Custom short code option for personalized links</li>
                  <li>Reliable redirect functionality</li>
                  <li>Clean and intuitive user interface</li>
                  <li>Fast and lightweight application</li>
                  <li>Responsive design for all devices</li>
                </ul>
              </div>
              <div className="mb-4">
                <h5 className="text-sm font-semibold text-gray-800 dark:text-teal-300 mb-2">Tech Stack:</h5>
                <div className="flex flex-wrap gap-1">
                  {["Next.js", "React", "TypeScript", "Tailwind CSS", "Express.js", "Prisma ORM", "Node.js", "CORS", "Vercel"].map(tech => (
                    <span key={tech} className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-2 py-1 rounded text-xs">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex gap-4">
                <a href="https://ti-snowy.vercel.app/" className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded text-sm">Live Demo</a>
                <a href="https://github.com/Manishkr1007/ti" className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded text-sm">GitHub</a>
              </div>
            </div>

            {/* <Project
              image={WordWeaver}
              githubLink={"https://github.com/Manishkr1007/WordWeaver"}
              projectLink={"https://word-weaver-rho.vercel.app/"}
              title={"WordWeaver"}
              description={
                "Full-stack blogging platform with rich text editing, user authentication, and content management. Features real-time editing, image uploads, responsive design, and comprehensive user management system. Built as an open-source project during GirlScript Summer of Code 2024."
              }
              technologies={["React 18", "Appwrite", "React Router", "TinyMCE", "Tailwind CSS", "React Hook Form", "Vercel", "Redux Toolkit"]}
              className="w-1/4"
            /> */}
          </div>
        </section>

        {/* Achievements Section */}
        <section className="shadow-lg mt-5">
          <div className="flex flex-col items-center">
            <h3 className="text-3xl py-1 mt-20 mb-8">Achievements</h3>
            <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
                <h4 className="text-xl font-semibold mb-4 text-gray-800 dark:text-teal-300">Social Summer of Code 2023</h4>
                <p className="text-gray-700 dark:text-gray-300">
                  Achieved <strong>Top Contributor</strong> status across 10+ repositories, focusing on building reusable React components and contributing to open-source projects.
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
                <h4 className="text-xl font-semibold mb-4 text-gray-800 dark:text-teal-300">GirlScript Summer of Code 2024</h4>
                <p className="text-gray-700 dark:text-gray-300">
                  <strong>Project Admin (WordWaver):</strong> Managed the open-source project WordWaver as a Project Administrator. 
                  Guided contributors, reviewed pull requests, assigned issues, and ensured smooth project collaboration throughout the program.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Timeline */}

        <section className="shadow-lg mt-5">
          <div className="lg:flex gap-16 md:flex p-5 flex-col items-center relative">
            <h3 className=" flex justify-center text-3xl py-1 mt-20 mb-3">
              My Life
            </h3>
            <MyTimeline />
          </div>
        </section>

        {/* Certifications section  */}
        <section className="shadow-lg mt-5">
          <div className="lg:flex gap-16 md:flex p-5 flex-col items-center relative">
            <h3 className=" flex justify-center text-3xl py-1 mt-20 mb-3">
              Certifications
            </h3>
            <p className="text-md p-4 leading-8 text-gray-800 dark:text-teal-600 flex text-center">
              I have completed many courses and certifications. Here are some of
              them. I am always learning new things and trying to improve my
              skills. I am currently learning React js.
            </p>
            <Carousel />
          </div>
        </section>

        {/* Communication and footer */}
        <section className="shadow-lg mt-5">
          <div className="lg:flex gap-16 md:flex mt-20 p-5">
            <div className="flex flex-col items-center mb-5">
              <h3 className="font-semibold text-lg p-4">Feedback Form</h3>
              <form
                className="items-start flex p-4 flex-col"
                action="mailto:manishkr061210@gmail.com"
                method="post"
                encType="text/plain"
              >
                Name:
                <input
                  className="w-full border border-solid border-black p-2 mb-2  dark:bg-inherit dark:border-white"
                  type="text"
                  placeholder="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                email:
                <input
                  className="w-full border border-solid border-black p-2 mb-2 dark:bg-inherit dark:border-white"
                  type="email"
                  placeholder="your email address"
                />
                Messege:
                <textarea
                  className="w-full border border-black p-2 mb-2  dark:bg-inherit dark:border-white"
                  rows="4"
                  cols="50"
                  value={messege}
                  onChange={(e) => setMessege(e.target.value)}
                />
                <input
                  type="submit"
                  className="bg-gradient-to-r hover:bg-gradient-to-l from-cyan-500 to-teal-500 px-4 py-2 rounded-md p-4 cursor-pointer text-white"
                />
              </form>
            </div>
            <div className="flex flex-col items-center justify-center">
              <div className="flex flex-col items-center justify-center gap-6">
                <h3 className="font-pacifico text-4xl underline items-center flex text-center">
                  Thanks for visiting
                </h3>
                <Coffee image={darkMode ? buyMeACoffee : bmcbuttonwhite} />
                <QRcode image={bmcQrCode} />
              </div>
            </div>
          </div>
        </section>
        <div className="h-10"></div>
      </main>
    </div>
  );
};

export default App;
