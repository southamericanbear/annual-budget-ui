import { fetchInsights } from "@/services/insights";
import { Insights } from "@/types";
import { unstable_noStore as noStore } from "next/cache";

export async function getInsights(): Promise<Insights> {
  //   noStore();

  try {
    const data = await fetchInsights();

    return data;
  } catch (error) {
    console.log({ error: error });

    throw new Error("Failed to fetch insights");
  }
}
