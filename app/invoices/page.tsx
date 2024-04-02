import { SidebarMenuLayout } from "@/components/layouts";

export const metadata = {
  title: "Invoices",
};

export default function InvoicesPage() {
  return (
    <SidebarMenuLayout>
      <h1>Invoices</h1>

      <button draggable="true" className="border-gray-500 border-solid">
        hola
      </button>
    </SidebarMenuLayout>
  );
}
