const db = require('../models');
const path = require('path');

//Workout Routes
module.exports = function(app) {
    app.get('/', function(req, res) {
        res.sendFile(path.join(_dirname, '../public/index.html'));
    });
    app.get
}