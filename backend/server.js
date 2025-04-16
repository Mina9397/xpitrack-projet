const express = require("express")
const cors = require("cors")
const dotenv = require("dotenv")
const path = require("path")
// Commentez temporairement l'importation de connectDB
// const connectDB = require("./config/db")
const errorHandler = require("./middleware/errorHandler")
const config = require("./config/config")

// Charger les variables d'environnement
dotenv.config()

// Commentez temporairement la connexion à la base de données
// connectDB()

const app = express()

// Middleware
app.use(cors())
app.use(express.json())

// Route de base pour tester que le serveur fonctionne
app.get("/", (req, res) => {
  res.json({ message: "Bienvenue sur l'API XPITrack" })
})

// Route de test simple qui ne nécessite pas de base de données
app.get("/api/test", (req, res) => {
  res.json({
    success: true,
    message: "L'API fonctionne correctement",
    note: "La connexion à MongoDB est désactivée temporairement",
  })
})

// Commentez temporairement les routes qui nécessitent MongoDB
/*
app.use("/api/auth", require("./routes/authRoutes"))
app.use("/api/products", require("./routes/productRoutes"))
app.use("/api/employees", require("./routes/employeeRoutes"))
app.use("/api/reports", require("./routes/reportRoutes"))
*/

// Middleware de gestion des erreurs
app.use(errorHandler)

const PORT = config.app.port || 5000

const server = app.listen(PORT, () => {
  console.log(`Serveur démarré sur le port ${PORT} en mode ${config.app.env || "development"}`)
  console.log(`AVERTISSEMENT: La connexion à MongoDB est désactivée temporairement`)
})

// Gérer les rejets de promesse non gérées
process.on("unhandledRejection", (err, promise) => {
  console.log(`Erreur: ${err.message}`)
  // Fermer le serveur et quitter le processus
  server.close(() => process.exit(1))
})
