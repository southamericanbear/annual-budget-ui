"use server";

import { updateBasicDataService } from "@/services/basic-data";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";

export const updateBasicData = async (
  data: {
    name: string;
    value: number;
    currency: string;
    category: string;
  },
  id: string
) => {
  const { token } = JSON.parse(cookies().get("user")?.value || "{}");

  await updateBasicDataService(data, id, token);

  revalidatePath("/basic-data");
};