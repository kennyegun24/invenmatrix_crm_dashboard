import Image from "next/image";
import styles from "./page.module.css";
import DashboardHeader from "@/components/home/DashboardHeader";
import DashboardCard from "@/components/home/DashboardCard";
import DashboardChart from "@/components/home/DashboardChart";

export default function Home() {
  return (
    <div className="flex column">
      <DashboardHeader />
      <div
        className="flex gap1rem column"
        style={{ padding: "1.5rem", width: "100%", height: "100vh" }}
      >
        <DashboardCard />

        <div
          className="flex gap1rem"
          style={{
            width: "100%",
            height: "700px",
          }}
        >
          <DashboardChart />
        </div>
      </div>
    </div>
  );
}
