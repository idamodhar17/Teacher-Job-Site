const express = require('express');
const router = express.Router();
const jobListingController = require('../controllers/jobListingController');
const { authMiddleware } = require('../middleware/authMiddleware');
const { schoolMiddleware } = require('../middleware/authMiddleware');

router.post('/', authMiddleware, schoolMiddleware, jobListingController.createJobListing);
router.get('/', jobListingController.getJobListings);
router.get('/:id', jobListingController.getJobListing);
router.put('/:id', authMiddleware, schoolMiddleware, jobListingController.updateJobListing);
router.delete('/:id', authMiddleware, schoolMiddleware, jobListingController.deleteJobListing);

module.exports = router;