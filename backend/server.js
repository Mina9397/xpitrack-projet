const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const path = require("path");
const connectDB = require("./config/db");
const errorHandler = require("./middleware/errorHandler");
const config = require("./config/config");

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
  server.close(() => process.exit(1));
});
