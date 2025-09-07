import { FaCss3, FaHtml5, FaJs, FaReact } from "react-icons/fa";
import { SiMongodb, SiTailwindcss } from "react-icons/si";
import { RiNextjsLine } from "react-icons/ri";
import { FaNodeJs } from "react-icons/fa6";
import { SiTcs } from "react-icons/si";
import { TbSoupFilled } from "react-icons/tb";
import { MdOutlineFileDownload } from "react-icons/md";

const techStack = [
  { icon: <FaHtml5 color="#E34F26" size={50} />, name: "HTML5" },
  { icon: <FaCss3 color="#1572b6" size={50} />, name: "CSS3" },
  { icon: <SiTailwindcss color="#06B6D4" size={50} />, name: "TailwindCSS" },
  { icon: <FaJs color="#F7df1e" size={50} />, name: "JavaScript" },
  { icon: <FaReact color="#61daf8" size={50} />, name: "React" },
  { icon: <RiNextjsLine color="#ff4438" size={50} />, name: "NextJs" },
  { icon: <SiMongodb color="#47a248" size={50} />, name: "MongoDB" },
  { icon: <FaNodeJs color="#ff4438" size={50} />, name: "NodeJs" },
];

const Experience = () => {
  return (
    <div id="Experience" className="p-10 md:p-24">
      <h1 className="text-2xl md:text-4xl  text-white font-bold">Experience</h1>
      <div className="flex flex-wrap items-center justify-around">
        {/* Left side - Tech stack icons */}
        <div className="flex flex-wrap md:w-2/5 gap-8 md:p-12 py-10">
          {techStack.map((tech, index) => (
            <div
              key={index}
              className="group relative p-3 bg-zinc-950 flex items-center justify-center 
                           rounded-2xl transition-all duration-300 
                           hover:scale-110 hover:rotate-6 hover:shadow-lg hover:shadow-blue-500/40 cursor-pointer"
            >
              {tech.icon}
              {/* Tooltip (name on hover) */}
              <span
                className="absolute bottom-[-30px] opacity-0 group-hover:opacity-100 
                             text-sm font-semibold text-white bg-black px-2 py-1 rounded-lg 
                             transition-all duration-300"
              >
                {tech.name}
              </span>
            </div>
          ))}
        </div>

        {/* Right side - Experience cards */}
        <div>
          <div className="flex gap-10 bg-slate-950 bg-opacity-45 mt-4 rounded-lg p-4 items-center">
            <SiTcs color="#4285F4" size={50} />
            <span className="text-white">
              <div className="flex justify-between">
                <h2 className="leading-tight">System Engineer, TCS</h2>
                <h2 className="leading-tight mr-2 flex items-center gap-1 cursor-pointer text-blue-500">
                  <a
                    href="/Shivani Chauhan_MERNStack.pdf" //link to the file
                    //download={"Shivani_Resume.pdf"} //sets the fileName for the downloaded file
                    target="_blank"
                    rel="noopener noreferrer"
                    className="leading-tight mr-2 flex items-center gap-1 cursor-pointer text-blue-500"
                  >
                    <span>
                      <u>Download CV</u>
                    </span>
                    <MdOutlineFileDownload className="text-xl" />
                  </a>
                </h2>
              </div>
              <p className="text-sm leading-tight font-thin">
                July 2022 - Present
              </p>
              <ul className="text-sm p-2">
                <li>- Working as React developer</li>
                <li>
                  - Building scalable, high-performance, and responsive web
                  applications
                </li>
              </ul>
            </span>
          </div>

          <div className="flex gap-10 bg-slate-950 bg-opacity-45 mt-4 rounded-lg p-4 items-center">
            <TbSoupFilled color="green" size={50} />
            <span className="text-white">
              <h2 className="leading-tight">UI designer, SoupX</h2>
              <p className="text-sm leading-tight font-thin">
                July 2021 - Jan 2022
              </p>
              <ul className="text-sm p-2">
                <li>- Worked as UI developer/designer</li>
                <li>- Featured in Shark Tank, season 2</li>
                <li>- Startup based on serving healthy soup-based meals</li>
              </ul>
            </span>
          </div>

          {/* <div className="flex gap-10 bg-slate-950 bg-opacity-45 mt-4 rounded-lg p-4 items-center">
              <FaAmazon color="#ff9900" size={50} />
              <span className="text-white">
                <h2 className="leading-tight">Software Engineer, Amazon</h2>
                <p className="text-sm leading-tight font-thin">
                  July 2022 - Present
                </p>
                <ul className="text-sm p-2">
                  <li>- Work as software developer</li>
                  <li>- Senior SDE developer</li>
                </ul>
              </span>
            </div> */}
        </div>
      </div>
    </div>
  );
};

export default Experience;
