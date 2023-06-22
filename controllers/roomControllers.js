import Room from "../models/room";
import ErrorHandler from "../utils/errorHandler";
import catchAsyncError from "../middlewares/catchAsyncError";
import APIFeatures from "../utils/apiFeatures";

export const allRooms = catchAsyncError(async (req, res) => {
  const apiFeatures = new APIFeatures(Room.find(), req.query).search();
  const rooms = await apiFeatures.query;
  res.status(200).json({ success: true, count: rooms.length, rooms });
});

export const newRoom = catchAsyncError(async (req, res) => {
  const room = await Room.create(req.body);
  res.status(200).json({ success: true, room });
});

export const getSingleRoom = catchAsyncError(async (req, res, next) => {
  const room = await Room.findById(req.query.id);

  if (!room) {
    return next(new ErrorHandler("Room not found with this ID.", 404));
  }

  res.status(200).json({ success: true, room });
});

export const updateRoom = catchAsyncError(async (req, res, next) => {
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
});

export const deleteRoom = catchAsyncError(async (req, res, next) => {
  let room = await Room.findById(req.query.id);

  if (!room) {
    return next(new ErrorHandler("Room not found with this ID.", 404));
  }

  room = await Room.deleteOne();

  res.status(200).json({ success: true, message: "Room is deleted." });
});
