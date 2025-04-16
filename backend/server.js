<<<<<<< HEAD
const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const path = require("path");
const connectDB = require("./config/db");
const errorHandler = require("./middleware/errorHandler");
const config = require("./config/config");
=======
<<<<<<< HEAD
const express = require('express');
//const connectDB = require('./db');
 const db = require('./backend/config/db');
const employeeRoutes = require('./routes/employeeRoutes');
const Produit = require('./models/Produit');

const app = express();
connectDB();

app.use(express.json());

// Exemple de route test
app.get('/', (req, res) => {
  res.send('API fonctionnelle');
});
// Utilisation du routeur pour le chemin /employees
app.use('/employees', employeeRoutes);
// Route d'ajout d'un produit
app.use('/produits', async (req, res)) 
  const nouveauProduit = new Produit({
    nom: req.body.nom,
    prix: req.body.prix
  });
  try {
    const produitSauvegarde =  nouveauProduit.save();
    res.status(201).json(produitSauvegarde);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }


// Route pour récupérer tous les produits
app.get('/produits', async (req, res) => {
  try {
    const produits = await Produit.find();
    res.json(produits);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});


const PORT = 5000;
app.listen(PORT, () => console.log(`Serveur lancé sur le port ${PORT}`));
=======
const express = require("express")
const cors = require("cors")
const dotenv = require("dotenv")
const path = require("path")
const connectDB = require("./config/db")
const errorHandler = require("./middleware/errorHandler")
const config = require("./config/config")
>>>>>>> dcec347c1a6db1e5550891399b7b5932a8ec8421

// Charger les variables d'environnement
dotenv.config();

// Connexion à la base de données
connectDB();

const app = express();
app.use(helmet());

// Activer la compression des réponses HTTP
app.use(compression());

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/products", require("./routes/productRoutes"));
app.use("/api/employees", require("./routes/employeeRoutes"));
app.use("/api/reports", require("./routes/reportRoutes"));

// Route de base
app.get("/", (req, res) => {
  res.json({ message: "Bienvenue sur l'API XPITrack" });
});

// Middleware de gestion des erreurs
app.use(errorHandler);

const PORT = config.app.port;

const server = app.listen(PORT, () => {
  console.log(`Serveur démarré sur le port ${PORT} en mode ${config.app.env}`);
});

// Gérer les rejets de promesse non gérées
process.on("unhandledRejection", (err, promise) => {
  console.log(`Erreur: ${err.message}`);
  // Fermer le serveur et quitter le processus
<<<<<<< HEAD
  server.close(() => process.exit(1));
});
=======
  server.close(() => process.exit(1))
})
>>>>>>> 3eabd6452b97f088b41e4c5a40b1ee076e4bf985
>>>>>>> dcec347c1a6db1e5550891399b7b5932a8ec8421
