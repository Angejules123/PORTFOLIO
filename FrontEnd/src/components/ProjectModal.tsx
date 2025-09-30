// Composant pour la modale vidéo du projet

import { useEffect, useState } from "react";
import type { Project } from "../interfaces/Idata";



const ProjectModal = ({ project, onClose }: { project: Project; onClose: () => void }) => {
  const [activeView, setActiveView] = useState('video'); // 'video' ou 'screenshots'

  useEffect(() => {
    // Si la vidéo n'est pas dispo, mais les screenshots le sont, on affiche les screenshots
    if (!project.videoUrl && project.screenshots && project.screenshots.length > 0) {
      setActiveView('screenshots');
    }
  }, [project]);

  // Gestion de la touche 'Echap'
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  // Sous-composant pour la galerie
  const ScreenshotGallery = ({ images }: { images: string[] }) => {
      const [currentIndex, setCurrentIndex] = useState(0);

      const nextSlide = () => {
          setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      };

      const prevSlide = () => {
          setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
      };

      return (
          <div className="relative w-full h-full bg-black flex items-center justify-center">
              <img src={images[currentIndex]} alt={`Screenshot ${currentIndex + 1}`} className="max-h-full max-w-full object-contain" />
              {images.length > 1 && (
                <>
                    <button onClick={prevSlide} className="absolute left-4 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition-opacity">
                        &#10094;
                    </button>
                    <button onClick={nextSlide} className="absolute right-4 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition-opacity">
                        &#10095;
                    </button>
                </>
              )}
          </div>
      );
  };


  return (
    <div className="fixed inset-0 bg-black bg-opacity-90 flex justify-center items-center z-50 p-4 animate-fade-in" onClick={onClose}>
      <div className="bg-gray-900 rounded-lg shadow-2xl max-w-5xl w-full flex flex-col overflow-hidden animate-slide-up" onClick={(e) => e.stopPropagation()} style={{height: '90vh'}}>
        
        {/* Header de la modale */}
        <div className="p-4 flex justify-between items-center border-b border-gray-700">
            <h2 className="text-xl md:text-2xl font-bold text-cyan-400">{project.title}</h2>
            <button onClick={onClose} className="text-gray-400 hover:text-white text-3xl transition-colors">&times;</button>
        </div>

        {/* Contenu principal (Vidéo ou Galerie) */}
        <div className="relative flex-grow w-full h-full bg-black">
          {activeView === 'video' && project.videoUrl && (
            <video className="absolute top-0 left-0 w-full h-full object-contain" controls autoPlay muted loop>
              <source src={project.videoUrl} type="video/mp4" />
              Votre navigateur ne supporte pas la balise vidéo.
            </video>
          )}
          {activeView === 'screenshots' && project.screenshots?.length ? (
             <ScreenshotGallery images={project.screenshots} />
          ) : null}
           {activeView === 'video' && !project.videoUrl && (
             <div className="w-full h-full flex items-center justify-center text-gray-500">Aucune vidéo disponible.</div>
          )}
           {activeView === 'screenshots' && !project.screenshots?.length && (
             <div className="w-full h-full flex items-center justify-center text-gray-500">Aucune capture d'écran disponible.</div>
          )}
        </div>
        
        {/* Footer avec les boutons d'action */}
        <div className="p-4 bg-gray-800 border-t border-gray-700">
          <p className="text-gray-300 mb-4 text-sm md:text-base">{project.description}</p>
          <div className="flex flex-wrap gap-3">
            <button 
              onClick={() => setActiveView('video')}
              disabled={!project.videoUrl} 
              className={`px-4 py-2 text-sm font-semibold rounded-lg transition-all duration-300 flex items-center gap-2 ${activeView === 'video' ? 'bg-cyan-500 text-white shadow-lg' : 'bg-gray-700 text-gray-300'} disabled:bg-gray-600 disabled:text-gray-500 disabled:cursor-not-allowed hover:enabled:bg-cyan-600`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><path d="M0 12V4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2m6.79-6.907A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814z"/></svg>
              Voir la vidéo
            </button>
            <button 
              onClick={() => setActiveView('screenshots')}
              disabled={!project.screenshots?.length}
              className={`px-4 py-2 text-sm font-semibold rounded-lg transition-all duration-300 flex items-center gap-2 ${activeView === 'screenshots' ? 'bg-cyan-500 text-white shadow-lg' : 'bg-gray-700 text-gray-300'} disabled:bg-gray-600 disabled:text-gray-500 disabled:cursor-not-allowed hover:enabled:bg-cyan-600`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><path d="M4.502 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3"/><path d="M14.002 13a2 2 0 0 1-2 2h-10a2 2 0 0 1-2-2V5A2 2 0 0 1 2 3a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-1.172a1 1 0 0 0-.707.293l-1.586 1.586a1 1 0 0 1-1.414 0l-1.586-1.586A1 1 0 0 0 6.172 13H4.5zM2 1a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h1.172a2 2 0 0 1 1.414.586l1.586 1.586a2 2 0 0 0 2.828 0l1.586-1.586a2 2 0 0 1 1.414-.586H12a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1z"/></svg>
              Voir les captures
            </button>
            <a 
              href={project.githubUrl || ''} 
              target="_blank" 
              rel="noopener noreferrer"
              className={`px-4 py-2 text-sm font-semibold rounded-lg transition-all duration-300 flex items-center gap-2 bg-gray-700 text-gray-300 ${!project.githubUrl ? 'opacity-50 cursor-not-allowed pointer-events-none' : 'hover:bg-gray-600'}`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/></svg>
              Code source
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};


export default ProjectModal;
