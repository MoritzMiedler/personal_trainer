const db = require('../db/index.js');

async function getUsers() {
  const { rows } = await db.query('SELECT * FROM users;');
  return {
    code: 200,
    data: rows,
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

// async function deleteCar(id) {
//   const { rowCount } = await db.query('delete from cars where id = $1;', [id]);
//   console.log(rowCount);
//   if (rowCount === 1) {
//     return {
//       code: 200,
//       data: 'Car deleted',
//     };
//   }
//   return {
//     code: 404,
//     data: `Car with id ${id} wasnt found.`,
//   };
// }

// async function getOwnerId(owner) {
//   try {
//     const { rows } = await db.query(
//       'select id from owner where first_name = $1 and last_name = $2',
//       [owner.firstName, owner.lastName],
//     );
//     return rows[0].id;
//   } catch (err) {
//     return null;
//   }
// }

// async function addCar(e) {
//   try {
//     const { rows } = await db.query('select max(id) as max from cars');
//     const carId = rows[0].max + 1;

//     const id = await getOwnerId(e.owner);

//     if (id === null) {
//       return {
//         code: 404,
//         data: 'Owner not found',
//       };
//     }

//     await db.query(
//       'insert into cars (id, title, image, status, price, miles, year_of_make, description, owner) values($1, $2, $3, $4, $5, $6, $7, $8, $9)',
//       [carId, e.title, e.image, e.status, e.price, e.miles, e.yearOfMake, e.description, id],
//     );

//     return {
//       code: 200,
//       data: `Car added with id ${carId}`,
//     };
//   } catch (err) {
//     return {
//       code: 500,
//       data: `Error while adding car. Error: ${err.message}`,
//     };
//   }
// }

// async function changeStatusCar(id, data) {
//   try {
//     const { rows } = await db.query('SELECT * FROM cars where id = $1', [id]);
//     if (rows[0] === undefined) {
//       return {
//         code: 404,
//         data: 'Car not found',
//       };
//     }

//     const props = [];
//     for (const key in data) {
//       if (Object.prototype.hasOwnProperty.call(data, key)) {
//         props.push(`${key}='${data[key]}'`);
//       }
//     }

//     const cmd = `Update cars set ${props.join(',')} where id = $1`;
//     await db.query(cmd, [id]);

//     return {
//       code: 200,
//       data: 'Car updated',
//     };
//   } catch (err) {
//     return {
//       code: 500,
//       data: `Error while editing car. Error: ${err.message}`,
//     };
//   }
// }

module.exports = { getUsers, getSessions, getPlans, getGyms };
