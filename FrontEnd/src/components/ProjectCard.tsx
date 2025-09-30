// Composant pour une carte de projet

import { useState } from "react";
import useOnScreen from "../Hooks/UseOnScreen";
import type { Project } from "../interfaces/Idata";
import ProjectModal from "./ProjectModal";


const ProjectCard = ({ project }: { project: Project }) => {
  const [ref, isVisible] = useOnScreen({ threshold: 0.2 });
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div
        ref={ref}
        className={`bg-gray-800 rounded-lg shadow-lg overflow-hidden transition-all duration-500 ease-out hover:shadow-cyan-500/50 hover:transform hover:-translate-y-2 cursor-pointer transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        onClick={() => setIsModalOpen(true)}
      >
        <img src={project.imageUrl} alt={project.title} className="w-full h-48 object-cover" onError={(e) => (e.currentTarget.src='https://placehold.co/600x400/1F2937/7DD3FC?text=Image')} />
        <div className="p-6">
          <h3 className="text-xl font-bold mb-2 text-white">{project.title}</h3>
          <p className="text-gray-400 mb-4 text-sm h-10 overflow-hidden">{project.description}</p>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag, i) => (
              <span key={i} className="bg-gray-700 text-cyan-400 text-xs font-semibold px-2.5 py-1 rounded-full">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
      {isModalOpen && <ProjectModal project={project} onClose={() => setIsModalOpen(false)} />}
    </>
  );
};

export default ProjectCard;
