import mongoose from "mongoose";

const mongodbUrl =
  "mongodb+srv://AliHabhab:KgJDN0jlNbOinYZi@cluster0.z0ux7fc.mongodb.net/?retryWrites=true&w=majority";

const dbConnect = () => {
  if (mongoose.connection.readyState >= 1) {
    return;
  }
  mongoose.connect(mongodbUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};

export default dbConnect;
