"use server";

import { signIn } from "@/auth";
import { signInSchema } from "@/libs/zod";
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";
import { AuthError } from "next-auth";

export const login = async (values) => {
  const validateFields = signInSchema.safeParse(values);

  if (!validateFields.success) {
    return { error: JSON.stringify(validateFields.error) };
  }

  try {
    const { email, password } = validateFields.data;
    const result = await signIn("credentials", {
      email,
      password,
      redirect: DEFAULT_LOGIN_REDIRECT,
    });
    console.log("resultssssssssssssssssssssssssss");
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return { error: JSON.stringify({ message: "Invalid credentials" }) };
        default:
          return {
            error: JSON.stringify({ message: error.cause.err.message }),
          };
      }
    }
    throw error;
  }
};
