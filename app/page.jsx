import "./page.css";
import DashboardHeader from "@/components/home/DashboardHeader";
import DashboardCard from "@/components/home/DashboardCard";
import DashboardChart from "@/components/home/DashboardChart";
import Map from "@/components/home/Map";

export default function Home() {
  return (
    <div className="flex column home_page">
      <DashboardHeader />
      <div className="flex gap1rem column">
        <DashboardCard />

        <div className="flex gap1rem home_page_charts">
          <DashboardChart />
          <Map />
        </div>
      </div>
    </div>
  );
}
