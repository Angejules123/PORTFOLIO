import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const portfolioData = {
  name: "Tia Ange Jules",
};


const sectionRefs = {
  home: React.createRef<HTMLDivElement>(),
  projects: React.createRef<HTMLDivElement>(),
  skills: React.createRef<HTMLDivElement>(),
  about: React.createRef<HTMLDivElement>(),
  contact: React.createRef<HTMLDivElement>(),
  cv: React.createRef<HTMLDivElement>(),
};

const ResponsiveHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  // Gestion du scroll -> header change de style
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "auto";
  }, [isMenuOpen]);

  const scrollToSection = (section: keyof typeof sectionRefs) => {
    const targetRef = sectionRefs[section];
    if (targetRef.current) {
      targetRef.current.scrollIntoView({ behavior: "smooth" });
    }
    setActiveSection(section);
    setIsMenuOpen(false);
  };

  const navLinks = ["home", "projects", "skills", "about", "contact", "cv"];

  const renderNavLinks = (isMobile = false) =>
    navLinks.map((section) => (
      <button
        key={section}
        onClick={() => scrollToSection(section as keyof typeof sectionRefs)}
        className={`relative capitalize transition-colors duration-300 ${
          isMobile ? "text-3xl py-4" : "text-lg"
        } ${
          activeSection === section
            ? "text-cyan-400"
            : "text-gray-300 hover:text-cyan-400"
        }`}
      >
        {section === "home"
          ? "Accueil"
          : section === "projects"
          ? "Projets"
          : section === "skills"
          ? "Compétences"
          : section === "about"
          ? "À propos"
          : section === "contact"
          ? "Contact"
          : "CV"}
        {/* underline animée */}
        <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
      </button>
    ));

  return (
    <header
      className={`fixed top-0 w-full z-30 transition-all duration-300 ${
        scrolled ? "bg-gray-900/95 shadow-lg" : "bg-gray-900/70 backdrop-blur-sm"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between p-4">
        {/* Nom/logo animé */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-2xl font-extrabold text-cyan-400 tracking-wide"
        >
          {portfolioData.name}
        </motion.h1>

        {/* Navigation desktop */}
        <nav className="hidden md:flex space-x-6">{renderNavLinks()}</nav>

        {/* Hamburger mobile */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-gray-300 hover:text-cyan-400 focus:outline-none"
          >
            <svg
              className="w-7 h-7"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Menu mobile animé */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-gray-900 z-40 flex flex-col items-center justify-center space-y-8"
          >
            {renderNavLinks(true)}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default ResponsiveHeader;
