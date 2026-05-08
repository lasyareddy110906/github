import {IssuesModel} from "../../models/IssuesModel.js";

export const deleteIssueController = async (req, res) => {
    try {
        const { issueId } = req.params;

        // Validate issue ID
        if (!issueId) {
            return res.status(400).json({ message: "Issue ID is required" });
        }

        console.log("Deleting issue:", { issueId });

        // Find and delete the issue
        const deletedIssue = await IssuesModel.findByIdAndDelete(issueId);

        if (!deletedIssue) {
            return res.status(404).json({ message: "Issue not found" });
        }

        res.status(200).json({ message: "Issue deleted successfully" });
    } catch (error) {
        console.error("Error deleting issue:", error.message);
        console.error("Full error:", error);
        res.status(500).json({ message: "Internal server error", error: error.message });
    }
};