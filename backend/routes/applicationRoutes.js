const express = require('express');
const router = express.Router();
const applicationController = require('../controllers/applicationController');
const authMiddleware = require('../middleware/authMiddleware');
const teacherMiddleware = require('../middleware/teacherMiddleware');
const schoolMiddleware = require('../middleware/schoolMiddleware');

router.post('/', authMiddleware, teacherMiddleware, applicationController.createApplication);
router.get('/', authMiddleware, teacherMiddleware, applicationController.getApplicationsByTeacher);
router.get('/jobs/:id/applications', authMiddleware, schoolMiddleware, applicationController.getApplicationsByJobListing);
router.put('/:id', authMiddleware, schoolMiddleware, applicationController.updateApplicationStatus);

module.exports = router;