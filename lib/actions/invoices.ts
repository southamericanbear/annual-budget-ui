"use server";
import { submitInvoiceService } from "@/services/invoices";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";

export const submitInvoice = async (
  files: FormData,
  { month, year }: { year: string; month: string }
) => {
  const { token } = JSON.parse(cookies().get("user")?.value || "{}");

  const response = await submitInvoiceService(files, year, month, token);

  revalidatePath("/invoices");
};
