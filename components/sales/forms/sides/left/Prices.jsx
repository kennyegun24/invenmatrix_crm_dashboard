import React, { useEffect, useState } from "react";
import FormSectionHeader from "../../FormSectionHeader";
import { calculateProfitMargin } from "./pricesHelper";
import { FieldTitle } from "@/components/GlobalComponents";

const Prices = () => {
  const [userInput, setUserInput] = useState({});
  const handleChange = (e) => {
    e.preventDefault();
    setUserInput((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  useEffect(() => {
    setUserInput((prev) => ({
      ...prev,
      profit_margin: calculateProfitMargin(
        Number(userInput?.shippingCost),
        Number(userInput?.costPrice),
        Number(userInput?.sellingPrice)
      ),
    }));
  }, [userInput?.shippingCost, userInput?.sellingPrice, userInput?.costPrice]);
  const [showFull, setShowFull] = useState(false);
  return (
    <section
      // onChange={handleChange}
      className={`flex column gap1rem add_product_left_component border_all padding1rem optional_feeds ${
        showFull && "show_full"
      }`}
    >
      <FormSectionHeader
        text={"Price"}
        setShowFull={setShowFull}
        showFull={showFull}
      />

      <div className="flex gap1rem sub_inputs main_bg">
        <div className="flex column gap03rem">
          <FieldTitle
            required={true}
            helper={"How much did you purchase this product...?"}
            title={"Cost Price"}
          />
          <input onChange={handleChange} name="costPrice" type="number" />
        </div>
        <div className="flex column gap03rem">
          <FieldTitle
            required={true}
            title={"Selling Price"}
            helper={"How much do you intend to sell this product...?"}
          />
          <input onChange={handleChange} name="sellingPrice" type="number" />
        </div>
      </div>
      <div className="flex gap1rem sub_inputs main_bg">
        <div className="flex column gap03rem">
          <FieldTitle
            title={"Shipping Cost"}
            helper={"How much did you pay to ship this product...?"}
          />
          <input onChange={handleChange} name="shippingCost" type="number" />
        </div>
        <div className="flex column gap03rem">
          <FieldTitle
            title={"Shipping Time"}
            helper={"How long did it take for this product to arrive...?"}
          />
          <input onChange={handleChange} name="shippingTime" type="text" />
        </div>
      </div>
      <div className="flex gap1rem sub_inputs main_bg">
        <div className="flex column gap03rem">
          <FieldTitle
            title={"Stock Level"}
            required={true}
            helper={"How many of this product do you have in store...?"}
          />
          <input onChange={handleChange} name="stockLevel" type="text" />
        </div>
        <div className="flex column gap03rem">
          <FieldTitle
            title={"Profit Margin"}
            required={true}
            helper={
              "Don't worry, this will be calculated automatically... Only after you fill in values of your shipping cost, selling price and cost price"
            }
          />
          <input
            style={{ fontSize: "13px" }}
            type="text"
            disabled
            value={`${userInput?.profit_margin}%`}
            name="profitMargin"
          />
        </div>
      </div>
    </section>
  );
};

export default Prices;
