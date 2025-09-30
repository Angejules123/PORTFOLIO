import { BrainCircuit,SiPython,SiPostgresql,SiScikitlearn,SiTensorflow,SiTableau,SiApacheairflow,SiAmazon,SiApachespark,SiMongodb,SiGit} from "../components/IconCompetence";


// Données extraites de votre CV pour peupler le site
export const portfolioData = {
  name: "Tia Ange Jules",
  title: "Data Scientist & Développeur Python | M2 Data Science",
  email: "tangejulest@gmail.com",
  phone: "+216 51 831 884",
  location: "Monastir, Tunisie",
  cvUrl: "./public/cv/CV Tia.pdf", // Assurez-vous que ce fichier est dans le dossier public
  socials: {
    linkedin: "https://www.linkedin.com/in/ange-jules-tia-1a7b4a220/", // À remplacer
    github: "https://github.com/Angejules123",
  },
  
  about: "Étudiant en Master 2 Data Science et développeur Python, je suis passionné par l'utilisation de l'apprentissage automatique et de l'analyse statistique pour transformer des données complexes en solutions concrètes. Mon expertise s'étend de la modélisation de données à l'implémentation d'algorithmes de Deep Learning pour l'Algo Trading, cherchant toujours à extraire des insights exploitables. Je suis à la recherche d'opportunités pour mettre en pratique mes compétences et contribuer à des projets innovants.",
  
  
  projects: [
    {
      title: "Plateforme de vote sécurisée et d'analyse électorale",
      description: "Conception d'un système de vote intégrant la **blockchain** pour garantir l'intégrité des données et l'immuabilité des votes. Une partie **IA/ML** est dédiée à l'analyse des tendances de vote et à la détection d'anomalies, permettant de renforcer la sécurité et de fournir des insights sur les comportements électoraux.",
      videoUrl: "/videos/vote_app.mp4",
      imageUrl: "images/vote_app/VotingA.png",
      tags: ["Blockchain", "Analyse de Données", "IA", "Détection d'Anomalies", "Smart Contracts", "Node.js"],
      screenshots: [
        "images/vote_app/1.png", "images/vote_app/2.png", "images/vote_app/3.png", "images/vote_app/4.png",
        "images/vote_app/5.png", "images/vote_app/6.png", "images/vote_app/7.png", "images/vote_app/8.png",
        "images/vote_app/9.png", "images/vote_app/10.png", "images/vote_app/11.png", "images/vote_app/12.png",
        "images/vote_app/13.png", "images/vote_app/14.png",
      ],
      githubUrl: "https://github.com/Ahebiemarc/monpresident_app"
    },
    {
      title: "Analyse Géospatiale pour la location immobilière",
      description: "Développement d'un système d'analyse de données de logements pour aider les utilisateurs à trouver des locations optimales. Le projet inclut le nettoyage et la préparation des données géospatiales et des prix (`MongoDB`), l'utilisation d'algorithmes de **recommandation** basés sur la **géolocalisation** et l'implémentation d'une API pour exposer les résultats d'analyse.",
      videoUrl: "https://placehold.co/1920x1080/333/fff.mp4?text=Vidéo+Projet+2",
      imageUrl: "https://img.freepik.com/vecteurs-libre/recherche-immobiliere-telephone-mobile_23-2148656898.jpg?semt=ais_hybrid&w=740&q=80",
      tags: ["Analyse de Données", "Géolocalisation", "Recommandation", "MongoDB", "Data Engineering", "API REST"],
      screenshots: [
        "images/shaus/1.png", "images/shaus/2.png", "images/shaus/3.png", "images/shaus/4.png", "images/shaus/5.png",
        "images/shaus/6.png", "images/shaus/7.png", "images/shaus/9.png", "images/shaus/10.png",
        "images/shaus/11.png", "images/shaus/12.png", "images/shaus/13.png",
      ],
      githubUrl: "https://github.com/Ahebiemarc/monpresident_app"
    },
    {
      title: "Analyse et Prédiction de la Vente de Billets d'Événements",
      description: "Création d'une plateforme d'événements avec un focus sur l'analyse du comportement d'achat des utilisateurs. Ce projet utilise `MongoDB` pour stocker les données transactionnelles et des modèles prédictifs pour prévoir la demande de billets et optimiser les stratégies de tarification.",
      videoUrl: "https://placehold.co/1920x1080/333/fff.mp4?text=Vidéo+Projet+3",
      imageUrl: "https://placehold.co/600x400/1a1a1a/ffffff?text=Events+Web+App",
      tags: ["Analyse Prédictive", "MongoDB", "Modélisation", "Séries Temporelles", "Data Analysis"],
    },
    {
      title: "Système de Reconnaissance Faciale et de Classification d'Images",
      description: "Développement d'un système de reconnaissance faciale basé sur le **traitement d'images** et le **Deep Learning**. Ce projet a consisté à construire un pipeline de données pour l'entraînement d'un modèle de classification, en utilisant des bibliothèques Python comme **OpenCV** et des frameworks de ML pour la détection et l'identification des visages.",
      videoUrl: "https://placehold.co/1920x1080/333/fff.mp4?text=Vidéo+Projet+4",
      imageUrl: "https://placehold.co/600x400/1a1a1a/ffffff?text=Facial+Recognition",
      tags: ["Python", "Deep Learning", "Computer Vision", "OpenCV", "Modélisation"],
    },
    {
      title: "Modèle Anti-Spoofing pour la Sécurité Biométrique",
      description: "Création d'un modèle de **Deep Learning** pour la détection des attaques par usurpation d'identité. Le projet inclut la collecte et la labellisation des données, l'entraînement d'un réseau de neurones sur GPU (`CUDA`) pour optimiser les performances, et le déploiement d'une solution de sécurité biométrique robuste.",
      videoUrl: "https://placehold.co/1920x1080/333/fff.mp4?text=Vidéo+Projet+5",
      imageUrl: "https://placehold.co/600x400/1a1a1a/ffffff?text=Anti-Spoofing",
      tags: ["Python", "Deep Learning", "Modélisation", "CUDA", "Sécurité"],
    },
    {
      title: "Développement d'une API de Paiement et d'Analyse Transanctionnelle",
      description: "Création d'une API de paiement (`.NET Core`) pour un système de paiement par QR code, couplée à une base de données **PostgreSQL**. Le projet met l'accent sur la conception d'un schéma de base de données pour l'analyse transactionnelle, l'optimisation des requêtes SQL et la mise en place d'un processus **ETL** (`Docker`) pour l'ingestion des données et la génération de rapports financiers.",
      videoUrl: "https://placehold.co/1920x1080/333/fff.mp4?text=Vidéo+Projet+6",
      imageUrl: "https://placehold.co/600x400/1a1a1a/ffffff?text=Scan2Pay",
      tags: ["Data Engineering", "PostgreSQL", "ETL", "Docker", "API REST", "Analyse Transanctionnelle"],
      screenshots: [
        "https://images.unsplash.com/photo-1587620962725-abab7fe55159?q=80&w=1331&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1564865878688-9a244444042a?q=80&w=1470&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=1470&auto=format&fit=crop",
      ],
      githubUrl: "https://github.com"
    },
  ],
skills: [
  { name: "Python", icon: <SiPython className="w-8 h-8" /> },
  { name: "SQL (PostgreSQL, MySQL)", icon: <SiPostgresql className="w-8 h-8" /> },
  { name: "IA / Machine Learning", icon: <BrainCircuit className="w-8 h-8" /> },
  { name: "SciPy / NumPy / Pandas", icon: <SiPython className="w-8 h-8" /> },
  { name: "Scikit-learn", icon: <SiScikitlearn className="w-8 h-8" /> },
  { name: "TensorFlow / PyTorch", icon: <SiTensorflow className="w-8 h-8" /> },
  { name: "MongoDB", icon: <SiMongodb className="w-8 h-8" /> },
  { name: "Data Visualization (Matplotlib, Seaborn, Tableau)", icon: <SiTableau className="w-8 h-8" /> },
  { name: "ETL / Data Pipelines", icon: <SiApacheairflow className="w-8 h-8" /> },
  { name: "Cloud Computing (AWS, Azure, GCP)", icon: <SiAmazon className="w-8 h-8" /> },
  { name: "Big Data (Spark, Hadoop)", icon: <SiApachespark className="w-8 h-8" /> },
  { name: "Git / GitHub", icon: <SiGit className="w-8 h-8" /> },
], 
};