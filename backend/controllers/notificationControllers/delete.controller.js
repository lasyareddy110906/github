import { NotificationModel } from "../../models/NotificationModel.js";

export const deleteNotification = async (req, res) => {
  try {
    const { id } = req.params;
    const uid = req.user?.id || req.user?._id;  
    const notification = await NotificationModel.findOneAndDelete({ _id: id, user: uid });

    if (!notification) {
      return res.status(404).json({ message: "Notification not found" });
    }
    res.status(200).json({ message: "Notification deleted successfully", payload: notification });
    } catch (err) {
        console.log("Error in deleting notification", err);
        res.status(500).json({ message: "Error in deleting notification" });
    }
}