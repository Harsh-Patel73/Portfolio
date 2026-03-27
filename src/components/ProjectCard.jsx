import { Link } from 'react-router-dom';

function ProjectCard({ project }) {
  return (
    <article className="bg-[#1E2022] p-10 flex flex-col justify-between min-h-[340px] hover:bg-[#282A2C] transition-colors duration-150 group border-l-2 border-[#5C7CFA]">

      <div>
        <h3 className="font-['Newsreader'] text-[1.75rem] text-[#E2E2E5] leading-tight mb-4 group-hover:text-[#5C7CFA] transition-colors duration-150">
          {project.title}
        </h3>

        <p className="font-['Newsreader'] text-[1rem] text-[#E2E2E5]/60 leading-relaxed mb-6">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-8">
          {project.technologies.slice(1).map((tech, i) => (
            <span
              key={i}
              className="bg-[#334766] text-[#A2B6DA] font-['Inter'] text-[0.75rem] uppercase tracking-[0.15em] px-3 py-1 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-between gap-3">
        <Link
          to={`/project/${project.id}`}
          className="text-[#425675] px-6 py-3 font-['Inter'] text-[0.75rem] uppercase tracking-widest hover:text-[#5C7CFA] transition-colors duration-100 outline outline-[1px] outline-[#444654]/20 hover:outline-[#5C7CFA]/40"
        >
          View Details →
        </Link>
        <span className="material-symbols-outlined text-[#E2E2E5]/20 group-hover:text-[#E2E2E5]/40 transition-colors duration-150 ml-auto">
          code
        </span>
      </div>

    </article>
  );
}

export default ProjectCard;
