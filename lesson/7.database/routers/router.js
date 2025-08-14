import express from "express"
import { getHome, postEntry } from "../controllers/controller.js"

let router = express()

router.get("/", getHome)

router.post("/entry", postEntry)

export default router