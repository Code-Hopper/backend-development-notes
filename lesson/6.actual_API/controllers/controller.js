import { technologies } from "../database.js"
import "../database/conn.js"
import { techModel } from "../models/techModel.js"

let getRandomTechnology = async (req, res) => {
    try {
        let randomNumber = Math.round((Math.random() * 49) + 1)

        let result = await techModel.findOne({ _id: randomNumber })

        if (!result) {
            throw `unable to find ${randomNumber} !`
        }

        res.status(200).json({ message: "the random technology to learn !", technology: result })

    } catch (err) {
        console.log("error while fetch random tech from database : ", err)
        res.status(500).json({ message: "error while sending a random tech please try again later !" })
    }
}

let getFiltredTechnologies = async (req, res) => {
    let { difficulty } = req.query

    let { duration } = req.query

    let { scope } = req.query

    console.log(req.query)

    try {
        if (!difficulty && !duration && !scope) {
            throw ("invalid request please set difficulty/duration parameters !")
        }

        let data = await techModel.find({})

        if (difficulty) {
            data = await techModel.find({ difficulty: difficulty })
        }

        if (duration) {
            data = data.filter((technology) => {
                return technology.duration == duration
            })
        }

        if (scope) {
            data = data.filter((technology) => {
                return technology.scope.some((item) => {
                    return item.toLowerCase() === scope.toLowerCase()
                }
                )
            })
        }

        if (data.length < 1) {
            throw ("data not found !")
        }

        res.status(200).json({ message: "data you were requesting !", we_got: `${data.length} matching results`, data })

    } catch (err) {
        res.status(400).json({ message: err })
    }

}


let getTechnologyBasedOnId = async (req, res) => {
    try {

        let { id } = req.params

        if (isNaN(id)) {
            throw ({ status: 400, message: "id not provided/invalid !" })
        }

        let data = await techModel.findById(id)

        if (!data) {
            throw ({ status: 404, message: `technology not found for id ${id}` })
        }

        res.status(200).json({ message: "the tech you were requesting is : ", data })

    } catch (err) {
        console.log("error while fetch id base data : ", err)
        res.status(500).json({ message: err.message })
    }
}

export { getRandomTechnology, getFiltredTechnologies, getTechnologyBasedOnId }