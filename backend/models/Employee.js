const mongoose = require('mongoose');

const EmployeeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Veuillez ajouter un nom'],
    trim: true,
  },
  email: {
    type: String,
    required: [true, 'Veuillez ajouter un email'],
    unique: true,
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      'Veuillez ajouter un email valide',
    ],
  },
  role: {
    type: String,
    required: [true, 'Veuillez ajouter un rôle'],
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  department: {
    type: String,
    default: 'General',
  },
  phoneNumber: {
    type: String,
  },
  address: {
    type: String,
  },
  hireDate: {
    type: Date,
    default: Date.now,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

// Middleware pour mettre à jour la date de modification
EmployeeSchema.pre('save', function(next) {
  this.updatedAt = Date.now();
  next();
});

module.exports = mongoose.model('Employee', EmployeeSchema);