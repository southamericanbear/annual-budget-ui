import { SidebarMenuLayout } from "@/components/layouts/index";
import { AccountTransactionsTable } from "@/components/account-transactions-table";
import { getAccountDetails as getAcountsDetailsService } from "@/lib/data/account-details";
import { cookies } from "next/headers";
import { notFound } from "next/navigation";
import { EditAccountForm } from "@/components/edit-account-form";

const getAccountDetails = async (accountId: string) => {
  try {
    const { token } = JSON.parse(cookies().get("user")?.value || "{}");

    return await getAcountsDetailsService(token, accountId);
  } catch (error) {
    console.error("Failed to fetch account details:", error);
    notFound();
  }
};

export async function generateMetadata(props: any) {
  try {
    const { name } = await getAccountDetails(props.params.id);

    return { title: name, description: "Account page" };
  } catch (error) {
    console.log(error);

    return { title: "Account", description: "Account page" };
  }
}

export default async function AccountPage(props: any) {
  const accountId = props.params.id;
  const { name, value, type, transactions } = await getAccountDetails(
    accountId
  );

  return (
    <SidebarMenuLayout>
      <div>
        <h1 className="text-2xl mb-4">{name}</h1>
        <EditAccountForm
          accountId={accountId}
          name={name}
          value={value}
          type={type}
        />
        <AccountTransactionsTable transactions={transactions} />
      </div>
    </SidebarMenuLayout>
  );
}
