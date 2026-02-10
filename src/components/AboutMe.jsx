import React from 'react';
import { User, Code2, Palette, Terminal } from 'lucide-react';

export default function AboutMe() {
  return (
    <section id="about" className="max-w-7xl mx-auto px-6 pt-64 croll-mt-20 pb-32 min-h-[80vh] border-t border-white/5">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* --- IMAGE SIDE --- */}
        <div className="relative group mx-auto lg:mx-0">
          {/* Decorative Glow behind the image */}
          <div className="absolute -inset-4 bg-linear-to-r from-primary/30 to-secondary/30 blur-2xl rounded-full opacity-50 group-hover:opacity-100 transition-opacity duration-500"></div>
          
          {/* The Image Container */}
          <div className="max-w-[384px] w-full mx-auto rounded-3xl overflow-hidden border border-white/10 group-hover:rotate-0 transition-transform duration-500 bg-[#161b22]">
            <img 
              src="/profile/profile.jpg" 
              alt="Profile"
              className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-500"
              style={{ imageRendering: 'high-quality' }}
            />
          </div>
        </div>

    
        
        {/* Left side: About Me */}
        <div className="space-y-8">
          <div>
            <h2 className="text-4xl font-bold mb-4 flex items-center gap-4">
              <User className="text-primary" /> About Me
            </h2>
            <div className="w-20 h-1 bg-linear-to-r from-primary to-secondary rounded-full"></div>
          </div>

          <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
            <p>
              I'm a <span className="text-white font-semibold">Game Developer student</span> with a 
              passion for <span className="text-secondary font-semibold">Programming and Art</span>. 
              I find the most joy at the intersection of complex logic and beautiful design.
            </p>
            <p>
              My interest in art started early. As a kid, I spent hours drawing, painting, and getting lost in video games. That early curiosity grew into a passion for creating worlds of my own.
              Today, I’m studying Game Development and exploring both the artistic and technical sides of the craft.
              Whether I’m making 2D art or writing code, I’m focused on crafting experiences that are visually engaging and fun to explore.
            </p>
          </div>

          {/* Social / Contact Quick Links */}
          <div className="flex gap-4">
            <div className="p-4 bg-white/5 rounded-2xl border border-white/10 flex-1">
              <Code2 className="text-primary mb-2" />
              <h4 className="font-bold">Logic</h4>
              <p className="text-s text-gray-400">Problem solving & Architecture</p>
            </div>
            <div className="p-4 bg-white/5 rounded-2xl border border-white/10 flex-1">
              <Palette className="text-secondary mb-2" />
              <h4 className="font-bold">Creativity</h4>
              <p className="text-s text-gray-400">Visuals & User Experience</p>
            </div>
          </div>
        </div>

        {/* Right side: My skills*/}
        <div className="relative">
          {/* Decorative Background Glow */}
          <div className="absolute -inset-4 bg-linear-to-r from-primary/10 to-secondary/10 blur-2xl rounded-full"></div>
          
          <div className="relative bg-[#161b22] border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl">
            <h3 className="text-2xl font-bold mb-8 flex items-center gap-2">
              <Terminal size={20} className="text-primary" /> My Toolkit
            </h3>

            <div className="space-y-8">
              {/* Dev Skills */}
              <div>
                <p className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-4">Development</p>
                <div className="flex flex-wrap gap-2">
                  {['C#', 'Unity','React', 'Tailwind', 'JavaScript', 'Python', 'Kotlin', 'Android', 'Expo', 'Next.js', ].map(skill => (
                    <span key={skill} className="px-3 py-1 bg-black/40 border border-primary/60 text-primary rounded-lg text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Art Skills */}
              <div>
                <p className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-4">Art & Design</p>
                <div className="flex flex-wrap gap-2">
                  {['Krita', 'Figma', 'Adobe Photoshop', 'Adobe Illustrator', 'UI/UX'].map(skill => (
                    <span key={skill} className="px-3 py-1 bg-secondary/5 border border-secondary/20 text-secondary rounded-lg text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}