import express from "express"
import { getHome, queryParam } from "../controllers/controller.js"

let router = express()

router.get("/", getHome)

router.get("/:name/:age/:city", getHome)

router.get("/search", queryParam)

export default router

// path parameters (id based search, delete, selection) 
// query parameters (gernal search query, to send multiple fields data)


// https/http://domain-name/endpoint?query1="some data"&query2="some data again"