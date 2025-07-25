let getEntryHome = (req, res) => {
    res.status(200).json({
        message: "you reached enrty router. please use /api as endpoint to reach/access different routes", you_can_try: [
            {
                activity: 1,
                discription: "activity 1 does something",
                route: "/api/hello"
            },
            {
                activity: 2,
                discription: "activity 2 does something",
                route: "/api/hi"
            },
            {
                activity: 3,
                discription: "activity 3 does something",
                route: "/api/hello"
            },
            {
                activity: 1,
                discription: "activity 4 does something",
                route: "/api/hello"
            }
        ]
    })
}


export { getEntryHome }