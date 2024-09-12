"use server";
import { auth } from "@/auth";

export const createFolderAction = async (folderName) => {
  const session = await auth();
  try {
    const token = await session?.user?.access_token;
    const id = session?.user?.id;
    const organizationId = session?.user?.organizationId;
    const req = await fetch(`http://localhost:3000/api/folder/createFolder`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        userId: id,
        organizationId: organizationId,
        folderName,
      }),
    });
    const data = await req.json();
    if (!req.ok) {
      throw new Error(data.error);
    }
  } catch (error) {
    throw new Error(error.message);
  }
};
export const createSubFolderAction = async (folderName, folderId) => {
  const session = await auth();
  try {
    const token = await session?.user?.access_token;
    const id = session?.user?.id;
    const organizationId = session?.user?.organizationId;
    const req = await fetch(
      `http://localhost:3000/api/folder/createSubFolder`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          userId: id,
          organizationId: organizationId,
          folderName,
          folderId: folderId,
        }),
      }
    );
    const data = await req.json();
    if (!req.ok) {
      throw new Error(data.error);
    }
  } catch (error) {
    throw new Error(error.message);
  }
};
