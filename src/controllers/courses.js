const { json } = require('express');
const Course = require('../models/course');

async function getAllCourses(req, res) {
  const courses = await Course.find().exec();
  return res.json(courses);
}

async function getCourseById(req, res) {
  const { id } = req.params;
  const course = await Course.findById(id);
  if (!course) {
    return res.sendStatus(404);
  } 
  return res.json(course);
}

async function updateCourseById(req, res) {
  const { id } = req.params;
  // 从body获取输入的数据
  const { name, description } = req.body;
  // 想要更新的内容在{}, 如果不设置new: true则会返回更新之前的
  // 更新之前要检查description有没有，不然会返回null
  const course = await Course.findByIdAndUpdate( id, {name, description}, {new: true});
  if (!course) {
    return res.sendStatus(404);
  } 
  return res.json(course);
}

async function deleteCourseById(req, res) {
  const { id } = req.params;
  const course = await Course.findByIdAndDelete( id );
  if (!course) {
    return res.sendStatus(404);
  } 
  // 204代表no content
  return res.sendStatus(204);
  // 如果前段想要知道到底哪个被删掉了就返回回去
  // return res.json(course);
}

async function createCourse(req, res) {
  // 从body获取输入的数据
  const { code, name, description } = req.body;
  // 通过Course model生成新的course document
  const course = new Course({ _id: code, name, description });
  // save()不需要写exec()
  await course.save();
  return res.status(201).json(course);
}

module.exports = {
  getAllCourses, getCourseById, updateCourseById, deleteCourseById, createCourse
}