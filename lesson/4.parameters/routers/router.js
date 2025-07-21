import express from "express"
import { getHome } from "../controllers/controller.js"

let router = express()

router.get("/", getHome)

router.get("/:name/:age/:city", getHome)

export default router