import { CollaboratorModel } from "../../models/CollaboratorModel.js";
import { RepositoryModel } from "../../models/RepositoryModel.js";

export const getCollaborators = async (req, res) => {
  try {
    const { repoId } = req.params;

    const repo = await RepositoryModel.findById(repoId);
    if (!repo) {
      return res.status(404).json({ message: "Repository not found" });
    }

   
    const collaborators = await CollaboratorModel.find({ repo: repoId })
      .populate("user", "name email userProfilePic") .select("-__v");

    res.status(200).json({message: "Collaborators fetched successfully", payload:collaborators });

  } catch (err) {
    console.log("Error fetching collaborators:", err);
    res.status(500).json({ message: "Server error" });
  }
};