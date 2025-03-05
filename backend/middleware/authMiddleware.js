const jwt = require('jsonwebtoken');
const User = require('../models/User');

exports.authMiddleware = async (req, res, next) => {
  let token;

  if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
    token = req.headers.authorization.split(' ')[1];
  }

  if (!token) {
    return res.status(401).json({ message: 'Not authorized, no token' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = await User.findById(decoded.user.id).select('-password');
    next();
  } catch (err) {
    console.error(err.message);
    res.status(401).json({ message: 'Not authorized, token failed' });
  }
};

exports.adminMiddleware = (req, res, next) => {
  if (req.user.role !== 'admin') {
    return res.status(403).json({ message: 'Not authorized as an admin' });
  }
  next();
};

exports.schoolMiddleware = (req, res, next) => {
  if (req.user.role !== 'school') {
    return res.status(403).json({ message: 'Not authorized as a school' });
  }
  next();
};

exports.teacherMiddleware = (req, res, next) => {
  if (req.user.role !== 'teacher') {
    return res.status(403).json({ message: 'Not authorized as a teacher' });
  }
  next();
};