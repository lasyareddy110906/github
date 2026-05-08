import {IssuesModel} from "../../models/IssuesModel.js";

export const getByIdIssuesController = async (req, res) => {
    try {
        const { repo_id, issue_id } = req.query;

        if (!repo_id) {
            return res.status(400).json({ message: "Repository ID is required" });
        }

        if (!issue_id) {
            return res.status(400).json({ message: "Issue ID is required" });
        }

        const issue = await IssuesModel.findOne({ repo_id, _id: issue_id });

        if (!issue) {
            return res.status(404).json({ message: "Issue not found" });
        }

        res.status(200).json(issue);
    } catch (error) {
        console.error("Error fetching issue :", error.message);
        console.error("Full error:", error);
        res.status(500).json({ message: "Internal server error", error: error.message });
    }
};
        
       
  