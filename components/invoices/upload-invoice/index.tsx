"use client";
import { useState } from "react";
import { CardHeader, CardContent, CardTitle } from "@/components/ui";
import ItemCardLayout from "@/components/layouts/items-card-layout";
import { SelectDateInvoice } from "./select-date-invoice";
import { SelectInvoicesForm } from "./select-invoices-form";
import { submitInvoice } from "@/lib/actions/invoices";
import { useToast } from "../../../hooks/use-toast";
import { Toaster } from "@/components/ui/toaster";

export const UploadInvoice = () => {
  const { toast } = useToast();

  const [yearAndMonth, setYearAndMonth] = useState<{
    year: string | null;
    month: string | null;
  }>({
    month: null,
    year: null,
  });

  async function onSubmit(data: any) {
    if (!data.file || !yearAndMonth.month || !yearAndMonth.year) {
      return;
    }
    const formData = new FormData();
    Array.from(data.file).forEach((file: any) => {
      formData.append("invoices", file);
    });

    await submitInvoice(formData, {
      month: yearAndMonth.month,
      year: yearAndMonth.year,
    })
      .then(() => {
        toast({
          variant: "default",
          title: "Invoice(s) upload",
          description: "Invoice(s) uploaded successfully",
        });
      })
      .catch((error) => {
        console.error("Error submitting invoice:", error);
        toast({
          variant: "destructive",
          title: "Invoice(s) upload",
          description: "Failed to upload invoice(s)",
        });
      });
  }

  return (
    <ItemCardLayout className="max-w-lg">
      <CardHeader>
        <CardTitle>Upload Invoice(s)</CardTitle>
      </CardHeader>
      <CardContent>
        <SelectDateInvoice
          yearAndMonth={yearAndMonth}
          setYearAndMonth={setYearAndMonth}
        />

        <SelectInvoicesForm onSubmit={onSubmit} />
      </CardContent>
      <Toaster />
    </ItemCardLayout>
  );
};
