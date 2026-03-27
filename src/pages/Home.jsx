import Nav from '../components/Nav';
import Header from '../components/Header';
import ProjectCard from '../components/ProjectCard';
import projects from '../data/projects';

function Home() {
  return (
    <div className="min-h-screen bg-[#121416] text-[#E2E2E5] font-['Inter']">
      <Nav />

      <div id="hero">
        <Header />
      </div>

      <main className="pb-24 px-8 md:px-12 lg:px-24 max-w-[1440px] mx-auto -mt-8">
        <section id="projects" className="scroll-mt-24">
          <h2 className="font-['Inter'] text-[0.75rem] uppercase tracking-[0.4em] text-[#ca6e00] mb-12">
            Personal Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </section>
      </main>

      <section id="contact" className="px-8 md:px-12 lg:px-24 max-w-[1440px] mx-auto py-24 mt-16">
        <h2 className="font-['Inter'] text-[0.75rem] uppercase tracking-[0.4em] text-[#ca6e00] mb-12">
          Contact
        </h2>
        {/* Contact content goes here */}
      </section>

      <footer className="w-full bg-[#0C0E10] flex flex-col md:flex-row justify-between items-center px-12 py-16 gap-8">
        <div className="font-['Inter'] text-[0.75rem] uppercase tracking-[0.2em] text-[#E2E2E5]/20">
          © 2025 Harsh Patel. All Rights Reserved.
        </div>
        <div className="flex gap-12 font-['Inter'] text-[0.75rem] uppercase tracking-[0.2em] text-[#E2E2E5]/20">
          <a
            href="https://www.linkedin.com/in/harshpatel73/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#E2E2E5]/60 underline decoration-[#E2E2E5]/20 underline-offset-4 transition-all duration-150"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/Harsh-Patel73"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#E2E2E5]/60 underline decoration-[#E2E2E5]/20 underline-offset-4 transition-all duration-150"
          >
            GitHub
          </a>
        </div>
      </footer>
    </div>
  );
}

export default Home;
