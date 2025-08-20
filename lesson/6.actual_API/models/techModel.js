import mongoose from "mongoose";

let techSchema = mongoose.Schema({
    _id: {
        type: Number,
        require: true
    },
    title: {
        type: String,
        require: true
    },
    difficulty: {
        type: String,
        require: true
    }, duration: {
        type: Number,
        require: true
    }, scope: {
        type: Array,
        require: true
    }
})

let techModel = new mongoose.model("techs", techSchema)

export { techModel }