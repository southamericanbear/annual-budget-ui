import moment from "moment";
import { InvoicesTable } from "@/components/invoices-table";
import { SidebarMenuLayout } from "@/components/layouts";
import { UploadInvoice } from "@/components/upload-invoice";
import { getInvoiceDetails } from "@/lib/data/invoices";
import { CurrentMonthInvoicesInfo } from "@/components/current-month-invoices-info";

export const metadata = {
  title: "Invoices",
};

export default async function InvoicesPage() {
  const data = await getInvoiceDetails();

  function handleGetCurrentMonthInvoices() {
    const currentMonth = moment().format("MMMM").toLowerCase();
    const currentYear = moment().format("YYYY");

    const currentMonthInvoices = data.find(
      (invoice) =>
        invoice.month === currentMonth && invoice.year === currentYear
    );

    return currentMonthInvoices ?? null;
  }

  return (
    <SidebarMenuLayout>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-screen-lg">
        <div className="h-fit">
          <UploadInvoice />
        </div>
        <div className="h-full">
          <CurrentMonthInvoicesInfo invoice={handleGetCurrentMonthInvoices()} />
        </div>
        <div className="md:col-span-2">
          <InvoicesTable invoices={data} />
        </div>
      </div>
    </SidebarMenuLayout>
  );
}
