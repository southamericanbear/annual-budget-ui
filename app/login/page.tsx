import { LoginForm } from "@/components/ui/login-form";
import { Metadata } from "next";

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
