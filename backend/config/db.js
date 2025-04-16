const mongoose = require('mongoose');

const uri =mongodb+srv//nourhenetarhouni5:<8P6VZ4QaBRqTyswq>@cluster0.rtgeqof.mongodb.net/?retryWrites=true&w=majority&appName=xpitrack
mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('Connecté à MongoDB Atlas!'))
.catch(err => console.error('Erreur de connexion:', err));