import { SidebarMenuLayout } from "@/components/layouts";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Settings",
};

export default function SettingsPage() {
  return (
    <SidebarMenuLayout>
      <div className="container h-screen flex justify-center items-center">
        <h1>Settings</h1>
      </div>
    </SidebarMenuLayout>
  );
}
