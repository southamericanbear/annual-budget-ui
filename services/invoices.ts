import { fetchService, fetchWithFilesService } from "./api";

export async function fetchInvoicesService(token: string) {
  try {
    const response = await fetchService(
      "taxes/get-taxes-stats",
      "GET",
      null,
      token
    );

    if (!response) {
      console.error("Failed to fetch invoices:", response);
      return null;
    }

    return response.data;
  } catch (error) {
    console.error("Failed to fetch invoices:", error);
    return null;
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
