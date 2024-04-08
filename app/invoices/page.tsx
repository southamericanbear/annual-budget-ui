import moment from "moment";
import {
  InvoicesTable,
  UploadInvoice,
  CurrentMonthInvoicesInfo,
} from "@/components/invoices";
import { SidebarMenuLayout } from "@/components/layouts";
import { getInvoiceDetails } from "@/lib/data/invoices";

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
