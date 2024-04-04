import { fetchService, fetchWithFilesService } from "./api";
import { InvoicesInsights } from "@/types";

export async function fetchInvoicesService(
  token: string
): Promise<InvoicesInsights[]> {
  try {
    const response = await fetchService(
      "taxes/get-taxes-stats",
      "GET",
      null,
      token
    );

    if (!response) {
      console.error("Failed to fetch invoices:", response);
      return [];
    }

    return response.data;
  } catch (error) {
    console.error("Failed to fetch invoices:", error);
    return [];
  }
}

export async function submitInvoiceService(
  files: FormData,
  year: string,
  month: string,
  token: string
) {
  const response = await fetchWithFilesService(
    `taxes/upload-invoice?year=${year}&month=${month.toLowerCase()}`,
    "PUT",
    files,
    token
  );

  if (!response) {
    console.error("Failed to submit invoice:", response);
  }

  return response;
}
