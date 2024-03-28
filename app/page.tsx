import { SidebarMenuLayout } from "../components/layouts/index";
import { getInsights } from "@/lib/data/insights";

export default async function Home() {
  const { accounts, basicData } = await getInsights();

  return (
    <SidebarMenuLayout>
      <div className="container mx-auto p-4">
        <div>
          <span className="text-2xl font-semibold">Basic Data:</span>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {basicData.map((data) => (
              <div key={data.name} className="bg-white p-4 shadow rounded h-40">
                <h2 className="text-lg font-semibold">{data.name}</h2>
                <p>{data.value}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <span className="text-2xl font-semibold">Accounts:</span>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {accounts.map((account) => (
              <div
                key={account.id}
                className="bg-white p-4 shadow rounded h-40"
              >
                <h2 className="text-lg font-semibold">{account.name}</h2>
                <p>{account.type}</p>
                <p>{account.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SidebarMenuLayout>
  );
}
