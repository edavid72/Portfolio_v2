import { FaGithub } from 'react-icons/fa';
import { BsGlobe2 } from 'react-icons/bs';
import { Element } from 'react-scroll';
import bushido from '/projects/code-bushido.png';

const Work = () => {
  return (
    <Element name="work" className="w-full text-gray-300">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="md:pb-6 mt-12">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-[#2FA4FF]">
            Work
          </p>
          <p className="py-6 text-lg lg:text-xl">
            Check out some of my recent work
          </p>
        </div>

        {/* Card: Start */}
        <div className="py-5 px-1 mb-6 md:p-6 border-b-2">
          {/* Text:xs-sm */}
          <p className="text-[#2FA4FF] text-lg font-extralight md:hidden">
            1. Personal Project
          </p>
          <h2 className="font-bold text-lg md:hidden">
            Code Bushido Manga & Anime Shop
          </h2>

          {/* Content */}
          <div className="md:grid md:grid-cols-2 md:gap-4">
            {/* Image Content */}
            <div className="border-2 rounded-md">
              <img
                src={bushido}
                alt=""
                className="rounded-md opacity-70 hover:opacity-90 transition-opacity duration-300"
              />
            </div>

            {/* Text Content*/}
            <div className="text-left md:text-right">
              <p className="text-[#2FA4FF] font-extralight hidden md:block">
                Personal Project
              </p>
              <h2 className="font-bold hidden text-xl md:block">
                Code Bushido Manga & Anime Shop
              </h2>
              <div className="my-2 rounded-md md:my-4 bg-[#208ee1] p-5">
                <p>
                  Manga & Anime online store, created with Nextjs, tailwind in
                  the frontend and strapi as backend.
                </p>
              </div>

              <ul className="flex justify-between my-2 font-bold">
                <li>ReactJS</li>
                <li>NextJS</li>
                <li>TailwindCSS</li>
                <li>Strapi</li>
                <li>PostgreSQL</li>
              </ul>

              <ul className="flex justify-end mt-4">
                <li className="ml-6 mt-2">
                  <a
                    href="https://github.com/edavid72/Code-Bushido-App"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub
                      className="hover:text-[#2FA4FF] transition-colors duration-200"
                      size={27}
                    />
                  </a>
                </li>

                <li className="ml-6 mt-2">
                  <a
                    href="https://code-bushido-app.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className=""
                  >
                    <BsGlobe2
                      className="hover:text-[#2FA4FF] transition-colors duration-200"
                      size={27}
                    />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Card: Start */}
        <div className="py-5 px-1 mb-6 md:p-6 border-b-2">
          {/* Text:xs-sm */}
          <p className="text-[#2FA4FF] text-lg font-extralight md:hidden">
            1. Personal Project
          </p>
          <h2 className="font-bold text-lg md:hidden">Coin Geass</h2>

          {/* Content */}
          <div className="md:grid md:grid-cols-2 md:gap-4">
            {/* Image Content */}
            <div className="border-2 rounded-md">
              <img
                src={bushido}
                alt=""
                className="rounded-md opacity-70 hover:opacity-90 transition-opacity duration-300"
              />
            </div>

            {/* Text Content*/}
            <div className="text-left md:text-right">
              <p className="text-[#2FA4FF] font-extralight hidden md:block">
                Personal Project
              </p>
              <h2 className="font-bold hidden text-xl md:block">Coin Geass</h2>
              <div className="my-2 rounded-md md:my-4 bg-[#208ee1] p-5">
                <p>
                  Simple application built with react js to implement the use of
                  react-hooks and HTTP requests to API endpoints.
                </p>
              </div>

              <ul className="flex justify-between my-2 font-bold">
                <li>ReactJS</li>
                <li>TailwindCSS</li>
                <li>CryptoCompare API</li>
              </ul>

              <ul className="flex justify-end mt-4">
                <li className="ml-6 mt-2">
                  <a
                    href="https://github.com/edavid72/Coin-Geass"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub
                      className="hover:text-[#2FA4FF] transition-colors duration-200"
                      size={27}
                    />
                  </a>
                </li>

                <li className="ml-6 mt-2">
                  <a
                    href="https://coin-geass.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className=""
                  >
                    <BsGlobe2
                      className="hover:text-[#2FA4FF] transition-colors duration-200"
                      size={27}
                    />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Element>
  );
};

export default Work;
