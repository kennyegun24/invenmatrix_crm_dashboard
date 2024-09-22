"use server";
import { auth } from "@/auth";
import { createAxios } from "@/axios";

const BACKEND_API_ROUTE = process.env.BACKEND_API_ROUTE;
export const createFolderAction = async (folderName) => {
  const session = await auth();
  try {
    const token = await session?.user?.access_token;
    const id = session?.user?.id;
    const organizationId = session?.user?.organization?.value;
    const req = await fetch(`${BACKEND_API_ROUTE}/folder/createFolder`, {
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
    const organizationId = session?.user?.organization.value;
    const req = await fetch(`${BACKEND_API_ROUTE}/folder/createSubFolder`, {
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
    });
    const data = await req.json();
    if (!req.ok) {
      throw new Error(data.error);
    }
  } catch (error) {
    // console.log(error);
    throw new Error(error?.message);
  }
};

/**
 *  MOVE FOLDER TO ANOTHER FOLDER
 */
export const moveFolder = async ({
  folderId,
  oldParentFolderId,
  newParentFolderId,
  folderName,
}) => {
  const { user } = await auth();
  const token = await user?.access_token;
  const id = user?.id;
  const organizationId = await user?.organization.value;
  try {
    if (!organizationId) {
      return { error: "Try again... refresh your browser" };
    }
    if (!newParentFolderId) {
      return { error: "Select new folder again... refresh your browser" };
    }
    if (folderId === newParentFolderId) {
      return { error: "Cannot put folder into itself" };
    }
    if (oldParentFolderId === newParentFolderId) {
      return { error: "Folder already exists inside new folder" };
    }
    const req = await createAxios(token).post(
      `${BACKEND_API_ROUTE}/folder/move`,
      {
        userId: id,
        folderId: folderId,
        organizationId: organizationId,
        folderName,
        oldParentFolderId,
        newParentFolderId,
      }
    );
    const data = await req.data;
    return { success: data?.message };
  } catch (error) {
    // console.log(error);
    return { error: error?.response.data?.message || "Folder not moved" };
  }
};
export const copyFolder = async ({
  folderId,
  newParentFolderId,
  folderName,
}) => {
  const { user } = await auth();
  const token = await user?.access_token;
  const id = user?.id;
  const organizationId = await user?.organization.value;
  try {
    if (!organizationId) {
      return { error: "Try again... refresh your browser" };
    }
    if (!newParentFolderId) {
      return { error: "Select new folder again... refresh your browser" };
    }
    if (folderId === newParentFolderId) {
      return { error: "Cannot put folder into itself" };
    }
    const req = await createAxios(token).post(
      `${BACKEND_API_ROUTE}/folder/copy`,
      {
        userId: id,
        folderId: folderId,
        organizationId: organizationId,
        folderName,
        newParentFolderId,
      }
    );
    const data = await req.data;
    return { success: data?.message };
  } catch (error) {
    // console.log(error);
    return { error: error?.response.data?.message || "Folder not moved" };
  }
};
/* ADD PRODUCT TO FOLDER */

export const addProductToFolder = async (folderId, productId) => {
  const { user } = await auth();
  const token = await user?.access_token;
  const id = user?.id;
  const organizationId = await user?.organizationId;
  try {
    const req = await createAxios(token).post(
      `${BACKEND_API_ROUTE}/products/addToFolder`,
      {
        userId: id,
        folderId: folderId,
        productId: productId,
        organizationId: organizationId,
      }
    );
    console.log(await req?.data);
  } catch (error) {
    console.log(error);
  }
};

export const removeFolder = async () => {};

export const removeProductFromFolder = async () => {};
