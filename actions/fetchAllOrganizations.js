"use server";

import { auth } from "@/auth";
import { createAxios } from "@/axios";
import { getUserSession } from "@/libs/getUserSession";
const BACKEND_API_ROUTE = process.env.BACKEND_API_ROUTE;

export const fetchOrganizationsList = async () => {
  const userData = await getUserSession();
  const id = userData?.user?.id;
  if (!id) return null;
  try {
    const req = await fetch(
      `${BACKEND_API_ROUTE}/user/all_organizations?user_id=${id}`
    );
    const data = await req.json();
    if (!req.ok) {
      const error = new Error(data);
      error.status = req.status;
      throw error;
    }
    return data;
  } catch (error) {
    console.log(error);
    throw new Error(error.message);
  }
};

export const createOrganizationAction = async (organizationName) => {
  const session = await auth();
  try {
    const token = await session?.user?.access_token;
    const id = session?.user?.id;
    const organizationId = session?.user?.organizationId;
    const req = await createAxios(token).post(`/organization/create`, {
      userId: id,
      organizationId: "66ddf0cad0d31ab0b903bc7d",
      organizationName,
    });
    const data = await req.data;
    return;
  } catch (error) {
    console.log(error?.response, "error");
    return { error: error?.response?.data?.error };
  }
};
