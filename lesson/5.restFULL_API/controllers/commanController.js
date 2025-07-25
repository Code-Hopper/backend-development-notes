let get404 = (req, res) => {
    res.status(404).json({ message: "the route/content does not exists ! request to http://localhost:4000 to start !" })
}

export { get404 }