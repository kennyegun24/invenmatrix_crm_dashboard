"use server";
import { signUpSchema } from "@/libs/zod";

export const signUp = async (values) => {
  const validateFields = signUpSchema.safeParse(values);

  if (!validateFields.success) {
    return { error: JSON.stringify(validateFields.error) };
  }

  try {
    const { email, password, first_name, last_name, user_name } =
      validateFields.data;
    const signUserUp = await fetch(
      `${process.env.BACKEND_API_ROUTE}/user/register`,
      {
        method: "POST",
        body: JSON.stringify({
          email,
          password,
          user_name,
          first_name,
          last_name,
        }),
      }
    );
    const data = await signUserUp.json();
    if (signUserUp.ok) {
      return data.message;
    }
    return { error: JSON.stringify({ message: data?.error }) };
  } catch (error) {
    console.log(error);
  }
};
