import nc from "next-connect";
import dbConnect from "../../../config/dbConnect";
import { registerUser } from "../../../controllers/authController";
import onError from "../../../middlewares/errors";

const handler = nc({ onError });

dbConnect();

handler.post(async (req, res) => {
  await registerUser(req, res);
});

export default handler;
