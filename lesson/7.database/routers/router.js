import express from "express"
import { getHome, postEntry, getEntry } from "../controllers/controller.js"

let router = express()

router.get("/", getHome)

router.post("/entry", postEntry)
router.get("/entry", getEntry)

export default router