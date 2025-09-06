import image2 from "../assets/image2.png";
import { IoArrowForward } from "react-icons/io5";
import { motion } from "framer-motion";


const About = () => {
  return (
    <div id="About"
      className="text-white md:flex overflow-hidden
      items-center md:flex-wrap md:justify-center
      bg-black shadow-xl mx-0 md:mx-20 
      bg-opacity-30 rounded-lg p-12"
    >
      <div>
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-2xl md:text-4xl font-bold mb-6 "
        >
          About Me
        </motion.h2>

        <div className="md:flex flex-wrap flex-col md:flex-row items-center gap-6">
          {/* Profile Image */}
          <motion.img
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="md:h-80 rounded-lg shadow-lg"
            src={image2}
            alt="profile"
          />

          {/* Skills */}
          <ul>
            {/* Frontend */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex gap-3 py-4"
            >
              <IoArrowForward size={30} className="mt-1 text-blue-400" />
              <span className="w-96">
                <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                  Frontend Developer
                </h1>
                <p className="text-sm md:text-md leading-tight text-gray-300">
                  Skilled in React, Next.js, Tailwind CSS, and modern UI/UX practices.
                  I love building responsive, user-friendly, and accessible web
                  applications with clean code.
                </p>
              </span>
            </motion.div>

            {/* Backend */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex gap-3 py-4"
            >
              <IoArrowForward size={30} className="mt-1 text-blue-400" />
              <span className="w-96">
                <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                  Backend Developer
                </h1>
                <p className="text-sm md:text-md leading-tight text-gray-300">
                  Experience with Node.js, Express, and REST APIs. I enjoy building
                  scalable, secure, and high-performance server-side applications.
                </p>
              </span>
            </motion.div>

            {/* Fullstack */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="flex gap-3 py-4"
            >
              <IoArrowForward size={30} className="mt-1 text-blue-400" />
              <span className="w-96">
                <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                  Fullstack Developer
                </h1>
                <p className="text-sm md:text-md leading-tight text-gray-300">
                  Proficient in MongoDB and PostgreSQL. I focus on creating
                  optimized schemas, ensuring data security, and writing efficient
                  queries.
                </p>
              </span>
            </motion.div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
