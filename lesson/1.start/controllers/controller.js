let getHome = (req, res) => {
    // res.status(200).json({ message: "this is some message" })
    // res.status(200).send("<h1>this is some message<h1>")
    res.status(200).sendFile("index.html")
}

let getAbout = (req, res) => {
    // res.status(200).json({ message: "this is some message in about route" })
    res.status(200).sendFile("about.html")
}

export { getHome, getAbout }