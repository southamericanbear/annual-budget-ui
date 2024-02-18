import api from "./api";
import NextAuth from "next-auth";
import { z } from "zod";
import { authConfig } from "@/auth.config";
import Credentials from "next-auth/providers/credentials";

export async function login(email: string, password: string) {
  try {
    const response = await api.post("/auth/login", {
      email,
      password,
    });

    return response.data;
  } catch (error) {
    console.error(error);
  }
}

export const { auth, signIn, signOut } = NextAuth({
  ...authConfig,
  providers: [
    Credentials({
      async authorize(credentials) {
        const parsedCredentials = z
          .object({ email: z.string().email(), password: z.string().min(6) })
          .safeParse(credentials);

        if (parsedCredentials.success) {
          const { email, password } = parsedCredentials.data;
          const user = await login(email, password);

          if (!user) return null;

          return user;
        }

        console.log("Invalid credentials");
        return null;
      },
    }),
  ],
});
