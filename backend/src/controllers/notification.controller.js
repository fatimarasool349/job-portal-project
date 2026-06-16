import Notification from "../models/notification.model.js";

export const getNotifications = async (req, res) => {


  try {
    const notifications = await Notification.find({
      receiver: req.user.id,
    }).sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      notifications,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const markAsRead = async (req, res) => {
  try {
    const notification = await Notification.findByIdAndUpdate(
      req.params.id,
      { isRead: true },
      { new: true },
    );

    res.status(200).json({
      success: true,
      notification,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};


export const markAllAsRead = async (req, res) => {
  try {
    await Notification.updateMany(
      { receiver: req.user.id },
      { $set: { isRead: true } }
    );

    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
