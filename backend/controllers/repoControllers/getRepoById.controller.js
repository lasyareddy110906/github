import { RepositoryModel } from "../../models/RepositoryModel.js"

export const getReposByIdController = async (req, res) => {
    try {
        const rid = req.params.id
        const repository = await RepositoryModel.findById(rid)
        if (!repository) {
            return res.status(404).json({ message: "repository not found" })
        }
        res.status(200).json({ message: "repository found", payload: repository })
    } catch (err) {
        console.log("error in getting repository", err)
        res.status(500).json({ message: "error in getting repository" })
    }
}