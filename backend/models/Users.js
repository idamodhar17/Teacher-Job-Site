const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ['teacher', 'school', 'admin'],
    default: 'teacher',
  },

  teacherDetails: {
    subject: String,
    gradeLevel: [String],
    qualifications: String,
    experience: Number,
    bio: String,
    contactNumber: String,
    resume: String,
  },
  schoolDetails: {
    schoolName: String,
    address: {
      street: String,
      city: String,
      state: String,
      zipCode: String,
    },
    contactNumber: String,
    website: String,
    numberOfStudents: Number,
    accreditation: String,
  },
  adminDetails: {
    department: String,
    responsibilities: [String],
    contactNumber: String,
  },
});

UserSchema.pre('save', async function (next) {
  if (!this.isModified('password')) {
    next();
  }
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

UserSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

module.exports = mongoose.model('User', UserSchema);