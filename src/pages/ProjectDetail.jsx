import { useEffect } from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import Nav from '../components/Nav';
import projects from '../data/projects';

function ProjectDetail() {
  const { id } = useParams();
  const project = projects.find((p) => p.id === parseInt(id));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!project) return <Navigate to="/" replace />;

  return (
    <div className="min-h-screen bg-[#121416] text-[#E2E2E5] font-['Inter']">
      <Nav />

      <main className="pt-32 pb-24 px-8 md:px-12 lg:px-24 max-w-[1440px] mx-auto">

        {/* Header */}
        <section className="mb-20">
          <Link
            to="/"
            className="inline-block font-['Inter'] text-[0.75rem] uppercase tracking-[0.2em] text-[#425675] hover:text-[#5C7CFA] transition-colors mb-6"
          >
            ← Back to Projects
          </Link>
          <br />
          <span className="inline-block bg-[#1E2022] text-[#5C7CFA] font-['Inter'] text-[0.75rem] uppercase tracking-[0.2em] px-3 py-1 mb-8">
            Dossier // {project.dossier}
          </span>
          <h1 className="text-[3.5rem] leading-tight mb-0">
            <span className="font-['Newsreader'] text-[#5C7CFA]">{project.title}</span>
          </h1>
        </section>

        {/* Two Column Layout */}
        <section className="grid grid-cols-1 lg:grid-cols-9 gap-8 mb-24">

          {/* Left — Quote + Description + Technical Arsenal */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            <blockquote className="border-l-4 border-[#E2E2E5]/20 pl-8">
              <p className="font-['Newsreader'] italic text-[1.75rem] text-[#E2E2E5] leading-relaxed">
                "{project.quote}"
              </p>
            </blockquote>
            <div className="space-y-6">
              {project.detail.map((paragraph, i) => (
                <p key={i} className="font-['Newsreader'] text-[1rem] text-[#E2E2E5]/70 leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Technical Arsenal */}
            <div className="pt-4">
              <p className="font-['Inter'] text-[0.75rem] uppercase tracking-[0.4em] text-[#99907c] mb-8">
                Technical Arsenal
              </p>
              {project.techSections?.length > 0 ? (
                <div className="grid grid-cols-2 gap-x-10">
                  {project.techSections.map((section, i) => (
                    <div key={i}>
                      <p
                        className="font-['Inter'] text-[0.75rem] uppercase tracking-[0.2em] font-bold mb-4"
                        style={{ color: project.color }}
                      >
                        {section.name}
                      </p>
                      <ul className="space-y-2">
                        {section.items.map((item, j) => (
                          <li key={j} className="font-['Newsreader'] text-[1rem] text-[#E2E2E5]/70 flex items-start gap-2">
                            <span style={{ color: project.color }} className="mt-0.5">–</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="grid grid-cols-2 gap-x-10 gap-y-8">
                  {project.techArsenal.map((item, i) => (
                    <div key={i} className="flex flex-col gap-1">
                      <span
                        className="font-['Inter'] text-[0.75rem] uppercase tracking-widest"
                        style={{ color: project.color }}
                      >
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <span className="font-['Newsreader'] text-[1.75rem] text-[#E2E2E5]">{item.name}</span>
                      <span className="font-['Inter'] text-[0.75rem] uppercase tracking-[0.2em] text-[#E2E2E5]/70">
                        {item.subtitle}
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Right — Connectivity + Decorative Panel */}
          <div className="lg:col-span-4 flex flex-col gap-2">
            <div className="bg-[#1E2022] p-10 flex flex-col gap-6">
              <div>
                <p className="font-['Newsreader'] italic text-[1.75rem] text-[#5C7CFA] mb-3">Connectivity</p>
                <p className="font-['Inter'] text-[0.75rem] text-[#E2E2E5]/70 leading-relaxed">
                  View the source code and explore the implementation.
                </p>
              </div>
              <div className="flex flex-col gap-3">
                {project.liveUrl ? (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex justify-between items-center px-6 py-4 font-['Inter'] text-[0.75rem] uppercase tracking-widest font-bold hover:opacity-90 transition-opacity"
                    style={{ background: 'linear-gradient(135deg, #B8C4FF 0%, #6B89FF 100%)', color: '#121416' }}
                  >
                    View Live
                    <span className="material-symbols-outlined text-base">north_east</span>
                  </a>
                ) : !project.hideDemo ? (
                  <div className="flex justify-between items-center bg-[#282A2C] text-[#E2E2E5]/30 px-6 py-4 font-['Inter'] text-[0.75rem] uppercase tracking-widest cursor-not-allowed">
                    Live Demo — Coming Soon
                    <span className="material-symbols-outlined text-base">north_east</span>
                  </div>
                ) : null}
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex justify-between items-center bg-[#282A2C] text-[#5C7CFA] px-6 py-4 font-['Inter'] text-[0.75rem] uppercase tracking-widest hover:bg-[#37393B] transition-colors"
                >
                  GitHub Repository
                  <span className="material-symbols-outlined text-base">north_east</span>
                </a>
              </div>
            </div>

            {project.image && (
              <div className="flex-1 min-h-48 relative overflow-hidden">
                <img
                  src={project.image}
                  alt={`${project.title} preview`}
                  className="w-full h-full object-cover object-top"
                />
              </div>
            )}
          </div>
        </section>

        {/* Philosophy / Methodology / Output */}
        <section className="pt-16 mb-16 mt-8 bg-[#1E2022] px-12 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-0">
            <div className="md:pr-12">
              <p className="font-['Inter'] text-[0.75rem] uppercase tracking-[0.2em] text-[#E2E2E5]/60 mb-4">
                Philosophy
              </p>
              <p className="font-['Newsreader'] italic text-[1.75rem] text-[#E2E2E5] leading-snug">
                {project.philosophy}
              </p>
            </div>
            <div className="md:px-12">
              <p className="font-['Inter'] text-[0.75rem] uppercase tracking-[0.2em] text-[#E2E2E5]/60 mb-4">
                Methodology
              </p>
              <p className="font-['Newsreader'] italic text-[1.75rem] text-[#E2E2E5] leading-snug">
                {project.methodology}
              </p>
            </div>
            <div className="md:pl-12">
              <p className="font-['Inter'] text-[0.75rem] uppercase tracking-[0.2em] text-[#E2E2E5]/60 mb-4">
                Output
              </p>
              <p className="font-['Newsreader'] italic text-[1.75rem] text-[#E2E2E5] leading-snug">
                {project.output}
              </p>
            </div>
          </div>
        </section>

      </main>

      <footer className="w-full bg-[#0C0E10] flex items-center justify-center px-12 py-16 mt-8">
        <div className="font-['Inter'] text-[0.75rem] uppercase tracking-[0.2em] text-[#E2E2E5]/40">
          © 2025 Harsh Patel. All Rights Reserved.
        </div>
      </footer>
    </div>
  );
}

export default ProjectDetail;
