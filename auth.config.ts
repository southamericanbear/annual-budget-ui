import type { NextAuthConfig } from "next-auth";
import { cookies } from "next/headers";
import { jwtVerify } from "jose";

const validateJWT = async (token: string) => {
  try {
    const {
      payload: { exp },
    } = await jwtVerify(
      token,
      new TextEncoder().encode(process.env.JWT_SECRET)
    );

    if (exp) {
      if (exp < Date.now() / 1000) return false;
    } else {
      return false;
    }

    return true;
  } catch (error) {
    console.log({ error });
    if (error) return false;
  }
};

export const authConfig = {
  pages: {
    signIn: "/login",
  },
  callbacks: {
    async authorized({ auth, request }) {
      const { token } = JSON.parse(cookies().get("user")?.value || "{}") as {
        user: string;
        token: string;
      };

      const isLoggedIn = !!auth?.user && (await validateJWT(token));

      const isOnDashboard =
        request.nextUrl.pathname.startsWith("/") &&
        request.nextUrl.pathname !== "/login";
      if (isOnDashboard) {
        if (isLoggedIn) return true;
        return false; // Redirect unauthenticated users to login page
      } else if (isLoggedIn) {
        return Response.redirect(new URL("/", request.nextUrl));
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
