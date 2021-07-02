const express = require('express');
const { 
  getAllTeachers, 
  getTeacherById, 
  updateTeacherById, 
  deleteTeacherById, 
  createTeacher } = require('../controllers/teachers')

const router = express.Router();

router.get('/', getAllTeachers);
router.get('/:id', getTeacherById);
router.put('/:id', updateTeacherById);
router.delete('/:id', deleteTeacherById);
router.post('/', createTeacher);

module.exports = router;