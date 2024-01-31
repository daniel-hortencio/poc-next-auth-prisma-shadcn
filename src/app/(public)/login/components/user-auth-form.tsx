"use client";

import * as React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { cn } from "@lib/utils";
import { Button } from "@components/Button";
import { Icons } from "@components/Icons";
import { Input } from "@components/Input";
import { Form } from "@components/Form";
import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";

interface IFormInput {
  email: string;
  password: string;
}

export const AuthSchema = z.object({
  email: z
    .string()
    .regex(
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      "Insira um e-mail válido, Ex: example@mail.com "
    ),
  password: z.string().min(8),
});

export type AuthData = z.infer<typeof AuthSchema>;

export function UserAuthForm() {
  const [loading, setLoading] = useState(false);

  const router = useRouter();
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") || "/profile";

  const methods = useForm<IFormInput>({
    resolver: zodResolver(AuthSchema),
  });

  async function onSubmit(data: AuthData) {
    console.log({ data });

    try {
      setLoading(true);

      const res = await signIn("credentials", {
        ...data,
        redirect: false,
        callbackUrl,
      });

      setLoading(false);

      console.log(res);
      if (!res?.error) {
        router.push(callbackUrl);
      } else {
        alert("invalid email or password");
      }
    } catch (error: any) {
      setLoading(false);
      alert("Erro");
      console.log(error);
    }
  }

  return (
    <Form methods={methods} onSubmit={onSubmit}>
      <div className={cn("grid gap-6")}>
        <div className="grid gap-2">
          <Input.Email
            placeholder="Digite seu email..."
            name="email"
            label="Email"
          />
          <Input.Password
            placeholder="Digite sua senha..."
            name="password"
            label="Senha"
          />
          <Button disabled={loading}>
            {loading && <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />}
            Sign In with Email
          </Button>
        </div>
        {/* <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t" />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-background px-2 text-muted-foreground">
              Or continue with
            </span>
          </div>
        </div>
        <Button variant="outline" type="button" disabled={isLoading}>
          {isLoading ? (
            <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
          ) : (
            <Icons.gitHub className="mr-2 h-4 w-4" />
          )}{" "}
          GitHub
        </Button> */}
      </div>
    </Form>
  );
}
