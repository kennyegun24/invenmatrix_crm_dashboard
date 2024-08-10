import { Container } from "@/components/GlobalComponents";
import "./page.css";
import DashboardHeader from "@/components/DashboardHeader";
import DashboardCard from "@/components/home/DashboardCard";
import DashboardChart from "@/components/home/DashboardChart";
import Map from "@/components/home/Map";
import Products from "@/components/home/table/Products";

export default function Home() {
  return (
    <Container>
      <DashboardHeader text={"Dashboard"} />
      <div className="flex gap1rem column padding1rem">
        <DashboardCard />

        <div className="flex gap1rem home_page_charts">
          <DashboardChart />
          <Map />
        </div>
        <Products />
      </div>
    </Container>
  );
}
