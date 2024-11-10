import { signOut } from "@/auth";

export const signout = async () => {
  try {
    await signOut();
  } catch (error) {
    console.log(error);
    console.log("error logging out");
  }
};
