import express from "express"
import {getHome} from "../controllers/controller.js"
let router = express()

router.get("/", getHome)


export default router