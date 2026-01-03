import { ExternalLink } from "lucide-react";
import FarmageddonImg from '../assets/farmageddon_image1.png'
import FatstackImg from '../assets/fatstack_img.png'

// project data

const PROJECTS = [
    {
        title: "Until the Fields: Farmageddon",
        description: "A cozy 3D puzzle‑platformer where you play as different animals, each with unique abilities. Work together with your animal friends to escape the barn and find your way out of the farm.",
        tech: ["Unity", "C#", "Krita"],
        steamlink: "",
        gitlink: "",
        videolink: "",
        image: FarmageddonImg,
    },
    {
        title: "FatStack",
        description: "It is a strategic 2D card game developed in Unity, based on the traditional Hungarian game Zsír, but with a whimsical twist. I created everything from scrach, from the game mechanics to the visual design. \nThis project is still in development and designed to run in browsers via WebGL.",
        tech: ["Unity WebGL", "C#", "Krita"],
        gitlink: "",
        demolink: "https://viktoriabudai.github.io/FatStack/",
        image: FatstackImg,
    },


];

// the internal card component

function ProjectCard({ project }) {
  return (
    <div className="group bg-white/10 border border-white/20 rounded-2xl overflow-hidden 
                    hover:border-primary/50 transition-all duration-500 
                    hover:-translate-y-2 hover:shadow-[0_0_20px_rgba(79,70,229,0.15)]">
      
      {/* 1. Fixed the Scale & Transition Typos here */}
      <div className="aspect-video w-full overflow-hidden bg-white/5">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>

      <div className="p-6">
        {/* 2. Added a slight lift to the title on hover */}
        <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
          {project.title}
        </h3>
        
        <p className="text-gray-400 text-sm mb-6 leading-relaxed">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-6">
          {project.tech.map((tag) => (
            <span 
              key={tag} 
              className="text-[10px] font-bold uppercase tracking-wider px-2 py-1 bg-primary/10 text-primary rounded border border-primary/20 
                         transition-colors duration-300 group-hover:bg-primary/20"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* 3. Made the link more reactive */}
        <a 
          href={project.link} 
          className="inline-flex items-center gap-2 text-sm font-semibold text-white/70 hover:text-primary transition-colors" 
          target="_blank" 
          rel="noreferrer"
        >
          View Project <ExternalLink size={14} />
        </a>
      </div>
    </div>
  );
}

// the main section component, the export

export default function Projects() {
  return (
    <section id="mywork" className="max-w-7xl mx-auto px-6 py-24">
      <div className="mb-16">
        <h2 className="text-4xl font-bold mb-4">My Projects</h2>
        <div className="w-20 h-1 bg-primary rounded-full"></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {PROJECTS.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </section>
  );
}