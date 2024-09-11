import NextAuth from "next-auth";
import authConfig from "./auth.config";

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
  unstable_update,
} = NextAuth({
  session: { strategy: "jwt", maxAge: 3600 },
  callbacks: {
    async session({ session, token }) {
      if (token?.expiresIn) {
        session.user.expiresIn = token?.expiresIn;
        session.user.id = token?.id;
        session.user.access_token = token?.access_token;
        session.user.organization = token?.organization;
        return session;
      }
      return null;
    },
    async jwt({ token, user, trigger, session }) {
      if (user) {
        token.expiresIn = user?.expiresIn;
        token.id = user?._id;
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
      return null;
    },
  },
  ...authConfig,
});
