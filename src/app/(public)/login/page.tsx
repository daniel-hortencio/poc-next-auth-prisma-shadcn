import { Metadata } from "next";
import Link from "next/link";

import { UserAuthForm } from "./components/user-auth-form";

export const metadata: Metadata = {
  title: "Login",
  description: "Login",
};

export default function LoginPage() {
  return (
    <div className="relative h-screen grid lg:max-w-none lg:grid-cols-2 lg:px-0">
      <div className="relative hidden h-full flex-col bg-zinc-900 p-10 lg:flex"></div>

      <div className="flex items-center p-8">
        <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-96">
          <div className="flex flex-col space-y-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">SignIn</h1>
            <p className="text-sm text-muted-foreground">
              Enter your email below to create your account
            </p>
          </div>
          <UserAuthForm />
          <p className="px-8 text-center text-sm text-muted-foreground">
            By clicking continue, you agree to our{" "}
            <Link
              href="/terms"
              className="underline underline-offset-4 hover:text-primary"
            >
              Terms of Service
            </Link>{" "}
            and{" "}
            <Link
              href="/privacy"
              className="underline underline-offset-4 hover:text-primary"
            >
              Privacy Policy
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
