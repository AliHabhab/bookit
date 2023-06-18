import nc from "next-connect";
import dbConnect from "../../../config/dbConnect";
import {
  getSingleRoom,
  updateRoom,
  deleteRoom,
} from "../../../controllers/roomControllers";
import onError from "../../../middlewares/errors";

const handler = nc({ onError });

dbConnect();

handler.get(async (req, res) => {
  await getSingleRoom(req, res);
});

handler.put(async (req, res) => {
  await updateRoom(req, res);
});
handler.delete(async (req, res) => {
  await deleteRoom(req, res);
});

export default handler;
