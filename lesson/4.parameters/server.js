import express from "express"
import dotenv from "dotenv"
import bodyParser from "body-parser"
import ejs from "ejs"

dotenv.config({ path: "./config.env" })

import router from "./routers/router.js"

const app = express()

let port = process.env.PORT || 4001

app.use(express.static("/public"))

app.use(bodyParser.urlencoded({ extended: true }))

app.set('view engine', 'ejs')

app.use(router)

app.listen(port, () => {
    console.log(`server is running on port ${port} , http://localhost:${port}`)
})

// https://domain-name/endpoint?data=value&data2=value2

// query parameter (data, data2)

// https://domain-name/end-point/:student_name