const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workoutSchema = new Schema(
    {
        day: {
          type: Date,
          default: Date.now,
        },
        exercises: [
            {
              type: {
                type: String,
                trim: true,
                required: "Please select Cardio or Resistance exercise",
              },
              name: {
                type: String,
                trim: true,
                required: "Please enter an exercise type",
              },
              distance: {
                type: Number,
              },
              duration: {
                type: Number,
                required: true,
              },
              weight: {
                type: Number,
                trim: true,
              },
              sets: {
                type: Number,
                trim: true,
              },
              reps: {
                type: Number,
                trim: true,
              },
            },
          ],
        }
        );
   
const Workout = mongoose.model("Workout", workoutSchema);
  
module.exports = Workout;