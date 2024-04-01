import { AccountDetails } from "@/types";
import { fetchService } from "./api";

export async function fetchAccountDetails(
  token: string,
  accountId: string
): Promise<AccountDetails> {
  const response = await fetchService(
    `accounts/${accountId}`,
    "GET",
    null,
    token
  );

  if (!response) {
    console.error("Failed to fetch account details:", response.statusText);
  }

  const data = await response;

  return data;
}

export async function editAccountDetails(
  token: string,
  accountId: string,
  accountDetails: { name: string; value: number; type: string }
): Promise<AccountDetails> {
  const response = await fetchService(
    `accounts/${accountId}`,
    "PUT",
    accountDetails,
    token
  );

  if (!response) {
    console.error("Failed to edit account details:", response.statusText);
  }

  const data = await response;

  return data;
}
