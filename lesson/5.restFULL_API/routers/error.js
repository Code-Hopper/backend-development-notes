import express from "express"
import { get404 } from "../controllers/commanController.js"

let errorRouter = express()

errorRouter.get("*", get404)

export default errorRouter