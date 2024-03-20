import { SidebarMenuLayout } from "@/components";

export default function Home() {
  return (
    <SidebarMenuLayout>
      <div className="container mx-auto p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-purple-500 h-20"></div>
          <div className="bg-purple-500 h-20"></div>
          <div className="bg-purple-500 h-20"></div>
          <div className="bg-purple-500 h-20"></div>
        </div>
      </div>
    </SidebarMenuLayout>
  );
}
