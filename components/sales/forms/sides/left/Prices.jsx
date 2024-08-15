import React, { useEffect, useState } from "react";
import FormSectionHeader from "../../FormSectionHeader";
import { IoTrashOutline } from "react-icons/io5";
import { calculateProfitMargin } from "./pricesHelper";

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
        Number(userInput?.shipping_cost),
        Number(userInput?.cost_price),
        Number(userInput?.selling_price)
      ),
    }));
  }, [
    userInput?.shipping_cost,
    userInput?.cost_price,
    userInput?.selling_price,
  ]);

  return (
    <form
      onChange={handleChange}
      className="flex column gap1rem add_product_left_component border_all padding1rem"
    >
      <FormSectionHeader text={"Price"} />

      <div className="flex gap1rem sub_inputs main_bg">
        <div className="flex column gap03rem">
          <p className="flex align_center justify_between">
            Cost Price
            <IoTrashOutline size={18} className="pointer" />
          </p>
          <input name="cost_price" type="number" />
        </div>
        <div className="flex column gap03rem">
          <p className="flex align_center justify_between">
            Selling Price
            <IoTrashOutline size={18} className="pointer" />
          </p>
          <input name="selling_price" type="number" />
        </div>
      </div>
      <div className="flex gap1rem sub_inputs main_bg">
        <div className="flex column gap03rem">
          <p className="flex align_center justify_between">
            Shipping Cost
            <IoTrashOutline size={18} className="pointer" />
          </p>
          <input name="shipping_cost" type="number" />
        </div>
        <div className="flex column gap03rem">
          <p className="flex align_center justify_between">
            Shipping Time
            <IoTrashOutline size={18} className="pointer" />
          </p>
          <input name="shipping_time" type="text" />
        </div>
      </div>
      <div className="flex gap1rem sub_inputs main_bg">
        <div className="flex column gap03rem">
          <p className="flex align_center justify_between">
            Stock Level
            <IoTrashOutline size={18} className="pointer" />
          </p>
          <input name="stock_level" type="text" />
        </div>
        <div className="flex column gap03rem">
          <p className="flex align_center justify_between">
            Profit Margin
            <IoTrashOutline size={18} className="pointer" />
          </p>
          <input
            style={{ fontSize: "13px" }}
            type="text"
            disabled
            value={userInput?.profit_margin}
          />
        </div>
      </div>
    </form>
  );
};

export default Prices;
