import NextAuth from "next-auth";
import authConfig from "./auth.config";
import { signout } from "./actions/signout";

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
  unstable_update,
} = NextAuth({
  session: { strategy: "jwt" },
  callbacks: {
    async session({ session, token }) {
      console.log(token, "token");
      console.log(token?.expiresIn, "expires in");
      console.log(Math.floor(Date.now()), "present date");
      console.log(
        token?.expiresIn > Math.floor(Date.now()),
        "expires > present"
      );
      if (token?.expiresIn > Math.floor(Date.now())) {
        session.user.expiresIn = token?.expiresIn;
        session.expires = token?.expiresIn;
        session.user.id = token?.id;
        session.user.access_token = token?.access_token;
        session.user.organization = token?.organization;
        return session;
      }
      try {
        await signout();
      } catch (error) {
        console.log("signout error in session");
      }
      return null;
    },
    async jwt({ token, user, trigger, session }) {
      console.log("first");
      if (user) {
        token.expiresIn = Date.now() + 5 * 60 * 1000;
        token.id = user?._id;
        token.exp = Date.now() + 5 * 60 * 1000;
        token.access_token = user?.access_token;
        token.organization = null;
        return token;
      }
      if (Math.floor(Date.now()) < token?.expiresIn) {
        if (trigger === "update") {
          token.organization = session?.user?.organization;
        }
        return token;
      }
      try {
        await signout();
      } catch (error) {
        console.log("signout error in jwt");
      }
      return null;
    },
  },
  ...authConfig,
});
