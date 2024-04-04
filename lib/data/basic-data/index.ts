"use server";
import { fetchBasicDataService } from "@/services/basic-data";
import { cookies } from "next/headers";

export async function getBasicData() {
  const { token } = JSON.parse(cookies().get("user")?.value || "{}");
  try {
    const data = await fetchBasicDataService(token);
    return data;
  } catch (error) {
    console.log({ error: error });
    throw new Error("Failed to fetch basic data");
  }
}
