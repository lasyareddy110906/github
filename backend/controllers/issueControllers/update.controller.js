import {IssuesModel} from "../../models/IssuesModel.js";

export const updateIssueController = async (req, res) => {
    try {
        const { issueId } = req.params;
        const { title, description, status, assignees } = req.body;

        // Validate issue ID
        if (!issueId) {
            return res.status(400).json({ message: "Issue ID is required" });
        }

        // Build update object with only provided fields
        const updateData = {};
        if (title !== undefined) updateData.title = title;
        if (description !== undefined) updateData.description = description;
        if (status !== undefined) updateData.status = status;
        if (assignees !== undefined) updateData.assignees = assignees;

        console.log("Updating issue:", { issueId, updateData });

        // Find and update the issue
        const updatedIssue = await IssuesModel.findByIdAndUpdate(
            issueId,
            updateData,
            { new: true, runValidators: true }
        );

        if (!updatedIssue) {
            return res.status(404).json({ message: "Issue not found" });
        }

        res.status(200).json(updatedIssue);
    } catch (error) {
        console.error("Error updating issue:", error.message);
        console.error("Full error:", error);
        res.status(500).json({ message: "Internal server error", error: error.message });
    }
};