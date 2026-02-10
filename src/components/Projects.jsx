import { useState, useEffect, useRef } from 'react';
import { ExternalLink, X} from "lucide-react";
import { PROJECTS } from '../data/projectsData';


// the internal card component

function ProjectCard({ project, onOpenDetails }) {

  if (!project) return null;

  return (
    <div
      onClick={onOpenDetails}
      className="group bg-white/10 border border-white/20 rounded-2xl overflow-hidden 
                    hover:border-primary/50 transition-all duration-500 cursor-pointer
                    hover:-translate-y-2 hover:shadow-[0_0_20px_rgba(79,70,229,0.15)]
                    /* Mobile active state for physical feedback */
                    active:scale-[0.98]"
    >
      
      {/* Thumbnail Container */}
      <div className="aspect-video w-full overflow-hidden bg-white/5">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>

      {/*My project role*/}
      <div className="p-6">
      {project.roles && (
        <p className="text-[12px] text-secondary font-bold uppercase tracking-widest mb-1 opacity-80">
          {project.roles.join(" • ")}
        </p>
      )}
      

      
        {/* 2. Added a slight lift to the title on hover */}
        <h3 className="text-xl font-bold mb-2 group-hover:text-secondary/80 transition-colors">
          {project.title}
        </h3>
        
        <p className="text-white-400 text-sm mb-6 leading-relaxed">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-6">
          {project.tech?.map((tag) => (
            <span 
              key={tag} 
              className="text-[10px] font-bold uppercase tracking-wider px-2 py-1 bg-black/60 text-white rounded border border-primary/90 
                         transition-colors duration-300 group-hover:bg-primary/50"
            >
              {tag}
            </span>
          ))}
        </div>
        
        <button 
          onClick={onOpenDetails}
          className="mt-4 text-white font-bold hover:underline flex items-center gap-2 cursor-pointer"
        >
          View Details <ExternalLink size={16} />
        </button>
      </div>
    </div>
  );
}

// the main section component, the export / Modal content section

