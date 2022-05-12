const db = require('../config/config');

class Model {
  static getEmployees(cb) {
    const query = `SELECT * FROM "Employees";`;
    db.query(query, (err, res) => {
      if (err) cb(err);
      else {
        cb(null, res.rows);
      }
    });
  }

  static getOneEmployee(id, cb) {
    const query = `SELECT * FROM "Employees" WHERE "id" = ${id};`;
    db.query(query, (err, res) => {
      if (err) cb(err);
      else cb(null, res.rows);
    });
  }

  static createEmployee(payload, cb) {
    const query = `INSERT INTO "Employees" ("fullName", "position", "salary") VALUES
    ('${payload.fullName}', '${payload.position}', ${payload.salary});
    `;
    db.query(query, (err) => {
      if (err) cb(err);
      else {
        cb();
      }
    });
  }

  static updateEmployee(id, payload, cb) {
    const query = `
        UPDATE "Employees"
        SET 
            "fullName" = '${payload.fullName}',
            "position" = '${payload.position}',
            "salary" = ${payload.salary}
        WHERE
            id = ${id};
      `;
    console.log(query);
    db.query(query, (err) => {
      if (err) cb(err);
      else cb();
    });
  }

  static deleteEmployee() {}
}

module.exports = Model;
