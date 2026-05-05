import { RepositoryModel } from "../../models/RepositoryModel.js"

export const deleteRepoByIdController = async (req, res) => {
    try {
        const rid = req.params.id
        const deletedRepository = await RepositoryModel.findByIdAndDelete(rid)
        if (!deletedRepository) {
            return res.status(404).json({ message: "repository not found" })
        }

        res.status(200).json({ message: "repository deleted" })
    } catch (err) {
        console.log("error in deleting repository", err)
        res.status(500).json({ message: "error in deleting repository" })
    }
}