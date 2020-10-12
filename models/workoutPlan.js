const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const workoutSchema = new Schema ({
    date: {
        type: Date,
        default: Date.now
    },
    exercises: [{
    type: {    
        type: String,
        trim: true,
        required: 'Enter type of exercise.'
    },
    name: {
        type: String,
        trim: true,
        required: 'Enter exercise name.'
    },
    duration: {
        type: Number,
        required: 'Enter exercise duration in minutes.'
    },
    weight: {
        type: Number,
        // required: 'Enter total weight lifted.'
    },
    sets: {
        type: Number,
        // required: 'Enter total sets performed.'
    },
    reps: {
        type: Number,
        // required: 'Enter total reps performed.'
    },
    distance: {
        type: Number,
        // required: 'Enter total distance covered.'
    }}]
}, {
    toJSON:{
        virtuals: true
    }
});

workoutSchema.virtual('totalDuration').get(function() {
    return this.exercises.reduce((total, exercise) => {
        return total + exercise.duration;
    }, 0 
    );
});
const Workout = mongoose.model('Workout', workoutSchema);

module.exports = Workout;