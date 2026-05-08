import {IssuesModel} from "../../models/IssuesModel.js";

export const createIssueController = async (req, res) => {
    try {
        const { title, description, repo_id, status, assignees, created_by } = req.body;
        
        // Get createdBy from authenticated user, or from request body if provided
        const createdBy = created_by || req.user?._id || req.user?.id;
        
        if (!createdBy) {
            console.error("createdBy is missing. req.user:", req.user);
            return res.status(401).json({ message: "Authentication failed - user not identified" });
        }

        console.log("Creating issue with:", { title, description, repo_id, createdBy, status, assignees });

        const newIssue = new IssuesModel({title, description, repo_id, createdBy, status, assignees});

        await newIssue.save();
        res.status(201).json(newIssue);
    } catch (error) {
        console.error("Error creating issue:", error.message);
        console.error("Full error:", error);
        res.status(500).json({ message: "Internal server error", error: error.message });
    }
};