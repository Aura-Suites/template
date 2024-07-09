import _ from "lodash";
import bcryptjs from "bcryptjs";
import NextAuth from "next-auth";
import credentials from "next-auth/providers/credentials";
import { signInSchema } from "./zod";
import { getUserByEmail, getUserById } from "../actions/user";

export const { handlers, signIn, signOut, auth } = NextAuth({
  secret: process.env.AUTH_SECRET,
  providers: [
    credentials({
      credentials: {
        email: {},
        password: {},
      },
      authorize: async (credentials): Promise<any> => {
        const validate = await signInSchema.safeParse(credentials);
        if (validate?.success) {
          const { email, password } = validate.data;
          const user = await getUserByEmail(email);
          if (!user || !user.password) {
            return null;
          }
          const checkpassword = await bcryptjs.compareSync(
            password,
            user.password
          );

          return checkpassword ? user : null;
        } else return null;
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async session({ session }) {
      return session;
    },
    jwt({ token }) {
      return token;
    },
    authorized: async ({ auth }) => {
      return !!auth;
    },
  },
  pages: {
    signIn: "/sign-in",
  },
});
