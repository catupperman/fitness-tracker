const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const workoutSchema = new Schema({
    day: {
        type: Date,
        default: () => new Date(),   
    },
    exercises: [
        {
            type: {
                type: String, 
                trim: true,
                required: "Exercise Type is Required!"
            },
            name: {
                type: String, 
                trim: true,
                required: "Exercise Name is Required!"
            },
            duration: {
                type: Number, 
                required: "Exercise Duration is Required!"
            },
            weight: {
                type: Number
            },
            reps: {
                type: Number
            },
            sets: {
                type: Number
            },
            distance: {
                type: Number
            },
        },
    ],
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout; 