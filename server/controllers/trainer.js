const asyncHandler = require('express-async-handler');
const trainerModel = require('../model/trainer.js');

const getUsers = asyncHandler(async (req, res) => {
  const { code, data } = await trainerModel.getUsers();
  res.status(code).json(data);
});

// const deleteCar = asyncHandler(async (req, res) => {
//   const { code, data } = await carModel.deleteCar(req.params.id);
//   res.status(code).json(data);
// });

module.exports = { getUsers };
