const JobListing = require('../models/JobListing');
const User = require('../models/User');

exports.createJobListing = async (req, res) => {
  try {
    const school = await User.findById(req.user.id);
    if (!school || school.role !== 'school') {
      return res.status(403).json({ message: 'Only schools can post jobs' });
    }

    const jobListing = new JobListing({
      ...req.body,
      school: req.user.id,
    });

    await jobListing.save();
    res.status(201).json(jobListing);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

exports.getJobListings = async (req, res) => {
  try {
    const jobListings = await JobListing.find().populate('school', 'schoolDetails');
    res.status(200).json(jobListings);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

exports.getJobListing = async (req, res) => {
  try {
    const jobListing = await JobListing.findById(req.params.id).populate('school', 'schoolDetails');
    if (!jobListing) {
      return res.status(404).json({ message: 'Job listing not found' });
    }
    res.status(200).json(jobListing);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

exports.updateJobListing = async (req, res) => {
  try {
    let jobListing = await JobListing.findById(req.params.id);
    if (!jobListing) {
      return res.status(404).json({ message: 'Job listing not found' });
    }

    if (jobListing.school.toString() !== req.user.id) {
      return res.status(403).json({ message: 'Not authorized to update this job listing' });
    }

    jobListing = await JobListing.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    res.status(200).json(jobListing);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

exports.deleteJobListing = async (req, res) => {
  try {
    const jobListing = await JobListing.findById(req.params.id);
    if (!jobListing) {
      return res.status(404).json({ message: 'Job listing not found' });
    }

    if (jobListing.school.toString() !== req.user.id) {
      return res.status(403).json({ message: 'Not authorized to delete this job listing' });
    }

    await jobListing.remove();
    res.status(200).json({ message: 'Job listing deleted successfully' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};