"use server";

import { getUserSession } from "@/libs/getUserSession";

const BACKEND_API_ROUTE = process.env.BACKEND_API_ROUTE;
export const fetchTableProducts = async () => {
  try {
    const { user } = await getUserSession();
    const fetchData = await fetch(
      `${BACKEND_API_ROUTE}/products/all?organizationId=${user?.organization?.value}`
    );
    const data = await fetchData.json();
    const mergedProducts = data?.products.map((product) => ({
      ...product,
      ...product.customFields,
      customFields: undefined,
    }));

    return {
      products: mergedProducts,
    };
  } catch (error) {}
};
