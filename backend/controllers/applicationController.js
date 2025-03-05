const Application = require('../models/Applications');
const JobListing = require('../models/JobListing');
const User = require('../models/Users');

exports.createApplication = async (req, res) => {
  try {
    const teacher = await User.findById(req.user.id);
    if (!teacher || teacher.role !== 'teacher') {
      return res.status(403).json({ message: 'Only teachers can apply for jobs' });
    }

    const jobListing = await JobListing.findById(req.body.jobListing);
    if (!jobListing) {
      return res.status(404).json({ message: 'Job listing not found' });
    }

    const application = new Application({
      teacher: req.user.id,
      jobListing: req.body.jobListing,
      coverLetter: req.body.coverLetter,
      resume: teacher.teacherDetails.resume,
    });

    await application.save();
    res.status(201).json(application);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

exports.getApplicationsByTeacher = async (req, res) => {
  try {
    const applications = await Application.find({ teacher: req.user.id }).populate('jobListing', 'title description');
    res.status(200).json(applications);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

exports.getApplicationsByJobListing = async (req, res) => {
  try {
    const jobListing = await JobListing.findById(req.params.id);
    if (!jobListing) {
      return res.status(404).json({ message: 'Job listing not found' });
    }

    if (jobListing.school.toString() !== req.user.id) {
      return res.status(403).json({ message: 'Not authorized to view applications for this job listing' });
    }

    const applications = await Application.find({ jobListing: req.params.id }).populate('teacher', 'name email teacherDetails');
    res.status(200).json(applications);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

exports.updateApplicationStatus = async (req, res) => {
  try {
    const application = await Application.findById(req.params.id);
    if (!application) {
      return res.status(404).json({ message: 'Application not found' });
    }

    const jobListing = await JobListing.findById(application.jobListing);
    if (!jobListing) {
      return res.status(404).json({ message: 'Job listing not found' });
    }

    if (jobListing.school.toString() !== req.user.id) {
      return res.status(403).json({ message: 'Not authorized to update this application' });
    }

    application.status = req.body.status;
    await application.save();

    res.status(200).json(application);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};