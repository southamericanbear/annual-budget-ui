"use server";

import {
  updateBasicDataService,
  createBasicDataService,
} from "@/services/basic-data";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";

export const createBasicData = async (data: {
  name: string;
  value: number;
  currency: string;
  category: string;
}) => {
  const { token } = JSON.parse(cookies().get("user")?.value || "{}");

  await createBasicDataService(data, token);

  revalidatePath("/basic-data");
};

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
