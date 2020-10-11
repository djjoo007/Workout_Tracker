const router = require('express').Router();
const Workout = require('../models/workoutPlan.js');

router.post('/api/fitness', ({ body }, res) => {
    Workout.create(body)
    .then(dbFitness => {
        res.json(dbFitness);
    })
    .catch(err => {
        res.status(400).json(err);
    });
});

