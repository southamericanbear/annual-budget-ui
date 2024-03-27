import { Insights } from "@/types";
import { fetchWithToken } from "./api";

export async function fetchInsights(): Promise<Insights> {
  const response = await fetchWithToken("insights");

  if (!response) {
    console.error(
      "Failed to fetch insights en el fetchInsai:",
      response.statusText
    );
  }

  const data = await response;

  return data;
}
