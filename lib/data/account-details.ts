import { fetchAccountDetails } from "@/services/account-details";

export async function getAccountDetails(token: string, accountId: string) {
  try {
    const data = await fetchAccountDetails(token, accountId);

    return data;
  } catch (error) {
    console.log({ error: error });

    throw new Error("Failed to fetch account details");
  }
}
