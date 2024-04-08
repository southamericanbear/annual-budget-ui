import { fetchAccountDetails, fetchAccounts } from "@/services/accounts";

export async function getAccounts(token: string) {
  try {
    const data = await fetchAccounts(token);

    return data;
  } catch (error) {
    console.log({ error: error });

    throw new Error("Failed to fetch accounts");
  }
}

export async function getAccountDetails(token: string, accountId: string) {
  try {
    const data = await fetchAccountDetails(token, accountId);

    return data;
  } catch (error) {
    console.log({ error: error });

    throw new Error("Failed to fetch account details");
  }
}
