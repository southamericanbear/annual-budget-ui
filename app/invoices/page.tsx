import { InvoicesTable } from "@/components/invoices-table";
import { SidebarMenuLayout } from "@/components/layouts";
import { UploadInvoice } from "@/components/upload-invoice";
import { getInvoiceDetails } from "@/lib/data/invoices";

export const metadata = {
  title: "Invoices",
};

export default async function InvoicesPage() {
  const data = await getInvoiceDetails();

  return (
    <SidebarMenuLayout>
      <h1>Invoices</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-screen-lg">
        <div className="h-fit">
          <UploadInvoice />
        </div>
        <div className="bg-red-500 h-32"></div>
        <div className="md:col-span-2">
          <InvoicesTable invoices={data} />
        </div>
      </div>
    </SidebarMenuLayout>
  );
}
