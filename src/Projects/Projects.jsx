import ProjectCard from "./ProjectCard";
import bot from "../assets/bot.jpg";
import task from '../assets/taskManage.jpg';
import portfolio from '../assets/portfolio.jpg';
const Projects = () => {
  return (
    <div id="Projects" className="p-10 md:p-24 text-white">
      <h1 className="text-2xl md:text-4xl text-white font-bold">Projects</h1>
      <div className="py-12 px-8 flex flex-wrap justify-center gap-12">
      <ProjectCard
          title="SmartBot - using Gemini API"
          main="Stack: Gemini API, React.js & Hugging Face API"
          codeLink="https://github.com/xdshivani/ChatBot"
          image={bot}
        />
        
        
        <ProjectCard
          title="Taskmate app"
          main="A task management app built with React and Node.js."
          // demoLink="https://your-netflix-clone-demo.com"
          codeLink="https://github.com/xdshivani/TaskMate"
          image={task}
        />
        <ProjectCard
          title="Portfolio"
          main="A personal portfolio website built with React and Tailwind CSS"
          demoLink="/blogs"
          target="_blank"
          codeLink="https://github.com/xdshivani/Portfolio_xdshivani.git"
          image={portfolio}
        />
      </div>
    </div>
  );
};

export default Projects;
