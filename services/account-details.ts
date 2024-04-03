import { AccountDetails } from "@/types";
import { fetchService } from "./api";

export async function fetchAccountDetails(
  token: string,
  accountId: string
): Promise<AccountDetails | null> {
  try {
    const response = await fetchService(
      `accounts/${accountId}`,
      "GET",
      null,
      token
    );

    if (!response) {
      console.error("Failed to fetch account details:", response);
      return null;
    }

    return response.data as AccountDetails;
  } catch (error) {
    console.error("Failed to fetch account details:", error);
    return null;
  }
}

export async function editAccountDetails(
  token: string,
  accountId: string,
  accountDetails: { name: string; value: number; type: string }
): Promise<AccountDetails | null> {
  try {
    const response = await fetchService(
      `accounts/${accountId}`,
      "PUT",
      accountDetails,
      token
    );

    if (!response) {
      console.error("Failed to edit account details:", response);
    }

    return response.data as AccountDetails;
  } catch (error) {
    console.error("Failed to edit account details:", error);
    return null;
  }
}
