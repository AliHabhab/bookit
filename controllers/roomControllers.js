import Room from "../models/room";
import ErrorHandler from "../utils/errorHandler";

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

export const getSingleRoom = async (req, res, next) => {
  try {
    const room = await Room.findById(req.query.id);

    if (!room) {
      return next(new ErrorHandler("Room not found with this ID.", 404));
    }

    res.status(200).json({ success: true, room });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};

export const updateRoom = async (req, res, next) => {
  try {
    let room = await Room.findById(req.query.id);

    if (!room) {
      return next(new ErrorHandler("Room not found with this ID.", 404));
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

export const deleteRoom = async (req, res, next) => {
  try {
    let room = await Room.findById(req.query.id);

    if (!room) {
      return next(new ErrorHandler("Room not found with this ID.", 404));
    }

    room = await Room.deleteOne();

    res.status(200).json({ success: true, message: "Room is deleted." });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};
