import { DashboardCard } from "@/components/dashboard-card";
import { NoDataPlaceHolder } from "@/components/no-data-placeholder";
import { SidebarMenuLayout } from "@/components/layouts";
import { Card, CardContent } from "@/components/ui";
import { getAccounts } from "@/lib/data/account";
import { cookies } from "next/headers";
import { CreateAccountModal } from "@/components/accounts";

export default async function AccountsPage() {
  const { token } = JSON.parse(cookies().get("user")?.value || "{}");
  const accounts = await getAccounts(token);

  return (
    <SidebarMenuLayout>
      <div className="flex justify-end w-full my-3">
        <CreateAccountModal />
      </div>
      {accounts?.length ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {accounts?.map((account) => (
            <DashboardCard key={account.id} isAccount={true} {...account} />
          ))}
        </div>
      ) : (
        <Card className="h-screen flex items-center justify-center">
          <CardContent className="flex flex-col items-center justify-center text-center">
            <NoDataPlaceHolder />
          </CardContent>
        </Card>
      )}
    </SidebarMenuLayout>
  );
}
