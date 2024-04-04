import { fetchService } from "./api";
import NextAuth from "next-auth";
import { z } from "zod";
import { authConfig } from "@/auth.config";
import Credentials from "next-auth/providers/credentials";
import { cookies } from "next/headers";

export async function login(email: string, password: string) {
  try {
    const data = await fetchService("auth/login", "POST", {
      email,
      password,
    });

    return data.data;
  } catch (error) {
    console.log(error);
  }
}

export const { auth, signIn, signOut } = NextAuth({
  ...authConfig,
  providers: [
    Credentials({
      async authorize(
        credentials: Partial<{ email: string; password: string }>
      ): Promise<any | null> {
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
  session: {
    strategy: "jwt",
  },

  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        const userToken = { ...token, ...user };

        cookies().set("user", JSON.stringify(userToken));
      }

      return { ...token, ...user };
    },
  },
});
