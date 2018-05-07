const mongoose = require('mongoose'),
        Task = mongoose.model('Task'),
        tasks = require('../controllers/tasks');

module.exports = (app) => {

    app.get('/tasks', (req, res) => {
        tasks.retrieveAll(req, res);
    })

    app.get('/tasks/:id', (req, res) => {
        tasks.retrieveById(req, res);
    });

    app.post('/tasks', (req, res) => {
        tasks.create(req, res);
    });

    app.put('/tasks/:id', (req, res) => {
        console.log("request: body", req);
        tasks.updateById(req, res);
    });

    app.delete('/tasks/:id', (req, res)=> {
        tasks.removeById(req, res);
    });

}