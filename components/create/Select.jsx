import React, { useEffect } from "react";
import { useState } from "react";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { fetchTableProducts } from "@/actions/fetchProductsTableData";
import { Skeleton } from "@/components/ui/skeleton";

const SelectDialog = ({ text, onChange, value }) => {
  const [prods, setProds] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    const fetchProducts = async () => {
      try {
        const fetchProds = await fetchTableProducts();
        // console.log(fetchProds, "fetchProds");
        setProds(fetchProds.products);
        setLoading(false);
      } catch (error) {
        setLoading(false);
      }
    };
    fetchProducts();
    return () => {
      fetchProducts();
    };
  }, []);
  // console.log(prods, "prods");
  return (
    <div className="flex flex-col items-start gap-4 w-full">
      <Label
        htmlFor="interests"
        className="text-right"
        style={{ color: "var(--light_text)" }}
      >
        {text}
      </Label>
      <div className="col-span-3 w-full">
        {loading ? (
          <Skeleton className="w-full h-10" />
        ) : (
          <Select
            onValueChange={onChange}
            value={value}
            style={{ background: "transparent" }}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select product" />
            </SelectTrigger>
            <SelectContent>
              {prods.map((e, _) => (
                <SelectItem
                  key={_}
                  value={`${e?._id},${e?.sellingPrice},${e.stockLevel}`}
                >
                  {e.productName}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        )}
      </div>
    </div>
  );
};

export default SelectDialog;
