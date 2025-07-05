import express from "express"
import dotenv from "dotenv"
import router from "./models/routers/router.js"

dotenv.config({ path: "./config.env" })

let app = express()

let port = process.env.PORT || 5001

app.use(express.static("public"))

app.use(router)

app.listen(port, () => {
    console.log(`server is running on port ${port} !`)
})