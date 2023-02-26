import { Element } from 'react-scroll';
import html from '/skills/html.png';
import css from '/skills/css.png';
import sass from '/skills/sass.png';
import tailwind from '/skills/tailwindcss.png';
import git from '/skills/git.png';
import javascript from '/skills/javascript.png';
import typescript from '/skills/typescript.png';
import react from '/skills/reactjs.png';
import next from '/skills/nextjs.png';
import node from '/skills/nodejs.png';
import express from '/skills/express.png';
import postgres from '/skills/postgres.png';
import linux from '/skills/linux-22621.png';
import mongo from '/skills/mongodb.png';
import python from '/skills/python.png';


const Skills = () => {
  return (
    <Element
      name="skills"
      className="md:h-screen w-full text-gray-300"
    >
      {/* Container */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full my-8">
        <div className='mt-10'>
          <p className="text-4xl font-bold inline border-b-4 border-[#2FA4FF] ">
            Skills
          </p>
          <p className="py-4 text-lg lg:text-xl">
            {' '}
            These are the technologies I've worked with
          </p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-5 gap-2 text-center py-8">
          {/* HTML */}
          <div className="shadow-md mb-3 md:mb-8 hover:scale-110 duration-500">
            <img className="w-14 md:w-16 mx-auto" src={html} alt="HTML icon" />
            <p className="my-4">HTML</p>
          </div>

          {/* CSS */}
          <div className="shadow-md mb-3 md:mb-8 hover:scale-110 duration-500">
            <img className="w-14 md:w-16 mx-auto" src={css} alt="CSS icon" />
            <p className="my-4">CSS</p>
          </div>

          {/* Tailwind CSS */}
          <div className="shadow-md mb-3 md:mb-8 hover:scale-110 duration-500">
            <img className="w-14 md:w-16 mx-auto" src={tailwind} alt="Tailwind icon" />
            <p className="mt-10">Tailwind CSS</p>
          </div>

          {/* SASS */}
          <div className="shadow-md mb-3 md:mb-8 hover:scale-110 duration-500">
            <img className="w-14 md:w-16 mx-auto" src={sass} alt="Sass icon" />
            <p className="my-4">SASS</p>
          </div>

          {/* Javascript */}
          <div className="shadow-md mb-3 md:mb-8 hover:scale-110 duration-500">
            <img
              className="w-14 md:w-16 mx-auto"
              src={javascript}
              alt="Javascript icon"
            />
            <p className="my-4">Javascript</p>
          </div>

           {/* Typescript */}
           <div className="shadow-md mb-3 md:mb-8 hover:scale-110 duration-500">
            <img
              className="w-14 md:w-16 mx-auto"
              src={typescript}
              alt="Typescript icon"
            />
            <p className="my-4">Typescript</p>
          </div>

          {/* React */}
          <div className="shadow-md mb-3 md:mb-8 hover:scale-110 duration-500">
            <img className="w-14 md:w-16 mx-auto" src={react} alt="React icon" />
            <p className="my-4">React JS</p>
          </div>

          {/* Next */}
          <div className="shadow-md mb-3 md:mb-8 hover:scale-110 duration-500">
            <img className="w-14 md:w-16 mx-auto" src={next} alt="Next icon" />
            <p className="my-4">Next JS</p>
          </div>

          {/* Node JS */}
          <div className="shadow-md mb-3 md:mb-8 hover:scale-110 duration-500">
            <img className="w-14 md:w-16 mx-auto" src={node} alt="Node.js icon" />
            <p className="my-4">Node JS</p>
          </div>

           {/* Express JS */}
           <div className="shadow-md mb-3 md:mb-8 hover:scale-110 duration-500">
            <img className="w-14 md:w-16 mx-auto" src={express} alt="Express js icon" />
            <p className="my-4">Express JS</p>
          </div>

            {/* Python */}
            <div className="shadow-md mb-3 md:mb-8 hover:scale-110 duration-500">
            <img className="w-14 md:w-16 mx-auto" src={python} alt="Python.js icon" />
            <p className="my-4">Python</p>
          </div>

          {/* Git */}
          <div className="shadow-md mb-3 md:mb-8 hover:scale-110 duration-500">
            <img className="w-14 md:w-16 mx-auto" src={git} alt="Git icon" />
            <p className="my-4">Git</p>
          </div>

          {/* PostgreSQL */}
          <div className="shadow-md mb-3 md:mb-8 hover:scale-110 duration-500">
            <img
              className="w-14 md:w-16 mx-auto"
              src={postgres}
              alt="Postgresql icon"
            />
            <p className="my-4">PostgreSQL</p>
          </div>

          {/* MongoDB*/}
          <div className="shadow-md mb-3 md:mb-8 hover:scale-110 duration-500">
            <img className="w-14 md:w-16 mx-auto" src={mongo} alt="MongoDB icon" />
            <p className="my-4">MongoDB</p>
          </div>

          {/* Linux distributions */}
          <div className="shadow-md mb-3 md:mb-8 hover:scale-110 duration-500">
            <img className="w-14 md:w-16 mx-auto" src={linux} alt="Linux icon" />
            <p className="my-4">GNU Linux</p>
          </div>
        </div>
      </div>
    </Element>
  );
};

export default Skills;
