export const allRooms = async (req, res) => {
  res.status(200).json({ success: true, message: "All Rooms" });
};
