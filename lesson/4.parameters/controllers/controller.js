let getHome = (req, res) => {

    console.log(req.params)

    try {

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
    // res.status(200).render("index")
}

export { getHome, pathParam, queryParam }