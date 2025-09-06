import { useState } from "react";
import { RiMenu2Line, RiCloseLine } from "@remixicon/react";

const Navbar = () => {
  const [menu, openMenu] = useState(false);

  return (
    <nav
      className="fixed top-0 left-0 w-full z-50 flex justify-between items-center
      text-white px-6 md:px-20 py-4 bg-black/40 backdrop-blur-md shadow-md"
    >
      {/* Logo */}
      <span className="text-xl font-bold tracking-wide">xdShivani</span>

      {/* Desktop Menu */}
      <ul className="hidden md:flex gap-8 font-semibold">
        <a href="#About">
          <li className="relative group cursor-pointer transition-all duration-300 hover:text-blue-400">
            About
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
          </li>
        </a>
        <a href="#Experience">
          <li className="relative group cursor-pointer transition-all duration-300 hover:text-blue-400">
            Experience
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
          </li>
        </a>
        <a href="#Projects">
          <li className="relative group cursor-pointer transition-all duration-300 hover:text-blue-400">
            Projects
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
          </li>
        </a>
        <a href="#Contact">
          <li className="relative group cursor-pointer transition-all duration-300 hover:text-blue-400">
            Contact
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
          </li>
        </a>
      </ul>

      {/* Mobile Menu Icon */}
      <div className="md:hidden z-50">
        {menu ? (
          <RiCloseLine
            size={30}
            className="cursor-pointer"
            onClick={() => openMenu(false)}
          />
        ) : (
          <RiMenu2Line
            size={30}
            className="cursor-pointer"
            onClick={() => openMenu(true)}
          />
        )}
      </div>

      {/* Mobile Menu (dropdown) */}
      <div
        className={`absolute top-16 left-0 w-full bg-black/90 backdrop-blur-md 
        md:hidden transition-all duration-300 ease-in-out ${
          menu ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-5 pointer-events-none"
        }`}
      >
        <ul className="flex flex-col items-center gap-6 py-6 font-semibold">
          <a href="#About" onClick={() => openMenu(false)}>
            <li className="hover:text-blue-400 transition-colors">About</li>
          </a>
          <a href="#Experience" onClick={() => openMenu(false)}>
            <li className="hover:text-blue-400 transition-colors">Experience</li>
          </a>
          <a href="#Projects" onClick={() => openMenu(false)}>
            <li className="hover:text-blue-400 transition-colors">Projects</li>
          </a>
          <a href="#Contact" onClick={() => openMenu(false)}>
            <li className="hover:text-blue-400 transition-colors">Contact</li>
          </a>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
