"use client";

import { useFormState } from "react-dom";
import { authenticate } from "@/lib/actions/auth";
import { Button } from "@/components/ui/button";
import { InputLogin } from "@/components";

export function LoginForm() {
  const [errorMessage, dispatch] = useFormState(authenticate, undefined);
  return (
    <>
      <div className="flex flex-col items-center justify-center rounded-md bg-gray-50 p-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md space-y-8">
          <div>
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
              Sign in to your account
            </h2>
          </div>
          <form className="mt-8 space-y-6" action={dispatch}>
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="-space-y-px rounded-md shadow-sm">
              <div>
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <InputLogin
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  placeholder="Email address"
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <InputLogin
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="relative block w-full px-3 py-2 rounded-none rounded-b-md border-0 border-b-2 border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                  placeholder="Password"
                />
              </div>
            </div>
            <div>
              <Button type="submit">Sign in</Button>
            </div>
          </form>
          {errorMessage && (
            <p className="mt-2 text-center text-sm text-red-600">
              {errorMessage}
            </p>
          )}
        </div>
      </div>
    </>
  );
}
