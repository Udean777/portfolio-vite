import projects from "../ProjectCard";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import Modal from "../Modal";

interface ProjectsProps {
  id: number;
  title: string;
  imageSrc?: string;
  href: string;
  alt: string;
  description?: string;
}

interface Project6Props {
  project: ProjectsProps;
  onClose: () => void;
  isOpen?: boolean;
}

const ProjectModal6: React.FC<Project6Props> = ({ onClose, isOpen }) => {
  const targetProject = projects.find((project) => project.id === 6);

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="max-w-md mx-auto">
        <div className="flex justify-center items-center mb-4">
          <img
            src={targetProject?.imageSrc}
            alt={targetProject?.alt}
            className="rounded-md border-2 border-gray-800 w-[26rem] lg:mt-0 md:mt-0 mt-5"
          />
        </div>
        <div className="text-center">
          <p className="pt-5">{targetProject?.description}</p>
        </div>
        <div className="flex flex-col items-center space-y-3 md:flex-row md:justify-between md:space-y-0 md:items-center pt-5">
          <div className="hover:scale-105 transition ease-in">
            <button
              onClick={onClose}
              className="bg-gray-600 dark:bg-slate-50 rounded-md p-2 text-slate-50 dark:text-gray-800 font-bold"
            >
              Close
            </button>
          </div>
          <Link
            to={targetProject ? targetProject.href : ""}
            target="__blank"
            className="flex justify-center bg-blue-500 rounded-md p-2 hover:scale-105 transition ease-in"
          >
            <span className="font-bold text-gray-100">Go to Website</span>
            <FaArrowRight className="mt-1 ms-2 text-gray-100" />
          </Link>
        </div>
      </div>
    </Modal>
  );
};

export default ProjectModal6;
