import { fetchWithFilesService } from "./api";

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
