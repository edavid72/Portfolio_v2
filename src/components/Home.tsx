import { Element, Link } from 'react-scroll';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { useTypewriter, Cursor } from 'react-simple-typewriter';

const Home = () => {
  const [text, count] = useTypewriter({
    words: [
      "Hi, My Name's David 😎",
      '<ILoveToCode />',
      'Family Man',
      '<F*&$!%^Geek />',
    ],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <Element name="home" className="w-full h-screen">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-[#2FA4FF] text-lg">Hi, my name is</p>
        <h1 className="text-4xl md:text-6xl font-bold text-[#CCD6F6]">
          David Cervellon
        </h1>

        <div>
          <h1 className="text-4xl md:text-6xl font-bold text-[#8892B0]">
            <span>{text}</span>
            <Cursor cursorColor="#808080" cursorStyle="_" />
          </h1>
        </div>
        <p className="text-[#8892B0] py-4 mt-2 max-w-[700px] md:text-xl">
          I'm a front-end developer specializing in creating (and occasionally
          designing) exceptional digital experiences.
        </p>

        <div className="lg:flex mt-4">
          <Link to="work" smooth={true} duration={500}>
            <button className="text-white group border-2 px-6 py-2 my-2 flex items-center hover:bg-[#2FA4FF] hover:border-[#2FA4FF] lg:mr-6 rounded-md">
              View Work
              <span className="group-hover:rotate-90 duration-200">
                <HiArrowNarrowRight className="ml-3" />
              </span>
            </button>
          </Link>
        </div>
      </div>
    </Element>
  );
};

export default Home;
