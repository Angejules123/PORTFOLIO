import React, { useState, useEffect, useRef } from 'react';
import {Mail, Smartphone, MapPin, Download, Send } from 'lucide-react';
import { portfolioData } from './data/Data';
import SkillCard from './components/SkillCard';
import ProjectCard from './components/ProjectCard';

import { FaGithub, FaLinkedin } from "react-icons/fa";

<FaGithub size={32} color="#181717" />; // couleur officielle GitHub
<FaLinkedin size={32} color="#0A66C2" />; // couleur officielle LinkedIn

// Composant principal de l'application
export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [formStatus, setFormStatus] = useState('');
  
  const sectionRefs = {
    home: useRef<HTMLDivElement>(null),
    projects: useRef<HTMLDivElement>(null),
    skills: useRef<HTMLDivElement>(null),
    about: useRef<HTMLDivElement>(null),
    contact: useRef<HTMLDivElement>(null),
    cv: useRef<HTMLDivElement>(null),
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-50% 0px -50% 0px' }
    );

    Object.values(sectionRefs).forEach((ref) => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id: keyof typeof sectionRefs) => {
    sectionRefs[id].current?.scrollIntoView({ behavior: 'smooth' });
  };
  
  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus('Envoi en cours...');
    // Simuler un appel API
    setTimeout(() => {
      setFormStatus('Votre message a bien été envoyé !');
      // e.target.reset(); // Décommenter pour vider le formulaire après envoi
    }, 2000);
  };

  return (
    <div className="bg-gray-900 text-gray-200 font-sans leading-normal tracking-wider">
      {/* Header & Navigation */}
      <header className="bg-gray-900/80 backdrop-blur-sm fixed top-0 w-full z-30 transition-all duration-300">
        <div className="container mx-auto flex items-center justify-between p-4">
          <h1 className="text-2xl font-bold text-cyan-400">
            {portfolioData.name}
          </h1>
          <nav className="hidden md:flex space-x-6">
            {['home', 'projects', 'skills', 'about', 'contact', 'cv'].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section as keyof typeof sectionRefs)}
                className={`capitalize text-lg font-medium transition-colors duration-300 ${
                  activeSection === section
                    ? 'text-cyan-400'
                    : 'text-gray-300 hover:text-cyan-400'
                }`}
              >
                {section === 'home' ? 'Accueil' : section === 'projects' ? 'Projets' : section === 'skills' ? 'Compétences' : section === 'about' ? 'À propos' : section === 'contact' ? 'Contact' : 'CV'}
              </button>
            ))}
          </nav>
        </div>
      </header>

      <main className="pt-20">
        {/* Section Accueil (Hero) */}
        <section
          id="home"
          ref={sectionRefs.home}
          className="min-h-screen flex items-center bg-cover bg-center"
          style={{ backgroundImage: "linear-gradient(to bottom, rgba(18, 18, 23, 0.8), rgba(18, 18, 23, 1)), url('/images/hero.gif')" }}
        >
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-5xl md:text-7xl font-extrabold text-white mb-4 animate-fade-in-down">
              {portfolioData.name}
            </h2>
            <p className="text-2xl md:text-3xl text-cyan-400 mb-8 animate-fade-in-up animation-delay-300">
              {portfolioData.title}
            </p>
            <div className="flex justify-center space-x-4 animate-fade-in-up animation-delay-600">
              <a href={portfolioData.cvUrl} download className="bg-cyan-500 text-gray-900 font-bold py-3 px-6 rounded-lg hover:bg-cyan-400 transition-transform transform hover:scale-105 flex items-center space-x-2">
                <Download size={20} />
                <span>Télécharger mon CV</span>
              </a>
              <button onClick={() => scrollToSection('projects')} className="bg-gray-700 text-white font-bold py-3 px-6 rounded-lg hover:bg-gray-600 transition-transform transform hover:scale-105">
                Voir mes projets
              </button>
            </div>
          </div>
        </section>

        {/* Section Projets */}
        <section id="projects" ref={sectionRefs.projects} className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12 text-cyan-400">Mes Projets</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {portfolioData.projects.map((project, index) => (
                <ProjectCard key={index} project={project} />
              ))}
            </div>
          </div>
        </section>

        {/* Section Compétences */}
        <section id="skills" ref={sectionRefs.skills} className="py-20 bg-gray-800">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12 text-cyan-400">Compétences Techniques</h2>
            <div className="flex flex-wrap justify-center gap-8">
              {portfolioData.skills.map((skill, index) => (
                <SkillCard key={index} skill={skill} />
              ))}
            </div>
          </div>
        </section>

        {/* Section À Propos */}
        <section id="about" ref={sectionRefs.about} className="py-20">
          <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-10">
            <div className="md:w-1/3 text-center">
              <img src="src/assets/Ange.jpg" alt={portfolioData.name} className="rounded-full mx-auto shadow-lg border-4 border-cyan-500" />
            </div>
            <div className="md:w-2/3">
              <h2 className="text-4xl font-bold mb-4 text-cyan-400">À propos de moi</h2>
              <p className="text-lg text-gray-300 leading-relaxed">
                {portfolioData.about}
              </p>
              <div className="mt-6 flex flex-wrap gap-4">
                  <div className="flex items-center"><Mail className="mr-2 text-cyan-400" /> {portfolioData.email}</div>
                  <div className="flex items-center"><Smartphone className="mr-2 text-cyan-400" /> {portfolioData.phone}</div>
                  <div className="flex items-center"><MapPin className="mr-2 text-cyan-400" /> {portfolioData.location}</div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Section Contact */}
        <section id="contact" ref={sectionRefs.contact} className="py-20 bg-gray-800">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-4 text-cyan-400">Me Contacter</h2>
            <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
              Une question, une proposition de projet ou simplement envie de discuter ? N'hésitez pas à m'envoyer un message.
            </p>
            <div className="max-w-3xl mx-auto bg-gray-900 p-8 rounded-lg shadow-lg">
              <form onSubmit={handleFormSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-gray-300 font-medium mb-2">Nom</label>
                    <input type="text" id="name" name="name" required className="w-full bg-gray-800 border border-gray-700 rounded-lg py-3 px-4 text-gray-200 focus:outline-none focus:border-cyan-500 transition-colors" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-gray-300 font-medium mb-2">Email</label>
                    <input type="email" id="email" name="email" required className="w-full bg-gray-800 border border-gray-700 rounded-lg py-3 px-4 text-gray-200 focus:outline-none focus:border-cyan-500 transition-colors" />
                  </div>
                </div>
                <div className="mb-6">
                  <label htmlFor="subject" className="block text-gray-300 font-medium mb-2">Sujet</label>
                  <input type="text" id="subject" name="subject" required className="w-full bg-gray-800 border border-gray-700 rounded-lg py-3 px-4 text-gray-200 focus:outline-none focus:border-cyan-500 transition-colors" />
                </div>
                <div className="mb-6">
                  <label htmlFor="message" className="block text-gray-300 font-medium mb-2">Message</label>
                  <textarea id="message" name="message" rows={5} required className="w-full bg-gray-800 border border-gray-700 rounded-lg py-3 px-4 text-gray-200 focus:outline-none focus:border-cyan-500 transition-colors"></textarea>
                </div>
                <div className="text-center">
                  <button type="submit" className="bg-cyan-500 text-gray-900 font-bold py-3 px-8 rounded-lg hover:bg-cyan-400 transition-transform transform hover:scale-105 flex items-center justify-center space-x-2 w-full md:w-auto mx-auto">
                    <Send size={20} />
                    <span>Envoyer le Message</span>
                  </button>
                </div>
              </form>
              {formStatus && <p className="text-center mt-6 text-green-400">{formStatus}</p>}
            </div>
          </div>
        </section>

        {/* Section CV */}
        <section id="cv" ref={sectionRefs.cv} className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12 text-cyan-400">Mon CV</h2>
            <div className="bg-gray-700 rounded-lg shadow-2xl overflow-hidden" style={{height: '80vh'}}>
              <iframe
                src={portfolioData.cvUrl}
                className="w-full h-full border-0"
                title="CV de Tia Ange"
              >
                <p>Votre navigateur ne supporte pas les iFrames. Vous pouvez <a href={portfolioData.cvUrl}>télécharger le CV ici</a>.</p>
              </iframe>
            </div>
          </div>
        </section>
      </main>

     {/* Footer */}
<footer className="bg-gray-900 border-t border-gray-800 py-8">
  <div className="container mx-auto px-4 text-center text-gray-400">
    <div className="flex justify-center space-x-6 mb-4">
      <a
        href={portfolioData.socials.github}
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-cyan-400 transition-colors"
      >
        <FaGithub size={32} />
      </a>
      <a
        href={portfolioData.socials.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-cyan-400 transition-colors"
      >
        <FaLinkedin size={32} />
      </a>
      <a
        href={`mailto:${portfolioData.email}`}
        className="hover:text-cyan-400 transition-colors"
      >
        <Mail size={32} />
      </a>
    </div>
    <p>&copy; {new Date().getFullYear()} {portfolioData.name}. Tous droits réservés.</p>
  </div>
</footer>


      {/* CSS pour les animations */}
      <style>{`
        @keyframes fade-in-down {
          0% { opacity: 0; transform: translateY(-20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes fade-in-up {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-down { animation: fade-in-down 0.8s ease-out forwards; }
        .animate-fade-in-up { animation: fade-in-up 0.8s ease-out forwards; }
        .animation-delay-300 { animation-delay: 0.3s; }
        .animation-delay-600 { animation-delay: 0.6s; }
        
        .project-card, .skill-card {
            opacity: 0;
            transform: translateY(30px);
            transition: opacity 0.6s ease-out, transform 0.6s ease-out;
        }
        .project-card.is-visible, .skill-card.is-visible {
            opacity: 1;
            transform: translateY(0);
        }
      `}</style>
    </div>
  );
}



