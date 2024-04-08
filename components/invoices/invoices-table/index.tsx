import { InvoicesInsights } from "@/types";
import ItemsCardLayout from "@/components/layouts/items-card-layout";
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui";
import moment from "moment";

interface InvoicesTableProps {
  invoices: InvoicesInsights[];
}

export const InvoicesTable = ({ invoices }: InvoicesTableProps) => {
  return (
    <ItemsCardLayout>
      {invoices.length ? (
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Updated At</TableHead>
              <TableHead>Month</TableHead>
              <TableHead>Year</TableHead>
              <TableHead>Value per month</TableHead>
              <TableHead>Total Invoice montly</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {invoices.map((invoice) => (
              <TableRow key={invoice.id}>
                <TableHead>
                  {moment(invoice.updatedAt).format("DD/MM/YYYY")}
                </TableHead>
                <TableHead>{invoice.month}</TableHead>
                <TableHead>{invoice.year}</TableHead>
                <TableHead>{invoice.value}</TableHead>
                <TableHead>{invoice.invoicesAmount}</TableHead>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      ) : (
        <div className="flex justify-center">
          <span className="text-center text-sm text-gray-600">
            There is no invoices to show
          </span>
        </div>
      )}
    </ItemsCardLayout>
  );
};
