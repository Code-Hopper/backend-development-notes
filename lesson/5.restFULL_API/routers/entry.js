import express from "express"
import { getEntryHome } from "../controllers/entryController.js"
let entryRouter = express()

entryRouter.get('/', getEntryHome)

export default entryRouter