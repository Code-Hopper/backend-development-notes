import "../database/conn.js"
import { dataModel } from "../models/dataSchema.js"

let getHome = (req, res) => {
    res.status(200).json({ message: "welcome to home route !" })
}

let postEntry = async (req, res) => {
    try {
        let { name, phone, email } = req.body

        console.log(name, phone, email)

        let entry = new dataModel({ name, phone, email })

        await entry.save()

        console.log("entry/data saved successfully !")

        res.status(202).json({ message: "entry/data saved successfully !" })
    } catch (err) {
        console.log("unable to save data : ", err)
        res.status(500).json({ message: "unable to save data at this moment please try again !" })
    }
}

export { getHome, postEntry }