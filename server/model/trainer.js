const db = require('../db/index.js');

async function getUsers() {
  const { rows } = await db.query('SELECT * FROM users;');
  return {
    code: 200,
    data: rows,
  };
}

async function addUser(user_name, user_birthday, user_activitylevel) {
  await db.query('insert into users(user_name, user_birthday, user_activitylevel) values ($1,$2,$3);', [
    user_name,
    user_birthday,
    user_activitylevel,
  ]);
}

async function editUser(user_data, id) {
  let upd = [];
  for (key in user_data) upd.push(`${key} = '${user_data[key]}'`);
  const cmd = 'UPDATE users SET ' + upd.join(', ') + ' WHERE user_id = $1';
  await db.query(cmd, [id]);
}

async function deleteUser(id) {
  const { rowCount } = await db.query('delete from users where user_id = $1;', [id]);
  console.log(rowCount);
  if (rowCount === 1) {
    return {
      code: 200,
      data: 'User deleted',
    };
  }
  return {
    code: 404,
    data: `User with id ${id} wasnt found.`,
  };
}

async function getPlans() {
  const { rows } = await db.query('SELECT * FROM plan;');
  return {
    code: 200,
    data: rows,
  };
}

async function getSessions() {
  const { rows } = await db.query('SELECT * FROM sessions;');
  return {
    code: 200,
    data: rows,
  };
}

async function getGyms() {
  const { rows } = await db.query('SELECT * FROM gym;');
  return {
    code: 200,
    data: rows,
  };
}

async function addPlan(plan_description, plan_name, plan_duration, plan_type, plan_price) {
  await db.query(
    'insert into plan(plan_description, plan_name, plan_duration, plan_type, plan_price) values ($1,$2,$3,$4,$5);',
    [plan_description, plan_name, plan_duration, plan_type, plan_price],
  );
}

async function editPlan(plan_data, id) {
  let upd = [];
  for (key in plan_data) upd.push(`${key} = '${plan_data[key]}'`);
  const cmd = 'UPDATE plan SET ' + upd.join(', ') + ' WHERE plan_id = $1';
  await db.query(cmd, [id]);
}

async function deletePlan(id) {
  const { rowCount } = await db.query('delete from plan where plan_id = $1;', [id]);
  console.log(rowCount);
  if (rowCount === 1) {
    return {
      code: 200,
      data: 'Plan deleted',
    };
  }
  return {
    code: 404,
    data: `Plan with id ${id} wasnt found.`,
  };
}

// async function addSession(user_name, user_birthday, user_activitylevel) {
//   await db.query('insert into users(user_name, user_birthday, user_activitylevel) values ($1,$2,$3);', [
//     user_name,
//     user_birthday,
//     user_activitylevel,
//   ]);
// }
// async function addGym(user_name, user_birthday, user_activitylevel) {
//   await db.query('insert into users(user_name, user_birthday, user_activitylevel) values ($1,$2,$3);', [
//     user_name,
//     user_birthday,
//     user_activitylevel,
//   ]);
// }

module.exports = {
  getUsers,
  getSessions,
  getPlans,
  getGyms,
  addUser,
  editUser,
  deleteUser,
  addPlan,
  editPlan,
  deletePlan,
};
