import { technologies } from "../database.js"

let getRandomTechnology = (req, res) => {

    let randomNumber = Math.round((Math.random() * 49) + 1)

    let data = technologies.filter((technology) => { return randomNumber == technology.id })

    res.status(200).json({ message: "the random technology to learn !", technology: data })
}

let getFiltredTechnologies = (req, res) => {
    let { difficulty } = req.query

    let { duration } = req.query

    console.log(req.query)

    try {
        if (!difficulty && !duration) {
            throw ("invalid request please set difficulty/duration parameters !")
        }

        let data = []

        if (difficulty) {
            data = technologies.filter((technology) => {
                return technology.difficulty.toLowerCase() == difficulty.toLowerCase()
            })
        }

        if (duration) { 
            data = technologies.filter((technology) => {
                return technology.duration == duration
            })
        }

        if (data.length < 1) {
            throw ("data not found !")
        }

        res.status(200).json({ message: "data you were requesting !", data })

    } catch (err) {
        res.status(400).json({ message: err })
    }

}

export { getRandomTechnology, getFiltredTechnologies }