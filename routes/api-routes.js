const router = require('express').Router();
const Fitness = require('../models/workoutPlan.js');

router.post('/api/fitness', ({ body }, res) => {
    Fitness.create(body)
    .then(dbFitness => {
        res.json(dbFitness);
    })
    .catch(err => {
        res.status(400).json(err);
    });
});

