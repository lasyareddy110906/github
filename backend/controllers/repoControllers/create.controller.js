import { RepositoryModel } from "../../models/RepositoryModel.js"

export const createRepoController = async (req, res) => {
    try {
        const newrepo = req.body
        const newrepodocument = new RepositoryModel(newrepo)
        const result = await newrepodocument.save()
        console.log("repository created successfully", result)
        res.status(200).json({ message: "repository created", payload: newrepo })
    } catch (err) {
        console.log("error in creating repository", err)
        res.status(500).json({ message: "error in creating repository" })
    }
}