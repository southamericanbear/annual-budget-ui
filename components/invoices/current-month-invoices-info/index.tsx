import React from "react";
import ItemsCardLayout from "@/components/layouts/items-card-layout";
import { InvoicesInsights } from "@/types";
import { CardContent, CardHeader, CardTitle, Progress } from "@/components/ui";

interface CurrentMonthInvoicesInfoProps {
  invoice: InvoicesInsights | null;
}

const CURRENT_LIMIT = 458000;

export const CurrentMonthInvoicesInfo = ({
  invoice,
}: CurrentMonthInvoicesInfoProps) => {
  return (
    <ItemsCardLayout className={`max-w-lg h-full ${!invoice && "flex"}`}>
      {invoice ? (
        <>
          <CardHeader>
            <CardTitle>Current Month Info</CardTitle>
          </CardHeader>
          <CardContent>
            <span className="text-lg font-semibold">
              Period: {invoice.month} / {invoice.year}
            </span>
            <hr className="my-4 border-t border-muted-foreground" />
            <div className="flex flex-col gap-3">
              <span className="text-sm text-muted-foreground">
                ${invoice.value} / ${CURRENT_LIMIT}
              </span>
              <Progress
                value={(invoice.value / CURRENT_LIMIT) * 100}
                indicatorClasses="bg-gray-700"
              />
            </div>
          </CardContent>
        </>
      ) : (
        <div className="flex justify-center items-center">
          <p className="text-sm text-muted-foreground p-4">
            No invoices found for the current month. Please upload invoices to
            view insights.
          </p>
        </div>
      )}
    </ItemsCardLayout>
  );
};
