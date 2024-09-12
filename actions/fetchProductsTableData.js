"use server";

import { getUserSession } from "@/libs/getUserSession";

export const fetchTableProducts = async () => {
  try {
    const { user } = await getUserSession();
    const fetchData = await fetch(
      `http://localhost:3000/api/products/all?organizationId=${user?.organization?.value}`
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
