"use server";

import { unstable_update } from "@/auth";
import { getUserSession } from "@/libs/getUserSession";

export const updateUserSession = async (organization) => {
  const user = await getUserSession();
  await unstable_update({
    user: {
      ...user.user,
      organization: organization,
    },
  });
};
