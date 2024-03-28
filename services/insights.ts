import { Insights } from "@/types";
import { fetchService } from "./api";

export async function fetchInsights(token: string): Promise<Insights> {
  const response = await fetchService("insights", "GET", null, token);

  if (!response) {
    console.error(
      "Failed to fetch insights en el fetchInsai:",
      response.statusText
    );
  }

  const data = await response;

  return data;
}
