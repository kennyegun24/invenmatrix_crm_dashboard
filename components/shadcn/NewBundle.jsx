"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import SelectDialog from "../create/Select";
import InputDialog from "../create/Input";
import BarcodeDialog from "../create/Barcode";
import {
  addProduct,
  createBundle,
  deleteField,
  handleOpenChange,
  handleProductChange,
} from "./bundleHelper";
import { Form, message } from "antd";
import HoverCardComponent from "./HoverCard";

export default function DialogDemo({ children }) {
  const [open, setOpen] = useState(false);
  const [products, setProducts] = useState([
    { product: "", price: 0, stockLevel: 0, oPrice: 0, oStock: 0 },
  ]);
  const [barcode, setBarcode] = useState(null);

  // Custom validation before creating bundle
  const validateBundle = () => {
    for (let product of products) {
      if (!product.product || !product.price || !product.stockLevel) {
        message.error("Please fill in all fields for each product.");
        return false;
      }
    }
    return true;
  };
  // Modified createBundle function to include validation
  const handleSubmit = (e) => {
    if (validateBundle()) {
      createBundle(e, products, barcode); // Proceed to create the bundle if validation passes
    }
  };
  return (
    <Dialog
      open={open}
      onOpenChange={(e) => handleOpenChange(e, setOpen, setProducts)}
    >
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[45%]">
        <DialogHeader>
          <DialogTitle>Create new bundle</DialogTitle>
          <DialogDescription>
            Create a new bundle by merging two or more products together to sell
            as one.
            <br />
            Don&apos;t forget to add prices for each of the product.
          </DialogDescription>
        </DialogHeader>
        <Form onFinish={handleSubmit} className="grid gap-4 py-4 w-full">
          {products.map((product, index) => (
            <div key={index} className="flex gap-4 w-full">
              <Form.Item
                name={`product_${index}`}
                rules={[{ required: true, message: "Product is required" }]}
                className="w-full"
                help={product.productErrorMsg}
                validateStatus={product.productValidateStatus}
              >
                <SelectDialog
                  text={"Product"}
                  value={product.product}
                  onChange={(value) =>
                    handleProductChange(
                      index,
                      "product",
                      value,
                      setProducts,
                      products
                    )
                  }
                />
              </Form.Item>

              <HoverCardComponent
                value={"value"}
                amount={product?.oPrice}
                disable={product.product.trim().length === 0}
              >
                <Form.Item
                  name={`price_${index}`}
                  help={product.priceErrorMsg}
                  validateStatus={product.priceValidateStatus}
                  rules={[{ required: true, message: "Price is required" }]}
                  className="w-full relative"
                >
                  <InputDialog
                    disable={product.product.trim().length === 0}
                    warning={
                      "Enter item price. It should not be more than the original price"
                    }
                    text={"Prices"}
                    value={product.price}
                    onChange={(value) =>
                      handleProductChange(
                        index,
                        "price",
                        value.target.value,
                        setProducts,
                        products
                      )
                    }
                  />
                </Form.Item>
              </HoverCardComponent>

              <HoverCardComponent
                value={"stock level"}
                amount={product?.oStock}
                disable={product.product.trim().length === 0}
              >
                <Form.Item
                  name={`stockLevel_${index}`}
                  rules={[
                    { required: true, message: "Stock level is required" },
                  ]}
                  help={product.stockErrorMsg}
                  validateStatus={product.stockValidateStatus}
                  className="w-full"
                >
                  <InputDialog
                    disable={product.product.trim().length === 0}
                    warning={
                      "Enter stock level. It should not be more than the available stock level"
                    }
                    text={"Stock Level"}
                    value={product.stockLevel}
                    onChange={(value) =>
                      handleProductChange(
                        index,
                        "stockLevel",
                        value.target.value,
                        setProducts,
                        products
                      )
                    }
                  />
                </Form.Item>
              </HoverCardComponent>
              <Button
                onClick={(e) => deleteField(product.id, products, setProducts)}
                type="button"
              >
                x
              </Button>
            </div>
          ))}
          <DialogFooter>
            <BarcodeDialog setBarcode={setBarcode} barcode={barcode} />
            <Button
              type="button"
              onClick={() => addProduct(setProducts, products)}
            >
              Add another product
            </Button>
            <Button type="submit">Create Bundle</Button>
          </DialogFooter>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
