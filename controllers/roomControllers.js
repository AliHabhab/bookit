import Room from "../models/room";

export const allRooms = async (req, res) => {
  try {
    const rooms = await Room.find();
    res.status(200).json({ success: true, count: rooms.length, rooms });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};

export const newRoom = async (req, res) => {
  try {
    const room = await Room.create(req.body);
    res.status(200).json({ success: true, room });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};

export const getSingleRoom = async (req, res) => {
  try {
    const room = await Room.findById(req.query.id);

    if (!room) {
      res
        .status(404)
        .json({ success: false, error: "Room not found with this ID." });
    }

    res.status(200).json({ success: true, room });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};

export const updateRoom = async (req, res) => {
  try {
    let room = await Room.findById(req.query.id);

    if (!room) {
      res
        .status(404)
        .json({ success: false, error: "Room not found with this ID." });
    }

    room = await Room.findByIdAndUpdate(req.query.id, req.body, {
      new: true,
      runValidators: true,
      useFindAndModify: false,
    });

    res.status(200).json({ success: true, room });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};

export const deleteRoom = async (req, res) => {
  try {
    let room = await Room.findById(req.query.id);

    if (!room) {
      res
        .status(404)
        .json({ success: false, error: "Room not found with this ID." });
    }

    room = await Room.deleteOne();

    res.status(200).json({ success: true, message: "Room is deleted." });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};
