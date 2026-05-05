import { RepositoryModel } from "../../models/RepositoryModel.js"

export const updateRepositoryById = async (req, res) => {
    try {
        const rid = req.params.id
        const repository = await RepositoryModel.findById(rid)
        if (!repository) {
            return res.status(404).json({ message: "repository not found" })
        }
        const updatedRepository = await RepositoryModel.findByIdAndUpdate(
            rid,
            { $set: { ...req.body } },
            { returnDocument: 'after', runValidators: true }
        )
        if (!updatedRepository) {
            return res.status(404).json({ message: "repository not found" })
        }
        res.status(200).json({ message: "repository updated", payload: updatedRepository })
    } catch (err) {
        console.log("error in updating repository", err)
        res.status(500).json({ message: "error in updating repository" })
    }
}