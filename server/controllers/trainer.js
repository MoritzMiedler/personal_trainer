const asyncHandler = require('express-async-handler');
const trainerModel = require('../model/trainer.js');

const getUsers = asyncHandler(async (req, res) => {
  const { code, data } = await trainerModel.getUsers();
  res.status(code).json(data);
});

const getPlans = asyncHandler(async (req, res) => {
  const { code, data } = await trainerModel.getPlans();
  res.status(code).json(data);
});

const getSessions = asyncHandler(async (req, res) => {
  const { code, data } = await trainerModel.getSessions();
  res.status(code).json(data);
});

const getGyms = asyncHandler(async (req, res) => {
  const { code, data } = await trainerModel.getGyms();
  res.status(code).json(data);
});

const addUser = asyncHandler(async (req, res) => {
  await trainerModel.addUser(req.body.user_name, req.body.user_birthday, req.body.user_activitylevel);
});

const editUser = asyncHandler(async (req, res) => {
  await trainerModel.editUser(req.body, req.params.id);
});

const deleteUser = asyncHandler(async (req, res) => {
  const { code, data } = await trainerModel.deleteUser(req.params.id);
  res.status(code).json(data);
});

module.exports = { getUsers, getPlans, getSessions, getGyms, addUser, editUser, deleteUser };
