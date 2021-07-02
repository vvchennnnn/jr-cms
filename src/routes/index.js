const express = require('express');
const studentRoute = require('./students');
const teacherRoute = require('./teachers');
const courseRoute = require('./courses');

const router = express.Router();

router.use('/students', studentRoute);
router.use('/teachers', teacherRoute);
router.use('/courses', courseRoute);

module.exports = router;