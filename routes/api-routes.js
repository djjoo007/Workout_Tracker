const router = require('express').Router();
const Workout = require('../models/workout.js');
const express = require('express');

//Post to create new workout
router.post('/api/workouts', ({ body }, res) => {
    Workout.create(body)
    .then(dbWorkouts => {
        res.json(dbWorkouts);
    })
    .catch(err => {
        res.status(400).json(err);
    });
});

//Find by Id and Update workout
router.put('/api/workouts/:id', ({ body, params }, res) => {
    Workout.findByIdAndUpdate(params.id, 
        { $push: { exercises: body } },
        { new: true, runValidators: true }
        ).then(dbWorkouts => {
            res.json(dbWorkouts);
        })
        .catch(err => {
            res.status(400).json(err);
        });
});

//Get find all workout
router.get('/api/workouts', (req, res) => {
    Workout.find()
    .then(dbWorkouts => {
        res.json(dbWorkouts);
    })
    .catch(err => {
        res.status(400).json(err);
    });
});

router.get('/api/workouts/range', (req, res) => {
    Workout.find({}).limit(7)
    .then(dbWorkouts => {
        res.json(dbWorkouts);
    })
    .catch(err => {
        res.status(400).json(err);
    });
});

module.exports = router;