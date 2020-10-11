const db = require('../models');

//Workout Routes
module.exports = function(app) {
    app.get('/', function(req, res) {
        res.render('index');
    })
}