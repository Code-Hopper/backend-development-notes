import express from "express"
import { getRandomTechnology, getFiltredTechnologies } from "../controllers/controller.js"
let router = express()

router.get("/random", getRandomTechnology)

router.get("/filter", getFiltredTechnologies)

export { router }