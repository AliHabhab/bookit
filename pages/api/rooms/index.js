import nc from "next-connect";
import dbConnect from "../../../config/dbConnect";
import { allRooms, newRoom } from "../../../controllers/roomControllers";
import onError from "../../../middlewares/errors";

const handler = nc({ onError });

dbConnect();

handler.get(async (req, res) => {
  await allRooms(req, res);
});

handler.post(async (req, res) => {
  await newRoom(req, res);
});

export default handler;
