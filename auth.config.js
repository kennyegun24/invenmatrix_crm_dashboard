import { AuthError, NextAuthConfig } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { signInSchema } from "./libs/zod";

const BACKEND_API_ROUTE = process.env.BACKEND_API_ROUTE;
export default {
  pages: {
    signIn: "/login",
    // newUser: "/register",
    error: "/login",
  },
  providers: [
    Credentials({
      async authorize(credentials) {
        const validatedFields = signInSchema.safeParse(credentials);
        if (validatedFields.success) {
          const res = await fetch(`${BACKEND_API_ROUTE}/user/login`, {
            method: "POST",
            body: JSON.stringify({
              password: credentials?.password,
              email: credentials?.email,
            }),
            headers: { "Content-Type": "application/json" },
          });

          const user = await res.json();
          if (res.ok && user) {
            return user;
          }
        }
        return null;
      },
    }),
    Credentials({
      id: "signUp",
      name: "Sign Up",
      async authorize(credentials) {
        const validatedFields = signInSchema.safeParse(credentials);
        if (validatedFields.success) {
          const res = await fetch("http://localhost:3000/api/user/register", {
            method: "POST",
            body: JSON.stringify({
              password: credentials?.password,
              email: credentials?.email,
            }),
            headers: { "Content-Type": "application/json" },
          });

          const user = await res.json();
          if (res.ok && user) {
            return user;
          }
        }
        return null;
      },
    }),
  ],
};
