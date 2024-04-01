import moment from "moment";
import { Transaction } from "@/types";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui";
import { ItemsCardLayout } from "..";

interface AccountTransactionsTableProps {
  transactions: Transaction[];
  accountName?: string;
}

export const AccountTransactionsTable = ({
  transactions,
  accountName,
}: AccountTransactionsTableProps) => {
  return (
    <ItemsCardLayout className="mt-8 p-6">
      <div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Id</TableHead>
              {accountName && <TableHead>Account</TableHead>}
              <TableHead>Amount</TableHead>
              <TableHead>Date</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {transactions.map((transaction) => (
              <TableRow key={transaction.id}>
                <TableCell>{transaction.id}</TableCell>
                {accountName && <TableCell>{accountName}</TableCell>}
                <TableCell>{transaction.value}</TableCell>
                <TableCell>
                  {moment(transaction.createdAt).format("DD/MM/YYYY")}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </ItemsCardLayout>
  );
};
