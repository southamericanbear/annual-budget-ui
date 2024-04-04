"use server";
import { fetchInvoicesService } from "@/services/invoices";
import { cookies } from "next/headers";

export async function getInvoiceDetails() {
  const { token } = JSON.parse(cookies().get("user")?.value || "{}");
  try {
    const data = await fetchInvoicesService(token);

    return data;
  } catch (error) {
    console.log({ error: error });

    throw new Error("Failed to fetch invoice details");
  }
}
