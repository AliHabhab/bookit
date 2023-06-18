const Room = require("../models/room");
const mongoose = require("mongoose");
const rooms = require("../data/rooms.json");

const mongodbUrl =
  "mongodb+srv://AliHabhab:eeVY9s1tWFMidXmu@cluster0.z0ux7fc.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(mongodbUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const seedRooms = async () => {
  try {
    await Room.deleteMany();
    console.log("Rooms are deleted");

    await Room.insertMany(rooms);
    console.log("All Rooms are added.");

    process.exit();
  } catch (error) {
    console.log(error.message);
    process.exit();
  } finally {
    mongoose.disconnect();
  }
};

seedRooms();
