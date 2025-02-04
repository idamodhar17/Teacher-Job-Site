const asyncHandler = require('express-async-handler');
const Job = require('../models/Job');
const User = require('../models/Users');

const createJob = asyncHandler(async (req, res) => {
  const { title, description, subject, grade, location, salary } = req.body;

  const job = await Job.create({
    title,
    description,
    subject,
    grade,
    location,
    salary,
    school: req.user._id,
  });

  res.status(201).json(job);
});


const getJobs = asyncHandler(async (req, res) => {
  const jobs = await Job.find().populate('school', 'name email');
  res.json(jobs);
});

const getJobById = asyncHandler(async (req, res) => {
  const job = await Job.findById(req.params.id).populate('school', 'name email');
  
  if (job) {
    res.json(job);
  } else {
    res.status(404);
    throw new Error('Job not found');
  }
});

const applyJob = asyncHandler(async (req, res) => {
  const job = await Job.findById(req.params.id);

  if (job) {
    job.applicants.push(req.user._id);
    await job.save();
    res.json({ message: 'Application submitted successfully' });
  } else {
    res.status(404);
    throw new Error('Job not found');
  }
});

module.exports = { createJob, getJobs, getJobById, applyJob };