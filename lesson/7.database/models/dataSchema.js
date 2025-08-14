import mongoose from "mongoose";

let dataSchema = mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    phone: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    review: {
        type: Array,
    },
    timeStamp: {
        type: String,
        require: true
    }
})

// pre post

dataSchema.pre("save", function(){
   this.timeStamp = new Date().toLocaleDateString() + "||" + new Date().toLocaleTimeString(0)
})

let dataModel = new mongoose.model("data", dataSchema)

export { dataModel }