import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Settings",
};

export default function SettingsPage() {
  return (
    <div className="container h-screen flex justify-center items-center">
      <h1>Settings</h1>
    </div>
  );
}
