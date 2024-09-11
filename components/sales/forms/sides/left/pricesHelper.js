export const calculateProfitMargin = (
  shipping_cost,
  cost_price,
  selling_price
) => {
  if (
    typeof shipping_cost === "number" &&
    typeof cost_price === "number" &&
    typeof selling_price === "number"
  ) {
    const buyingCost = cost_price + shipping_cost;
    const profitMargin = ((selling_price - buyingCost) / buyingCost) * 100;

    return profitMargin.toFixed(2);
  } else
    return "Fill up shipping cost, cost, and selling price with valid numbers";
};
