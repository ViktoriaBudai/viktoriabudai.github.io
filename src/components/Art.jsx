import { useState } from 'react'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'


// data 

const ART = [
    {
        title: "Cyber Vagrant",
        description: "Digital line art character design inspired by cyberpunk aesthetics",
        category: "Line Art",
        thumbnail: "/artgallery/cyber_vagrant.png", 
        gallery: ["/artgallery/cyber_vagrant.png","/artgallery/cyber_vagrant_line.png", "/artgallery/cyber_vagrant_city.png"],
        date: "2024"

    },
    {
        title: "Lines of Nature",
        description: "My early environment drawings, beginning with basic rock studies and expanding into larger natural landscapes.",
        category: "Environment Art",
        thumbnail: "/artgallery/canyon.png", 
        gallery: ["/artgallery/canyon.png", "/artgallery/mountain.png", "/artgallery/rock.png"],
        date: "2024"

    },
    {
        title: "Vector World",
        description: "Vector art created for various projects, including AR UI assets, WebGL card game elements, and object illustrations like a treasure box, telescope, and paper plane.",
        category: "Vector Art Illustration",
        thumbnail: "/artgallery/treasure_box.png", 
        gallery: ["/artgallery/treasure_box.png","/artgallery/telescope.png", "/artgallery/paper_plane.png", "/artgallery/AR_Welcome_UI.png", "/artgallery/cards.png"],
        date: "2025"
    },
    {
        title: "Mini Pixel Series",
        description: "A progression of early pixel art studies, beginning with simple forms and gradually building toward more detailed designs.",
        category: "Pixel Art",
        thumbnail: "/artgallery/pumpkin_head.png", 
        gallery: ["/artgallery/pumpkin_head.png", "/artgallery/tree.png", "/artgallery/sphere.png", "/artgallery/cube.png"],
        date: "2024"
    },
    {
        title: "Art Explorations",
        description: "Concept art from my first year of studies, created while I was learning digital art for the first time.",
        category: "Concept Art",
        thumbnail: "/artgallery/concept_racoon.png",
        gallery: ["/artgallery/concept_racoon.png", "/artgallery/concept_weapons.png", "/artgallery/concept_magic_staff.png", "/artgallery/cartoon_racoon.png", "/artgallery/concept_sam.png", "/artgallery/concept_elysia.png"],
        date: "2023"
    }
];

export default function Art() {

  const [selectedArt, setSelectedArt] = useState(null);
  const [currentImgIndex, setCurrentImgIndex] = useState(0);

  return (
    <section id="art" className="max-w-7xl mx-auto px-6 py-24 border-t border-white/5">
      <div className="mb-16">
        <h2 className="text-4xl font-bold mb-4">Art Gallery</h2>
        <div className="w-20 h-1 bg-secondary rounded-full"></div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {ART.map((art, index) => (
          <div 
            key={index}
            onClick={() => { setSelectedArt(art); setCurrentImgIndex(0); }}
            className="group relative cursor-pointer overflow-hidden rounded-2xl bg-white/5 
             border border-white/5 transition-all duration-300
             /* Desktop Only: Glow and Hover Effects */
             hover:border-secondary/50 hover:shadow-[0_0_30px_rgba(139,92,246,0.2)]
             /* Mobile Only: Physical Tap Feedback */
             active:scale-95 active:brightness-90 aspect-7/9"
          >
            <img 
              src={art.thumbnail} 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              alt={art.title}
            />
            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/20 to-transparent 
                            p-6 flex flex-col justify-end
                            /* 1. Hidden by default */
                            opacity-0 
                            /* 2. ONLY show on hover if the device actually supports hovering (Desktop) */
                            @media(hover:hover){ group-hover:opacity-100 }
                            /* 3. Show briefly when being pressed (Mobile) */
                            active:opacity-100
                            transition-opacity duration-300">
              <span className="text-xs text-secondary font-bold uppercase tracking-widest mb-1">{art.category}</span>
              <h3 className="text-xl font-bold">{art.title}</h3>
            </div>
          </div>
        ))}
      </div>

      {/* LIGHTBOX MODAL (Step 3) */}
      {selectedArt && (
        <div className="fixed inset-0 z-[100] bg-black/95 flex flex-col items-center justify-center p-4 backdrop-blur-md">
            {/* Header Info */}
            <div className="absolute top-6 left-6 right-6 flex justify-between items-start">
            <div>
                <h3 className="text-2xl font-bold">{selectedArt.title}</h3>
                <p className="text-gray-400">{selectedArt.description}</p>
            </div>
            <button onClick={() => setSelectedArt(null)} className="p-3 bg-white/5 rounded-full hover:bg-white/10"><X /></button>
            </div>

            {/* Main Image View */}
            <div className="relative w-full max-w-5xl h-[70vh] flex items-center justify-center">
            {selectedArt.gallery.length > 1 && (
                <>
                <button 
                    className="absolute left-0 p-4 hover:text-secondary"
                    onClick={() => setCurrentImgIndex((prev) => (prev === 0 ? selectedArt.gallery.length - 1 : prev - 1))}
                >
                    <ChevronLeft size={48} />
                </button>
                <button 
                    className="absolute right-0 p-4 hover:text-secondary"
                    onClick={() => setCurrentImgIndex((prev) => (prev === selectedArt.gallery.length - 1 ? 0 : prev + 1))}
                >
                    <ChevronRight size={48} />
                </button>
                </>
            )}
            
            <img 
                src={selectedArt.gallery[currentImgIndex]} 
                className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
            />
            </div>

            {/* Small Thumbnail Navigation */}
            <div className="mt-8 flex gap-2">
            {selectedArt.gallery.map((img, i) => (
                <button 
                key={i}
                onClick={() => setCurrentImgIndex(i)}
                className={`w-16 h-16 rounded-md overflow-hidden border-2 transition-all ${currentImgIndex === i ? 'border-secondary scale-110' : 'border-transparent opacity-50'}`}
                >
                <img src={img} className="w-full h-full object-cover" />
                </button>
            ))}
            </div>
        </div>
        )}
    </section>
  );
}