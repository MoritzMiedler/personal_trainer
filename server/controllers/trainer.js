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
  await trainerModel.addUser(req.user_id, req.user_name, req.user_birthday, req.user_level);
});

// const deleteCar = asyncHandler(async (req, res) => {
//   const { code, data } = await carModel.deleteCar(req.params.id);
//   res.status(code).json(data);
// });

module.exports = { getUsers, getPlans, getSessions, getGyms, addUser };
