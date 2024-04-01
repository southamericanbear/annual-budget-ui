import { Metadata } from "next";
import { LoginForm } from "@/components/login-form";

export const metadata: Metadata = {
  title: "Login",
};

export default function LoginPage() {
  return (
    <div className="container h-screen flex justify-center items-center">
      <LoginForm />
    </div>
  );
}
