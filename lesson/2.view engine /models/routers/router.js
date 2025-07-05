import express from "express"
import {getHome, getAbout, getContact} from "../../controllers/controller.js"
let router = express()

router.get("/", getHome)
router.get("/about", getAbout)
router.get("/contact", getContact)

export default router