const mongoose = require('mongoose');

const JobListingSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  subject: {
    type: String,
    required: true,
  },
  gradeLevel: [String],
  school: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  postedDate: {
    type: Date,
    default: Date.now,
  },
  deadline: {
    type: Date,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  salaryRange: {
    min: Number,
    max: Number,
  },
  requirements: [String],
  status: {
    type: String,
    enum: ['open', 'closed'],
    default: 'open',
  },
});

module.exports = mongoose.model('JobListing', JobListingSchema);