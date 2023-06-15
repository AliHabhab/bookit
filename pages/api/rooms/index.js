import nc from "next-connect";
import dbConnect from "../../../config/dbConnect";
import { allRooms } from "../../../controllers/roomControllers";

const handler = nc();

dbConnect();

handler.get(async (req, res) => {
  await allRooms(req, res);
});

export default handler;
