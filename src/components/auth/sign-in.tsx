import { FC } from "react";
import { Button } from "../ui/button";
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import SignInError from "./sign-in-error";
import { signInSchema } from "@/src/lib/zod";
import { z } from "zod";

export type formType = z.infer<typeof signInSchema>;

const SignInForm: FC<{
  form: any;
  onSubmit: (values: formType) => Promise<void>;
  isPending: boolean;
  error: string | undefined;
}> = ({ form, onSubmit, isPending, error }) => {
  return (
    <form
      onSubmit={form.handleSubmit(onSubmit)}
      className="mx-auto grid w-[350px] gap-6"
    >
      <div className="grid gap-2 text-center">
        <h1 className="text-3xl font-bold">Login</h1>
        <p className="text-balance text-muted-foreground">
          Enter your email below to login to your account
        </p>
      </div>
      <div className="grid gap-4">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  disabled={isPending}
                  className="bg-background"
                  type="email"
                  placeholder="example@domain.com"
                />
              </FormControl>
              {form.formState.errors.email && (
                <FormMessage>
                  <Label>{form.formState.errors.email.message}</Label>
                </FormMessage>
              )}
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  disabled={isPending}
                  type="password"
                  placeholder="****"
                />
              </FormControl>
              {form.formState.errors.password && (
                <FormMessage>
                  <Label>{form.formState.errors.password.message}</Label>
                </FormMessage>
              )}
            </FormItem>
          )}
        />
        <SignInError message={error} />
        <Button type="submit" className="w-full">
          Login
        </Button>
      </div>
    </form>
  );
};

export default SignInForm;
