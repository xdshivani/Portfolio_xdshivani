const ProjectCard = ({ title, main, demoLink, codeLink, image }) => {
  return (
    <div className="p-3 md:p-6 flex flex-col justify-between w-80 bg-[#0c0e19] shadow-xl shadow-slate-900 rounded-2xl">
      {/* Banner / Project Image */}
      <img
        className="w-full h-48 object-cover rounded-t-xl"
        src={image}
        alt={title}
      />

      {/* Project Info */}
      <div className="flex-1 flex flex-col justify-between">
        <div>
          <h3 className="px-4 text-xl md:text-2xl font-bold leading-normal mt-4">
            {title}
          </h3>
          <p className="px-4 text-sm md:text-md leading-tight py-2 text-gray-300">
            {main}
          </p>
        </div>

        {/* Buttons */}
        <div className="mt-4 p-2 md:p-4 flex gap-2 md:gap-4 align-left">
          {/* {demoLink && (
            <a
              href={demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 
              hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697] text-center"
            >
              Demo
            </a>
          )} */}
          <a
            href={codeLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 
            hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697] text-center"
          >
            Source Code
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
