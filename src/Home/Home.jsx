import { useState } from "react";
import image1 from "../assets/image1.png";
import TextChanger from "../TextChanger";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      id="Home"
      className="text-white flex flex-col md:flex-row w-full justify-between items-center px-10 md:px-20 pt-28 mb-8"
    >
      {/* Left Section */}
      <div className="md:w-2/4">
        <h1 className="text-3xl md:text-5xl font-bold leading-snug md:leading-tight tracking-tighter">
          <TextChanger />
        </h1>

        <p className="mt-4 text-sm md:text-xl leading-relaxed tracking-tight text-gray-200">
          As a Full Stack Web Developer, I specialize in building robust,
          user-friendly applications that operate seamlessly across both the
          frontend and backend. My expertise spans modern frameworks like React
          and Node.js, ensuring dynamic user interfaces and efficient
          server-side operations.
        </p>

        <button
          onClick={() => setIsOpen(true)}
          className="mt-6 md:mt-8 text-white py-2 px-4 text-sm md:text-lg
          hover:opacity-85 duration-300 hover:scale-105 font-semibold
          rounded-3xl bg-[#465697] shadow-lg"
        >
          Let&apos;s Connect
        </button>
      </div>

      {/* Right Section - Image */}
      <div className="mt-10 md:mt-0">
        <img className="w-64 md:w-96" src={image1} alt="Profile" />
      </div>

      {/* Modal */}
      {isOpen && (
  <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex justify-center items-center z-50">
    <div className="bg-zinc-900 rounded-2xl shadow-lg w-11/12 md:w-1/2 p-6 relative">
      {/* Close Button */}
      <button
        onClick={() => setIsOpen(false)}
        className="absolute top-3 right-3 text-gray-400 hover:text-white text-2xl"
      >
        &times;
      </button>

      <h2 className="text-2xl font-bold text-white mb-4">
      Get in Touch
      </h2>

      <form className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Your Name"
          className="px-3 py-2 rounded-lg bg-zinc-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="px-3 py-2 rounded-lg bg-zinc-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <textarea
          rows="4"
          placeholder="Project / Collaboration Details"
          className="px-3 py-2 rounded-lg bg-zinc-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        ></textarea>

        <button
          type="submit"
          className="bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-all"
        >
          Submit
        </button>
      </form>
    </div>
  </div>
)}

    </div>
  );
};

export default Home;
