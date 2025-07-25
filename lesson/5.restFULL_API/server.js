import express from "express"
import dotenv from "dotenv"
import router from "./routers/router.js"
import entryRouter from "./routers/entry.js"

import { get404 } from "./controllers/commanController.js"

dotenv.config({ path: "./config.env" })

const app = express()

let port = process.env.PORT || 4001

app.use(express.json())

app.use(express.urlencoded({ extended: "true" }))

app.use("/api", router)

app.use("/", entryRouter)

app.use(get404)

app.listen(port, () => {
    console.log(`server is running on ${port}  | http://localhost:${port} !`)
})