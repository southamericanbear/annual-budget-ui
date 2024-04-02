import { cookies } from "next/headers";
import { SidebarMenuLayout } from "@/components/layouts";
import { getInsights } from "@/lib";
import { DashboardCard } from "@/components/dashboard-card";

export default async function Home() {
  const { token } = JSON.parse(cookies().get("user")?.value || "{}");
  const { accounts, basicData } = await getInsights(token);

  return (
    <SidebarMenuLayout>
      <div className="container mx-auto p-4">
        <div>
          <span className="text-2xl font-semibold">Basic Data:</span>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {basicData.map((data) => (
              <DashboardCard key={data.name} {...data} />
            ))}
          </div>
        </div>

        <div>
          <span className="text-2xl font-semibold">Accounts:</span>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {accounts.map((account) => (
              <DashboardCard key={account.id} {...account} />
            ))}
          </div>
        </div>
      </div>
    </SidebarMenuLayout>
  );
}
