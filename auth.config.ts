import type { NextAuthConfig } from "next-auth";
import { cookies } from "next/headers";

export const authConfig = {
  pages: {
    signIn: "/login",
  },
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const user = cookies().get("user")?.value;
      const isLoggedIn = !!auth?.user && !!user;

      const isOnDashboard =
        nextUrl.pathname.startsWith("/") && nextUrl.pathname !== "/login";
      if (isOnDashboard) {
        if (isLoggedIn) return true;
        return false; // Redirect unauthenticated users to login page
      } else if (isLoggedIn) {
        return Response.redirect(new URL("/", nextUrl));
      }
      return true;
    },
  },
  jwt: {
    secret: process.env.JWT_SECRET,
  } as any,
  providers: [], // Add providers with an empty array for now
  secret: process.env.AUTH_SECRET,
} satisfies NextAuthConfig;
