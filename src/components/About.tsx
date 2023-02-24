import { Element } from 'react-scroll';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsCloudDownload } from 'react-icons/bs';

const About = () => {
  return (
    <Element className="w-full h-screen text-gray-300" name="about">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="md:text-right pb-8 pl-4">
            <p className="text-3xl font-bold inline border-b-4 border-[#2FA4FF]">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div>
            <div className="md:text-right text-2xl font-bold mb-4">
              <p>Hi. I'm David, nice to meet you. Please take a look around.</p>
            </div>

            <ul className="flex mt-8 text-2xl md:text-2xl justify-between p-1 lg:mb-10">
              <li>
                <a
                  href="https://www.linkedin.com/in/david-cervellon/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin  className='hover:text-[#2FA4FF] transition-colors duration-200'/>
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/edavid72"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub className='hover:text-[#2FA4FF] transition-colors duration-200'/>
                </a>
              </li>
              <li>
                <a
                  href="mailto:david.cervellon72@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <HiOutlineMail className='hover:text-[#2FA4FF] transition-colors duration-200'/>
                </a>
              </li>
            </ul>

            <div>
              <a
                download={'resume'}
                href={'resume'}
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="text-white mt-6 text-sm group border-2 px-4 py-2 my-2 flex items-center hover:bg-[#2FA4FF] hover:border-[#2FA4FF] rounded-md">
                  Download Resume
                  <span>
                    <BsCloudDownload className="ml-3" />
                  </span>
                </button>
              </a>
            </div>
          </div>

          <div>
            <p className="text-base md:text-md text-justify">
              I am passionate about creating great software that improves the
              lives of those around me. Lover of new technologies I like to be
              always updated and constantly learning.
              <br />
              <br />
              <span>
                I am looking for a work team to join to contribute and develop
                my knowledge!!
              </span>
            </p>
          </div>
        </div>
      </div>
    </Element>
  );
};

export default About;
