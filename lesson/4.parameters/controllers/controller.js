let getHome = (req, res) => {

    console.log(req.params)

    try {

        // req object (which has all the path parameters)

        let data = req.params

        if (!data.name && !data.city && !data.age) {
            throw ("no data avaible to display")
        }

        res.status(200).render("index", { data: data })
    } catch (err) {
        console.log('error route')
        res.status(200).render("index", { data: false, message: err })
    }
}

let pathParam = (req, res) => {
    // res.status(200).render("index")
}

let queryParam = (req, res) => {

    // to read query params 

    try {



        let data = req.query

        if (!data.data) {
            throw ("no data avaiable !")
        }

        res.status(200).json({ message: "got some data !", data })
    } catch (err) {
        res.status(200).json({ message: "no data found !", err })
    }
}

export { getHome, pathParam, queryParam }