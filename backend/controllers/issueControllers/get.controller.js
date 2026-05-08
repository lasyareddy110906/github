import {IssuesModel} from "../../models/IssuesModel.js";

export const getAllIssuesController = async (req, res) => {
    try {
        const { repo_id } = req.query;

        if (!repo_id) {
            return res.status(400).json({ message: "Repository ID is required" });
        }

        const issues = await IssuesModel.find({ repo_id });

        res.status(200).json(issues);
    } catch (error) {
        console.error("Error fetching issues:", error.message);
        console.error("Full error:", error);
        res.status(500).json({ message: "Internal server error", error: error.message });
    }
};
        
       
  