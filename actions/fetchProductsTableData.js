"use server";
export const fetchTableProducts = async () => {
  try {
    console.log("fetch table data");
    const fetchData = await fetch(
      `http://localhost:3000/api/products/all?organizationId=66ddf0cad0d31ab0b903bc7d`
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
