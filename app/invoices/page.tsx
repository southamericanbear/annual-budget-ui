import { SidebarMenuLayout } from "@/components/layouts";
import { UploadInvoice } from "@/components/upload-invoice";

export const metadata = {
  title: "Invoices",
};

export default function InvoicesPage() {
  return (
    <SidebarMenuLayout>
      <h1>Invoices</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-screen-lg">
        <div className="h-fit">
          <UploadInvoice />
        </div>
        <div className="bg-red-500 h-32"></div>
        <div className="md:col-span-2 bg-green-500 h-32"></div>
      </div>
    </SidebarMenuLayout>
  );
}
