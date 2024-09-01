import NextAuth from "next-auth";
import authConfig from "./auth.config";

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  session: { strategy: "jwt", maxAge: 30 },
  callbacks: {
    async session({ session, token }) {
      if (token?.expiresIn) {
        session.user.expiresIn = token?.expiresIn;
      }
      return session;
    },
    async jwt({ token, user }) {
      if (user) {
        token.expiresIn = user?.expiresIn;
        return token;
      }
      if (Math.floor(Date.now() / 1000) < token?.expiresIn) {
        return token;
      }
      return null;
    },
  },
  ...authConfig,
});
