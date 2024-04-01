"use server";

import { editAccountDetails } from "@/services";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";

export const editAccount = async (
  accountId: string,
  description: {
    name: string;
    value: number;
    type: string;
  }
) => {
  const { token } = JSON.parse(cookies().get("user")?.value || "{}");

  await editAccountDetails(token, accountId, description);
  revalidatePath(`/account/${accountId}`);
};
