import mongoose from "mongoose";

const mongodbUrl =
  "mongodb+srv://AliHabhab:eeVY9s1tWFMidXmu@cluster0.z0ux7fc.mongodb.net/?retryWrites=true&w=majority";

const dbConnect = () => {
  if (mongoose.connection.readyState >= 1) {
    return;
  }
  mongoose.connect(mongodbUrl, process.env.DB_LOCAL_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};

export default dbConnect;
