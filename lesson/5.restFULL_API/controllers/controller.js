let getHome = (req, res) => {
    res.status(200).json({ message: "you reached home route for /api - endpoint !" })
}

export { getHome }