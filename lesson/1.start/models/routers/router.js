import express from "express"

import { getHome, getAbout } from "../../controllers/controller.js"

let router = express()

// get, post, put, patch, delete

router.get("/", getHome)
router.get("/about", getAbout)

export default router