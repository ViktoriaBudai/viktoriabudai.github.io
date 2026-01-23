import { useState } from 'react';
import { ExternalLink, X} from "lucide-react";


// project data

const PROJECTS = [
    {
        title: "Until the Fields: Farmageddon",
        description: "A cozy 3D puzzle‑platformer where you play as different animals, each with unique abilities. Work together with your animal friends to escape the barn and find your way out of the farm.",
        longDescription: `
        Project Description

        This was a school project where our team created a 3D puzzle‑platformer game in Unity. The main idea was that the player can switch between three different animals, each with their own abilities, and use them to solve different puzzles. You can only control one animal at a time, so the challenge is figuring out which one you need in each situation.
        The project was developed over a four‑month period.
        
        My Role

        • Spider mechanics (swinging, web pulling)
        • Level design contributions
        • Puzzle ideas (catapult, moving platforms, swing points, plug‑out mechanics)
        • Narrative design (prologue + background story)
        • Storybook illustrations
        • Storybook code for turning page and UI integration based on the input device`,

        tech: ["Unity", "C#", "3D", "Krita"],
        steamLink: "https://store.steampowered.com/app/4129640/Until_the_Fields_Farmageddon/",
        gitLink: "",
        videoLink: "https://www.youtube.com/embed/Ygkoji2HrWc",
        image: "/gallery/farmageddon_image1.png",
        gallery: "/gallery/img1.png",
    },
    {
        title: "FatStack",
        description: "It is a strategic 2D card game developed in Unity, based on the traditional Hungarian game Zsír, but with a whimsical twist. I created everything from scrach, from the game mechanics to the visual design. This project is still in development and designed to run in browsers via WebGL.",
        longDescription: `A solo-developed 2D Unity WebGL card game inspired by a Hungarian classic. I implemented the gameplay logic, designed the interface and created all custom card visuals using vector art in Figma. While the core gameplay rules are based on the traditional Hungarian card game Zsír, but I’m adding a few exciting twists to give it a fresh and fun feel. I’m building the entire codebase from scratch, including the digital game mechanics, scoring logic, and rule handling within Unity. I also reimagined the visual style to give the game a fresh, cartoon-inspired look while preserving the essence of the original. The game is still under development.`,
        tech: ["Unity WebGL", "C#", "2D", "Krita"],
        gitLink: "https://github.com/ViktoriaBudai/FatStack",
        demoLink: "https://viktoriabudai.github.io/FatStack/",
        image: "/gallery/fatstack_img.png",
        gallery: "/gallery/card_game_demo.png"
    },
    {
        title: "Professinal Portfolio",
        description: "Designed and built a responsive portfolio website using Vite and React to showcase my technical and artistic work.",
        tech: ["React", "JavaScript", "Vite", "GitHub Pages", "Tailwind CSS"],
        image:"/gallery/portfolio_img.png", 
    },
    {
      title: "The Enchanted Pages",
      description: "An Android mobile game built in Unity. The game blends visual novel storytelling, puzzle mechanics, and a 3D explorable environment. Players inherit a mysterious bookshop and follow cryptic clues left in an old journal, uncovering enchanted books, solving environmental puzzles, and unraveling the magical history of their family.",
      longDescription: "",
      tech: ["Unity", "Android Mobile", "C#", "2D", "3D"],
      gitLink: "https://github.com/ViktoriaBudai/The_Enchanted_Pages",
      videoLink: "https://www.youtube.com/embed/WBz7IWYZPKE",
      image: "/gallery/theenchantedpages_img.png",
      gallery: "",
    },
    {
      title: "Lunar Woods",
      description: "A first‑year Unity project where our team created a small 3D fantasy adventure demo game. Players take on the role of the last surviving Fairy in a fading forest, completing NPC quests, earning rewards, and uncovering the mystery behind the forest’s decay and their own forgotten identity.",
      longDescription: "",
      tech: ["Unity", "C#", "3D"],
      gitLink: "https://github.com/ViktoriaBudai/Lunar_Woods_group",
      videoLink: "https://www.youtube.com/embed/4O5j_7ZY_gw",
      image: "/gallery/lunarwoods_img.png",
      gallery: "",
    },


];

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

      <div className="p-6">
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

// the main section component, the export

export default function Projects() {
  // 1. State to track the open project
  const [selectedProject, setSelectedProject] = useState(null);

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
            onOpenDetails={() => setSelectedProject(project)} 
          />
        ))}
      </div>

      {/* --- THE MODAL OVERLAY --- */}
      {selectedProject && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          {/* 1. Backdrop */}
          <div 
            className="absolute inset-0 bg-background/95 backdrop-blur-sm"
            onClick={() => setSelectedProject(null)}
          ></div>

          {/* 2. Modal Box - Increased max-width for better media display */}
          <div className="relative bg-[#161b22] border border-white/20 w-full max-w-5xl max-h-[90vh] overflow-y-auto rounded-3xl shadow-2xl flex flex-col animate-in fade-in zoom-in duration-300">
            
            {/* Close Button */}
            <button 
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 z-50 p-2 bg-primary/60 rounded-full hover:bg-primary/90 transition-colors"
            >
              <X size={20} />
            </button>

            {/* Top Section: Multimedia (Video or Image) */}
            <div className="w-full bg-black/40 aspect-video">
              {selectedProject.videoLink ? (
                <iframe 
                  src={selectedProject.videoLink}
                  className="w-full h-full"
                  title="Project Video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              ) : (
                <img src={selectedProject.image} className="w-full h-full object-cover" alt="Project Preview" />
              )}
            </div>

            {/* Bottom Section: Details */}
            <div className="p-8 md:p-12">
              <h2 className="text-4xl font-bold mb-4">{selectedProject.title}</h2>
              
              {/* Tech Stack Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {selectedProject.tech?.map(t => (
                  <span key={t} className="px-3 py-1 bg-primary/50 border border-white/5 rounded-full text-xs font-mono text-white">
                    {t}
                  </span>
                ))}
              </div>

              <p className="text-gray-400 mb-10 text-lg leading-relaxed mb-8 whitespace-pre-line">
                {/* We use 'longDescription' if it exists, otherwise fall back to regular description */}
                {selectedProject.longDescription || selectedProject.description}
              </p>

              {selectedProject.gallery && selectedProject.gallery.length > 0 && (
                <div className="grid grid-cols-1 gap-4 mt-8">
                  {/* If it's an array, you would map through it here */}
                  {Array.isArray(selectedProject.gallery) ? (
                    selectedProject.gallery.map((img, idx) => (
                      <img key={idx} src={img} className="rounded-xl" alt="Preview" />
                    ))
                  ) : (
                    <img src={selectedProject.gallery} className="rounded-xl" alt="Preview" />
                  )}
                </div>
              )}
              
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