import nc from "next-connect";
import dbConnect from "../../../config/dbConnect";
import { allRooms, newRoom } from "../../../controllers/roomControllers";

const handler = nc();

dbConnect();

handler.get(async (req, res) => {
  await allRooms(req, res);
});

handler.post(async (req, res) => {
  await newRoom(req, res);
});

export default handler;
