const Model = require('../models');

class Controller {
  static getEmployees(req, res) {
    Model.getEmployees((err, data) => {
      if (err) console.log(err);
      else {
        res.render('employees', { data });
      }
    });
  }

  static getOneEmployee(req, res) {
    const { id } = req.params;
    Model.getOneEmployee(id, (err, data) => {
      if (err) console.log(err);
      else res.send(data);
    });
  }

  static createEmployeeForm(req, res) {
    res.render('createEmployeeForm');
  }

  static createEmployee(req, res) {
    const { fullName, position, salary } = req.body;
    Model.createEmployee(
      { fullName, position, salary: Number(salary) },
      (err) => {
        if (err) console.log(err);
        else {
          res.redirect('/');
        }
      }
    );
  }

  static updateForm(req, res) {
    const { id } = req.params;
    Model.getOneEmployee(id, (err, data) => {
      if (err) console.log(err);
      else {
        // console.log(data);
        res.render('updateEmployeeForm', { data: data[0] });
      }
    });
  }

  static updateEmployee(req, res) {
    const { fullName, position, salary } = req.body;
    const { id } = req.params;
    Model.updateEmployee(
      id,
      { fullName, position, salary },
      (err) => {
        if (err) console.log(err);
        else res.redirect('/');
      }
    );
  }

  static deleteEmployee(req, res) {
    Model.deleteEmployee();
  }
}

module.exports = Controller;
