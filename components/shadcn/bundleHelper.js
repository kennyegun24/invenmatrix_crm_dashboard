import { createBundleAction } from "@/actions/createBundle";
import { toast } from "sonner";
import { MdOutlineError } from "react-icons/md";

const initialState = {
  product: "",
  price: "",
  stockLevel: "",
  id: crypto.randomUUID(),
};

const validateValues = (price, oPrice, err) => {
  if (Number(price) <= Number(oPrice)) {
    return {
      validateStatus: "success",
      errorMsg: null,
    };
  }
  return {
    validateStatus: "error",
    errorMsg: err,
  };
};

export const handleProductChange = (
  index,
  field,
  value,
  setProducts,
  products
) => {
  const newProducts = [...products];
  const splitValues = value?.split(",");
  if (field === "product") {
    const findProduct = newProducts.find((e) => e.product === splitValues[0]);
    if (findProduct) {
      newProducts[index]["productErrorMsg"] = "Product already selected";
      newProducts[index]["productValidateStatus"] = "error";
      return false;
    }
    newProducts[index][field] = splitValues[0];
    newProducts[index]["oStock"] = splitValues[2];
    newProducts[index]["oPrice"] = splitValues[1];
  }
  if (field === "price") {
    newProducts[index][field] = value;
    let errMssg = `Price should not be more than ${products[index].oPrice}`;
    const val = validateValues(value, products[index].oPrice, errMssg);
    newProducts[index]["priceErrorMsg"] = val.errorMsg;
    newProducts[index]["priceValidateStatus"] = val.validateStatus;
  }
  if (field === "stockLevel") {
    newProducts[index][field] = value;
    let errMssg = `Stock level should not be more than ${products[index].oStock}`;
    const val = validateValues(value, products[index].oStock, errMssg);
    newProducts[index]["stockErrorMsg"] = val.errorMsg;
    newProducts[index]["stockValidateStatus"] = val.validateStatus;
  }
  setProducts(newProducts);
};
export const deleteField = (index, products, setProducts) => {
  const remove = products.filter((e) => e.id !== index);
  setProducts(remove);
};
export const resetState = (setProducts) => {
  setProducts([{ ...initialState }]);
};

export const handleOpenChange = (newOpen, setOpen, setProducts) => {
  setOpen(newOpen);
  if (!newOpen) {
    resetState(setProducts);
  }
};

export const addProduct = (setProducts, products) => {
  setProducts([
    ...products,
    {
      product: "",
      price: "",
      barcode: "",
      stockLevel: "",
      id: crypto.randomUUID(),
    },
  ]);
};
const prods = [
  {
    id: "bb850648-5591-431e-b672-d0ac4ff2d7ec",
    price: 11,
    product: "66f74280087eef919746a60a",
    stockLevel: "11",
  },
];

export const createBundle = async (e, products, barcode) => {
  const toastId = toast.loading("Processing...");
  try {
    const prices = prods?.reduce((a, n) => a + parseInt(n.price), 0);
    const data = {
      barcode,
      variants: "",
      discountedSellingPrice: prices,
      stockLevel: Math.min(...products?.map((e) => e.stockLevel)),
      products: products?.map((e) => ({
        productsId: e.product,
        discountedPrice: e.price,
      })),
    };
    const result = await createBundleAction(data);
    if (result.error) {
      return toast.error(result.error, {
        id: toastId,
        icon: <MdOutlineError />,
      });
    }
    return toast.success(result.success, {
      id: toastId,
    });
  } catch (error) {
    return toast.error(error.error, {
      id: toastId,
      icon: <MdOutlineError />,
    });
  }
};
