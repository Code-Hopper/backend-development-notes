import express from "express"
import { getRandomTechnology, getFiltredTechnologies, getTechnologyBasedOnId } from "../controllers/controller.js"
let router = express()

router.get("/random", getRandomTechnology)

router.get("/filter", getFiltredTechnologies)

router.get("/get/:id", getTechnologyBasedOnId)

export { router }