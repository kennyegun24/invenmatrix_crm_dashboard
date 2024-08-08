import React from "react";
import { GiPriceTag } from "react-icons/gi";
import { MdOutlineShowChart } from "react-icons/md";

const DashboardCard = () => {
  const arr = Array.from({ length: 3 });
  return (
    <div className="dashboard_cards gap1rem">
      {arr.map((each, _) => (
        <section className="dashboard_card flex column justify_between">
          <div className="flex align_center justify_between">
            <GiPriceTag size={20} />
            <p className="dashboard_price_tag flex gap05rem">
              <MdOutlineShowChart /> 3.4%
            </p>
          </div>
          <div className="flex column gap05rem">
            <h3>10.98M</h3>
            <p>Total Sales (All time)</p>
          </div>
        </section>
      ))}
    </div>
  );
};

export default DashboardCard;
