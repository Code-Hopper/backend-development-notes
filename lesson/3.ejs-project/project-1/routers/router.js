import express from "express"
import { home, enterChat } from "../controllers/controller.js"

let router = express()

router.get("/", home)

router.post("/enter-chat", enterChat)

export { router }