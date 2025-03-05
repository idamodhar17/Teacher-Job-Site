const mongoose = require('mongoose');

const ApplicationSchema = new mongoose.Schema({
  teacher: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  jobListing: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'JobListing',
    required: true,
  },
  applicationDate: {
    type: Date,
    default: Date.now,
  },
  status: {
    type: String,
    enum: ['pending', 'reviewed', 'accepted', 'rejected'],
    default: 'pending',
  },
  coverLetter: {
    type: String,
  },
  resume: {
    type: String,
  },
});

module.exports = mongoose.model('Application', ApplicationSchema);