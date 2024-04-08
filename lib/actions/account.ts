"use server";

import {
  editAccountDetails,
  createAccount as createAccountService,
} from "@/services";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";

export const createAccount = async (payload: {
  name: string;
  value: number;
  type: string;
}) => {
  const { token } = JSON.parse(cookies().get("user")?.value || "{}");

  await createAccountService(payload, token);
  revalidatePath("/accounts");
};

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
