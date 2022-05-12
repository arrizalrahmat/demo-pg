const db = require('./config');

const createEmployees = `CREATE TABLE "Employees" (
    "id" SERIAL PRIMARY KEY,
    "fullName" VARCHAR NOT NULL,
    "position" VARCHAR NOT NULL,
    "salary" INTEGER NOT NULL
);`;

db.query(createEmployees, (err, res) => {
  if (err) console.log(err);
  else {
    console.log(res);
    db.end();
  }
});