export default function Projects() {
  // State to track the open project
  const [selectedProject, setSelectedProject] = useState(null);
  // Overview will be the default view
  const [activeSection, setActiveSection] = useState('overview');

  // Ref for the scrollable Modal box
  const modalScrollRef = useRef(null);

  // Intersection observer logic
  useEffect(() => {
    if (!selectedProject || !modalScrollRef.current) return;

    const options = {
      root: modalScrollRef.current, // Watch scrolling inside the modal
      rootMargin: '-10% 0px -70% 0px', // Adjusts when the "active" switch happens
      threshold: 0,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, options);

    // Grab all sections with an ID within the modal
    const sections = modalScrollRef.current.querySelectorAll('section[id]');
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, [selectedProject]);

  const handleOpenDetails = (project) => {
    setSelectedProject(project);
    setActiveSection('overview');
  };

  return (
    <section id="mywork" className="max-w-7xl mx-auto px-6 py-24 relative">
      <div className="mb-16 mt-20">
        <h2 className="text-4xl font-bold mb-4">My Projects</h2>
        <div className="w-20 h-1 bg-primary rounded-full"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {PROJECTS.map((project, index) => (
          <ProjectCard 
            key={index} 
            project={project} 
            onOpenDetails={() => handleOpenDetails(project)} 
          />
        ))}
      </div>

      {/* --- THE MODAL OVERLAY --- */}
      {selectedProject && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div 
            className="absolute inset-0 bg-background/95 backdrop-blur-sm"
            onClick={() => setSelectedProject(null)}
          ></div>

          {/* 3. The Modal Box (Container) - Added ref={modalScrollRef} */}
          <div 
            ref={modalScrollRef}
            className="relative bg-[#161b22] border border-white/20 w-full max-w-5xl max-h-[90vh] overflow-y-auto rounded-3xl shadow-2xl flex flex-col animate-in fade-in zoom-in duration-300 scroll-smooth"
          >
            
            <button 
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 z-50 p-2 bg-primary/60 rounded-full hover:bg-primary/90 transition-colors text-white"
            >
              <X size={20} />
            </button>

            {/* Media Section */}
            <div className="w-full bg-black/40 aspect-video shrink-0">
              {selectedProject.videoLink ? (
                <iframe src={selectedProject.videoLink} className="w-full h-full" title="Project Video" allowFullScreen></iframe>
              ) : (
                <img src={selectedProject.image} className="w-full h-full object-cover" alt="Project Preview" />
              )}
            </div>

            <div className="p-8 md:p-12 relative">

              {/* 1. FLOATING STEAM BADGE */}
              {selectedProject.steamLink && (
                <div className="hidden lg:block absolute top-12 right-12 z-10">
                  <a 
                    href={selectedProject.steamLink} 
                    target="_blank" 
                    rel="noreferrer"
                    className="group flex flex-col items-center justify-center p-4 rounded-2xl bg-[#1b2838]/80 border border-[#66c0f4]/30 hover:border-[#66c0f4] hover:bg-[#1b2838] transition-all duration-300 shadow-2xl"
                  >
                    <img src="/icons/steam.svg" alt="Steam" className="w-12 h-12 drop-shadow-[0_0_10px_rgba(102,192,244,0.4)] group-hover:scale-110 transition-transform" />
                    <span className="text-[10px] font-black text-[#66c0f4] uppercase tracking-widest mt-2">Steam Page</span>
                  </a>
                </div>
              )}

              {/* 2. HEADER */}
              <header className="mb-10 pr-0 lg:pr-40"> 
                <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">{selectedProject.title}</h2>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tech?.map(t => (
                    <span key={t} className="px-3 py-1 bg-secondary/20 border border-white/10 rounded-full text-[16px] font-mono text-gray-200">
                      {t}
                    </span>
                  ))}
                </div>
              </header>


              {/* --- STICKY SUB-NAV --- */}
              <div className="sticky top-0 z-40 bg-[#161b22]/90 backdrop-blur-md border-b border-white/10 py-4 -mx-8 md:-mx-12 px-8 md:px-12 mb-12">
                <div className="flex flex-wrap gap-6 overflow-x-auto no-scrollbar">
                  
                  {/* Overview Link */}
                  <a 
                    href="#overview" 
                    className={`text-sm font-bold transition-colors ${activeSection === 'overview' ? 'text-primary' : 'text-gray-400 hover:text-white'}`}
                  >
                    Overview
                    {activeSection === 'overview' && <div className="h-0.5 w-full bg-primary mt-1 animate-in slide-in-from-left-2" />}
                  </a>

                  {selectedProject.roles?.map((role) => {
                    const id = role.replace(/\s+/g, '-').toLowerCase();
                    const isActive = activeSection === id;
                    return (
                      <a 
                        key={role} 
                        href={`#${id}`} 
                        className={`text-sm font-bold transition-colors flex flex-col ${isActive ? 'text-secondary' : 'text-gray-400 hover:text-secondary'}`}
                      >
                        <div className="flex items-center gap-2">
                          <span className={`w-1.5 h-1.5 rounded-full ${isActive ? 'bg-secondary animate-pulse' : 'bg-gray-600'}`}></span>
                          {role}
                        </div>
                        {isActive && <div className="h-0.5 w-full bg-secondary mt-1 animate-in slide-in-from-left-2" />}
                      </a>
                    );
                  })}
                </div>
              </div>

              

              {/* --- SCROLLABLE CONTENT --- */}
              <div className="space-y-24">
                
                <section id="overview" className="scroll-mt-32">
                  <h3 className="text-2xl font-bold mb-6">Project Overview</h3>
                  <p className="text-gray-400 text-lg leading-relaxed whitespace-pre-line">
                    {selectedProject.longDescription || selectedProject.description}
                  </p>
                </section>

                {selectedProject.roles?.map((role) => (
                  <section 
                    key={role} 
                    id={role.replace(/\s+/g, '-').toLowerCase()} 
                    className="scroll-mt-32 border-t border-white/5 pt-16"
                  >
                    <div className="flex items-center gap-4 mb-8 ">
                      <h3 className="text-2xl font-bold text-secondary uppercase tracking-wider">{role}</h3>
                      <div className="h-px flex-1 bg-linear-to-r from-secondary/50 to-transparent"></div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 whitespace-pre-line">
                      <div>
                        <p className="text-gray-300 text-lg leading-relaxed mb-6">
                          {selectedProject.roleDetails?.[role]?.info || "Details coming soon..."}
                        </p>
                      </div>

                      <div className="space-y-4">
                        {selectedProject.roleDetails?.[role]?.images?.map((img, i) => (
                          <img 
                            key={i} 
                            src={img} 
                            className="rounded-2xl border border-white/10 shadow-xl" 
                            alt={`${role} sample`} 
                          />
                        ))}
                      </div>
                    </div>
                  </section>
                ))}
              </div>
              
              {/* ACTION BUTTONS (Only show if they exist in the data) */}
              <div className="flex flex-wrap gap-8 mt-8">
                {selectedProject.demoLink && (
                  <a 
                    href={selectedProject.demoLink} 
                    target="_blank" 
                    rel="noreferrer"
                    className="flex-1 min-w-[200px] bg-primary text-center py-4 rounded-xl font-bold hover:opacity-90 transition-all"
                  >
                    Play Demo Game
                  </a>
                )}

                {selectedProject.gitLink && (
                  <a 
                    href={selectedProject.gitLink} 
                    target="_blank" 
                    className="flex-1 min-w-[200px] bg-white/5 border border-white/10 text-center py-4 rounded-xl font-bold hover:bg-white/10 transition-all"
                  >
                    Visit GitHub
                  </a>
                )}

                {selectedProject.steamLink && (
                  <a 
                    href={selectedProject.steamLink} 
                    target="_blank" 
                    className="flex-1 min-w-[200px] bg-primary border border-[#66c0f4]/20 text-center py-4 rounded-xl font-bold hover:border-[#66c0f4]/60 transition-all"
                  >
                    Visit Steam Page
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}