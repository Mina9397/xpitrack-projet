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
