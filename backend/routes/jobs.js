const express = require('express');
const { createJob, getJobs, getJobById, applyJob } = require('../controllers/jobControllers');
const { protect, school, teacher } = require('../middlewares/auth');

const router = express.Router();

router.route('/').post(protect, school, createJob).get(getJobs);
router.route('/:id').get(getJobById);
router.post('/:id/apply', protect, teacher, applyJob);

module.exports = router;