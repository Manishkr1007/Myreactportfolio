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

  JavaScript,
  WordWeaver,
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
        "Student.",
        "Developer.",
        "Programmer.",
        "Designer.",
        "Learner.",
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
      name: "Node.js",
      image: NodeJS,
    },
   
    {
      name: "MongoDB",
      image: MongoDB,
    },
    {
      name: "React.js",
      image: ReactJS,
    },
    {
      name: "Express.js",
      image: ExpressJS,
    },
    
    {
      name: "JavaScript",
      image: JavaScript,
    },
  ];

  return (
    <div className={darkMode ? "dark" : ""}>
      <DesignParticles
        linkColor={darkMode ? "#ffffff" : "#000000"}
        particleColor={darkMode ? "#ffffff" : "#000000"}
      />
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

            <p className="text-medium md:text-xl max-w-lg dark:text-teal-600 mx-auto leading-8 text-gray-800 mt-8">
              Hello World! I am Manish Kumar and I am a Computer Science undergrad
              student from India. I am a frontend developer and a programmer. I
              love to code and design. I am a self taught developer and I am
              always learning new things. Here are my socials. Do check them out
              and thanks for visiting this page.
            </p>
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
              href="https://www.linkedin.com/in/manish-kumar-he-him-5292b8247/"
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
            <h3 className="text-3xl py-1 mt-20 mb-4">Services</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-teal-600 text-md flex text-center">
              As a front end developer, I can make beautiful, simplistic and
              minimal frontend designs with maximum functionality to offer. Here
              are some key features. If you like this, feel free to reach out
              from the feedback section below.
            </p>
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

          <div className="lg:flex flex-wrap gap-16 md:flex items-start justify-center p-2">
           
            <Project
              image={imagenationLogo}
              githubLink={"https://github.com/Manishkr1007/PixelGen"}
              projectLink={""}
              name={"PixelGen"}
              details={
                "This is a web app which produces images using AI by taking some input text(prompt) from user. Built using MERN stack and OpenAI API."
              }
              className="w-1/4"
            />
            <Project
              image={portPhoto}
              githubLink={""}
              projectLink={""}
              name={"My personal portfolio website"}
              details={
                "I have developed a personalized portfolio using React.js, Tailwind CSS, and Material UI. This portfolio showcases my skills, experiences, and projects in a visually appealing and user-friendly manner. React.js, a popular JavaScript library, serves as the foundation for the portfolio. It enables me to build reusable and modular components, ensuring efficient and maintainable code. With React.js, the portfolio offers a seamless and interactive user experience, allowing smooth navigation and dynamic content updates. Tailwind CSS and Material UI were used to enhance the visual aesthetics of the portfolio."
              }
              className="w-1/4"
            />
            <Project
              image={WordWeaver}
              githubLink={"https://github.com/Manishkr1007/WordWeaver"}
              projectLink={"hhttps://word-weaver-rho.vercel.app/"}
              name={"WordWeaver - A blogging website "}
              details={
                "WordWeaver is a blogging website. It is a full stack web app built using React with Appwrite . It is a blogging website where users can write blogs . It is a platform where users can share their thoughts and ideas with the world."
              }
              className="w-1/4"
            />
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
