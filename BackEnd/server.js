const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

// Middleware pour gérer les requêtes et les autorisations
app.use(cors());
app.use(express.json());

// Connexion à la base de données MongoDB
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('Connecté à la base de données MongoDB !'))
  .catch(err => console.error('Erreur de connexion à MongoDB:', err));

// Schéma de données pour le formulaire de contact
const contactSchema = new mongoose.Schema({
  nom: { type: String, required: true },
  email: { type: String, required: true },
  sujet: { type: String, required: false },
  message: { type: String, required: true },
  date: { type: Date, default: Date.now }
});

const Contact = mongoose.model('Contact', contactSchema);

// Route pour soumettre le formulaire
app.post('/api/contact', async (req, res) => {
  try {
    const { nom, email, sujet, message } = req.body;
    
    if (!nom || !email || !message) {
      return res.status(400).json({ message: 'Veuillez remplir les champs obligatoires.' });
    }

    const nouveauContact = new Contact({ nom, email, sujet, message });
    await nouveauContact.save();

    res.status(201).json({ message: 'Votre message a été envoyé avec succès !' });
    
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erreur lors de l\'envoi du message.' });
  }
});

// Démarrer le serveur
app.listen(port, () => {
  console.log(`Le serveur est démarré sur http://localhost:${port}`);
});