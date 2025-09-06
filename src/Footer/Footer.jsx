import { MdOutlineEmail } from "react-icons/md";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <div
      id="Contact"
      className="flex justify-around bg-[#465697] text-white p-10 md:p-12 items-center"
    >
      <div>
        <h1 className="text-2xl md:text-6xl font-bold">Contact</h1>
        <h3 className="text-sm md:text-2xl font-normal">
          Feel Free To reach out!
        </h3>
      </div>

      <ul className="text-sm md:text-xl space-y-2">
        <li className="flex gap-2 items-center">
          <MdOutlineEmail size={20} />
          <a
            href="mailto:shivani2499chauhan@gmail.com"
            className="hover:underline"
          >
            shivani2499chauhan@gmail.com
          </a>
        </li>

        <li className="flex gap-2 items-center">
          <CiLinkedin size={20} />
          <a
            href="https://www.linkedin.com/in/xdshivani"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            www.linkedin.com/in/xdshivani
          </a>
        </li>

        <li className="flex gap-2 items-center">
          <FaGithub size={20} />
          <a
            href="https://github.com/xdshivani"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            github.com/xdshivani
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
