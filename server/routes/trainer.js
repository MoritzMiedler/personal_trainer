const express = require('express');
const {
  getUsers,
  getPlans,
  getGyms,
  getSessions,
  editUser,
  editPlan,
  editGym,
  editSession,
  deleteUser,
  deletePlan,
  deleteGym,
  deleteSession,
  addUser,
  addPlan,
  addGym,
  addSession,
} = require('../controllers/trainer');

const router = express.Router();

//user routes
router.get('/users', getUsers);
// router.patch('/users/:id', editUser);
// router.delete('/users/:id', deleteUser);
router.post('/users', addUser);

// //plan routes
router.get('/plans', getPlans);
// router.patch('/plans/:id', editPlan);
// router.delete('/plans/:id', deletePlan);
// router.post('/plans', addPlan);

// //gym routes
router.get('/gyms', getGyms);
// router.patch('/plans/:id', editGym);
// router.delete('/plans/:id', deleteGym);
// router.post('/plans', addGym);

// //session routes
router.get('/sessions', getSessions);
// router.patch('/sessions/:id', editSession);
// router.delete('/sessions/:id', deleteSession);
// router.post('/session', addSession);

module.exports = router;
