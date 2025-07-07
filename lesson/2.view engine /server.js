import express from "express"
import dotenv from "dotenv"
import ejs from "ejs"
import router from "./models/routers/router.js"

dotenv.config({ path: "./config.env" })

let port = process.env.PORT || 5001

let app = express()

app.use(express.static("public"))

app.use(express.urlencoded({ extended: true }))

app.use(express.json())

app.set("view engine", "ejs")

app.use(router)

app.listen(port, () => {
    console.log(`server is running on port ${port} | http://localhost:${port} !`)
})