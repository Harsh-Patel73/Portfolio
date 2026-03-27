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

      <footer className="w-full bg-[#0C0E10] flex items-center justify-center px-12 py-16">
        <div className="font-['Inter'] text-[0.75rem] uppercase tracking-[0.2em] text-[#E2E2E5]/20">
          © 2025 Harsh Patel. All Rights Reserved.
        </div>
      </footer>
    </div>
  );
}

export default Home;
