const Controller = require('../controllers');

const route = require('express').Router();

route.get('/', Controller.getEmployees);
route.post('/create', Controller.createEmployee);
route.get('/create', Controller.createEmployeeForm);
route.get('/:id', Controller.getOneEmployee);
route.post('/:id', Controller.updateEmployee);
route.get('/:id/updateForm', Controller.updateForm);
route.delete('/:id', Controller.deleteEmployee);

module.exports = route;
