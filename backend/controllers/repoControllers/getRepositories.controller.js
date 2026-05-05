import { RepositoryModel } from '../../models/RepositoryModel.js'

export const getRepositoriesController = async (req, res) => {
    try 
    {
        const repositories = await RepositoryModel.find()
        res.status(200).json({ message: "repositories found", payload: repositories })
    } 
    catch (err) {
        console.log("error in getting repositories", err)
        res.status(500).json({ message: "error in getting repositories" })
    }
}