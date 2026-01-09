import { useState } from 'react'
import { GithubIcon, LinkedinIcon } from './Logos'
import { Mail} from 'lucide-react'
import Projects from './components/Projects';
import Art from './components/Art';

function SocialLink({ href, icon, label }) {
  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noreferrer" 
      className="flex items-center gap-2 text-gray-400 hover:text-primary transition-colors"
    >
      {icon}
      <span className="hidden sm:inline text-sm font-medium">{label}</span>
    </a>
  );
}

function App() {
  return (
    <div id="home" className="min-h-screen bg-background text-white font-sans selection:bg-primary/30">
      
      {/* --- Navigation --- */}
      <nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-background/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <a href="#home" className="flex animate-pulse space-x-4 text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            VB
          </a>
          <div className="md:flex space-x-8 text-3x1 font-medium text-white-400 ">
            <a href="#home" className="hover:text-white transition-colors">Home</a>
            <a href="#about" className="hover:text-white transition-colors">About me</a>
            {/*<a href="#contact" className="hover:text-white transition-colors">Contact</a>*/}
          </div>
          <a 
            href="/Viktoria_Budai_CV.pdf" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-secondary hover:bg-secondary/60 border border-white/10 px-3 py-1 rounded-full text-sm transition-all flex items-center gap-2"
          >
            Resume
          </a>
        </div>
      </nav>

      {/* --- Hero Section --- */}
      <main className="relative pt-32 pb-16 px-6 overflow-hidden">
        {/* Background Glow Effect */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] -z-10" />

        <section className="max-w-4xl mx-auto text-center py-10">
          {/* <div className="inline-block px-4 py-1.5 mb-6 text-sm font-medium border border-primary/30 bg-primary/10 rounded-full text-primary">
            Welcome
          </div> */}
          
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8 leading-tight">
             Hello<br /> 
            <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
              I'm Viktória Budai
            </span>
          </h1>

          <p className="text-lg md:text-xl text-white-400 mb-10 max-w-2xl mx-auto leading-relaxed">
            I’m a passionate Game Developer Student focusing on Programming, 2D Art. This portfolio showcases my projects, skills, and creative journey. 
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href ="#mywork" className="w-full sm:w-auto bg-primary hover:bg-primary/70 text-white px-8 py-4 rounded-xl font-semibold transition-all glow-shadow active:scale-95">
              Explore Projects
          
            </a>
            <a href="#art" className="w-full sm:w-auto bg-secondary hover:bg-secondary/70 border border-white/10 px-8 py-4 rounded-xl font-semibold transition-all active:scale-95">
              Explore Art
            </a>
          </div>
          {/* --- Social Icons Row --- */}
          <div className="flex items-center justify-center gap-6 mt-18">
            <SocialLink href="https://linkedin.com/in/viktoria-budai" icon={<LinkedinIcon size={32} />} label="LinkedIn" />
            <SocialLink href="https://github.com/ViktoriaBudai" icon={<GithubIcon size={32} />} label="GitHub" />
            <SocialLink href="mailto:viktoriabudai.dev@gmail.com" icon={<Mail size={32} />} label="Email" />
          </div>
        </section>
      </main>

      {/* -- PROJECTS SECTION (Imported Component) -- */}
      <Projects />
      <Art />

      {/*<Footer />*/}

    </div>
  )
}

export default App
