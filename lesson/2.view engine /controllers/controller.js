let getHome = (req, res) => {
    // res.status(200).json({ message: "this is home page" })
    res.status(200).render("index")
}

let getAbout = (req, res) => {
    // res.status(200).json({ message: "this is about page" })
    res.status(200).render("about",{data:[1,2,3,4,5,6]})
}

let getContact = (req, res) => {
    // res.status(200).json({ message: "this is contact page" })
    res.status(200).render("contact")
}

export { getHome, getAbout, getContact }