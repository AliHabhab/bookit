import NextAuth from "next-auth";
import Providers from "next-auth/providers";

import User from "../../../models/user";
import dbConnect from "../../../config/dbConnect";

export default NextAuth({
  session: {
    jwt: true,
  },
  providers: [
    Providers.Credentails({
      async authorize(credentails) {
        dbConnect();

        const { email, password } = credentails;
        if (!email || !password) {
          throw new Error("Please enter email or password");
        }

        const user = await User.findOne({ email }).select("+password");

        if (!user) {
          throw new Error("Invalid email or password");
        }

        const isPasswordMatched = await user.comparePassword(password);

        if (!isPasswordMatched) {
          throw new Error("Invalid email or password");
        }

        return Promise.resolve(user);
      },
    }),
  ],
  callbacks: {
    jwt: async (token, user) => {
      user && (token.user = user);
      return Promise.resolve(token);
    },
    session: async (session, user) => {
      session.user = user.user;
      return Promise.resolve(session);
    },
  },
});
