import DashboardHeader from "@/components/DashboardHeader";
import { Container, SalesContainer } from "@/components/GlobalComponents";
import React from "react";
import "./page.css";
import SingleBarComponent from "@/components/charts/SingleBarChart";
import Bar from "@/components/sales/charts/Bar";
import BarChartComponent from "@/components/charts/BarChart";
import PieChartComponent from "@/components/charts/PieChart";

const page = () => {
  return (
    <Container>
      <DashboardHeader text={"Customer Insight"} />

      <div className="sales_charts padding1rem flex column gap1rem">
        <section className="sales_bg_chart padding1rem">
          <div style={{ height: "100%" }} className="flex column gap1rem">
            <p className="chart_header">Current Inventory Levels</p>
            <SingleBarComponent />
          </div>
        </section>

        <div className="flex width100 gap1rem sales_sm_grid_charts">
          <div className="sales_sm_chart padding075rem">
            <div style={{ height: "100%" }} className="flex column gap1rem">
              <p className="chart_header padding075rem border_all width_fit">
                Common Feedback Themes or issues
              </p>
              <SingleBarComponent />
            </div>
          </div>
          <div className="sales_sm_chart padding075rem">
            <div style={{ height: "100%" }} className="flex column gap1rem">
              <p className="chart_header padding075rem border_all width_fit">
                {"Customer Age Groups"}
              </p>
              <BarChartComponent />
            </div>
          </div>
        </div>
        <div className="gap1rem width100 piechart_sm_chart">
          <div className="sales_sm_chart padding075rem border_all">
            <div style={{ height: "100%" }} className="flex column gap1rem">
              <p className="chart_header padding075rem border_all width_fit">
                {"Customer Age Groups"}
              </p>
              <PieChartComponent />
            </div>
          </div>
          <div className="sales_sm_chart padding075rem border_all">
            <div style={{ height: "100%" }} className="flex column gap1rem">
              <p className="chart_header padding075rem border_all width_fit">
                {"Customer Satisfaction Rating"}
              </p>
              <PieChartComponent />
            </div>
          </div>
          <div className="sales_sm_chart padding075rem border_all">
            <div style={{ height: "100%" }} className="flex column gap1rem">
              <p className="chart_header padding075rem border_all width_fit">
                {"New Customer Source"}
              </p>
              <PieChartComponent />
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default page;
