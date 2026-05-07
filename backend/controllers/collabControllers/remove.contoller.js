import { CollaboratorModel } from "../../models/CollaboratorModel.js";
import { RepositoryModel } from "../../models/RepositoryModel.js";

export const removeCollaborators = async (req, res) => {
  try {
    const { repoId, userId } = req.params;
    

    const loggedIn = req.user?.id || req.user?._id;
 
    const repo = await RepositoryModel.findById(repoId);
    if (!repo) {
      return res.status(404).json({ message: "Repository not found" });
    }

    
    if (repo.owner.toString() !== loggedIn.toString()) {
      return res.status(403).json({ message: "Only owner can remove collaborators" });
    }

    
    const collaborator = await CollaboratorModel.findOneAndDelete({ repo: repoId, user: userId });

    if (!collaborator) {
      return res.status(404).json({ message: "Collaborator not found" });
    }

    await RepositoryModel.findByIdAndUpdate(repoId, {
      $pull: { collaborators: collaborator._id }
    });

    res.status(200).json({
      success: true,
      message: "Collaborator removed successfully",
      data: collaborator
    });

  } catch (err) {
    console.log("Error removing collaborator:", err);
    res.status(500).json({ message: "Server error" });
  }
};