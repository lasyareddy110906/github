import { CollaboratorModel } from "../../models/CollaboratorModel.js";
import { RepositoryModel } from "../../models/RepositoryModel.js";

export const updateRoleCollaborators = async (req, res) => {
  try {
    const { repoId, userId } = req.params;
    const { role } = req.body;

    const loggedIn = req.user?.id || req.user?._id;

   
    const allowedRoles = ["owner", "collaborator", "viewer"];
    if (!allowedRoles.includes(role)) {
      return res.status(400).json({ message: "Invalid role" });
    }

    
    const repo = await RepositoryModel.findById(repoId);
    if (!repo) {
      return res.status(404).json({ message: "Repository not found" });
    }

    
    if (repo.owner.toString() !== loggedIn.toString()) {
      return res.status(403).json({ message: "Only owner can update roles" });
    }

    
    const collaborator = await CollaboratorModel.findOne({repo: repoId, user: userId});

    if (!collaborator) {
      return res.status(404).json({ message: "Collaborator not found" });
    }

  
    collaborator.role = role;

    const updated = await collaborator.save();

    res.status(200).json({success: true, message: "Role updated successfully",data: updated });

  } catch (err) {
    console.log("Error updating collaborator role:", err);
    res.status(500).json({ message: "Server error" });
  }
};