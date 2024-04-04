"use server";
import { BasicDataDetails } from "@/types";
import { fetchService } from "./api";

export async function fetchBasicDataService(
  token: string
): Promise<BasicDataDetails[]> {
  try {
    const response = await fetchService("basic-data", "GET", null, token);

    if (!response) {
      console.log("Failed to fetch basic data:", response);
      return [];
    }

    return response.data;
  } catch (error) {
    console.log({ error: error });
    return [];
  }
}

export async function updateBasicDataService(
  data: {
    name: string;
    value: number;
    currency: string;
    category: string;
  },
  id: string,
  token: string
) {
  try {
    const response = await fetchService(`basic-data/${id}`, "PUT", data, token);
    console.log({ response });
    if (!response) {
      console.error("Failed to update basic data:", response);
    }

    return response;
  } catch (error) {
    console.error("Failed to update basic data:", error);
  }
}
