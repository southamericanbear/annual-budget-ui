import { SidebarMenuLayout } from "@/components/layouts";
import { UploadInvoice } from "@/components/upload-invoice";

export const metadata = {
  title: "Invoices",
};

export default function InvoicesPage() {
  return (
    <SidebarMenuLayout>
      <h1>Invoices</h1>
      <UploadInvoice />
    </SidebarMenuLayout>
  );
}
