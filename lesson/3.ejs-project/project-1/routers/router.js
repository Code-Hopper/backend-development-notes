import express from "express"
import { home } from "../controllers/controller.js"

let router = express()

router.get("/", home)

export { router }