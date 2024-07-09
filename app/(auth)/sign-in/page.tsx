"use client";
import { z } from "zod";
import Link from "next/link";
import { zodResolver } from "@hookform/resolvers/zod";
import { signInSchema } from "@/src/lib/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/src/components/ui/button";
import { Form } from "@/src/components/ui/form";
import { useState, useTransition } from "react";
import { login } from "@/src/actions/login";
import SignInForm, { formType } from "@/src/components/auth/sign-in";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/src/components/ui/card";

const SignIn = () => {
  const [error, setError] = useState<string | undefined>();
  const [isPending, startTransition] = useTransition();
  const form = useForm<formType>({
    resolver: zodResolver(signInSchema),
  });

  const onSubmit = async (values: formType) => {
    startTransition(async () => {
      const _res = await login(values);
      setError(_res.error);
    });
  };

  return (
    <Form {...form}>
      <Card className="w-auto h-auto">
        <CardContent>
          <div className="flex flex-col items-center justify-center py-12">
            <div className="mt-4 mr-4 justify-end w-full flex text-center text-sm">
              <Link href="/sign-up">
                <Button variant="ghost">Sign up</Button>
              </Link>
            </div>
            <SignInForm
              form={form}
              onSubmit={onSubmit}
              error={error}
              isPending={isPending}
            />
          </div>
        </CardContent>
      </Card>
    </Form>
  );
};

export default SignIn;
