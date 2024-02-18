import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard",
};

export default function DashboardPage() {
  return (
    <div className="container h-screen flex justify-center items-center">
      <h1>Dashboard</h1>
    </div>
  );
}
