import dotenv from "dotenv"
import mongoose from "mongoose"
dotenv.config({ path: "./config.env" })

async function conn() {
    try {
        console.log(process.env.MONGODB_STRING)
        await mongoose.connect(process.env.MONGODB_STRING)
        console.log("connected with database successfully !")
    } catch (err) {
        console.log("unable to connect with database : ", err)
    }
}

conn()