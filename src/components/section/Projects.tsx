import { useState } from "react";
import projects from "../ProjectCard";
import "animate.css";
import ProjectModal1 from "../modal/Project1";
import ProjectModal2 from "../modal/Project2";
import ProjectModal3 from "../modal/Project3";
import ProjectModal4 from "../modal/Project4";
import ProjectModal5 from "../modal/Project5";
import ProjectModal6 from "../modal/Project6";

interface ProjectsProps {
  id: number;
  title: string;
  alt: string;
  href: string;
  icon: JSX.Element[];
}

export default function Projects() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<ProjectsProps>();

  const openModal = (project: ProjectsProps) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const ProjectCard: React.FC<ProjectsProps> = ({
    title,
    icon,
    alt,
    id,
    href,
  }) => {
    return (
      <button
        onClick={() => openModal({ title, icon, alt, id, href })}
        className={`h-44 block w-full group hover:scale-105 transition ease-in rounded-xl overflow-hidden shadow-md backdrop-blur-sm text-slate-50 bg-slate-300 dark:bg-slate-500/60`}
      >
        <div className="px-6 py-4">
          <div className="flex gap-2 justify-center mb-5">{icon}</div>
          <span className="text-md font-bold mb-2 absolute right-0 bottom-0 left-0">
            {title}
          </span>
        </div>
      </button>
    );
  };

  return (
    <div className="h-full">
      <div className="m-auto py-5 sm:py-10 max-w-6xl px-4 sm:px-6 md:px-8 animate__animated animate__fadeInDown overflow-hidden">
        <h1 className="font-bold border-l-4 border-blue-500 text-3xl sm:text-4xl md:text-3xl mb-6 sm:mb-8">
          PROJECTS
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>
        {isModalOpen && selectedProject && (
          <>
            {selectedProject.id === 1 && (
              <ProjectModal1
                project={selectedProject}
                onClose={closeModal}
                isOpen={isModalOpen}
              />
            )}
            {selectedProject.id === 2 && (
              <ProjectModal2
                project={selectedProject}
                onClose={closeModal}
                isOpen={isModalOpen}
              />
            )}
            {selectedProject.id === 3 && (
              <ProjectModal3
                project={selectedProject}
                onClose={closeModal}
                isOpen={isModalOpen}
              />
            )}
            {selectedProject.id === 4 && (
              <ProjectModal4
                project={selectedProject}
                onClose={closeModal}
                isOpen={isModalOpen}
              />
            )}
            {selectedProject.id === 5 && (
              <ProjectModal5
                project={selectedProject}
                onClose={closeModal}
                isOpen={isModalOpen}
              />
            )}
            {selectedProject.id === 6 && (
              <ProjectModal6
                project={selectedProject}
                onClose={closeModal}
                isOpen={isModalOpen}
              />
            )}
          </>
        )}
      </div>
    </div>
  );
}
