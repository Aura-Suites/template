"use server";

import { z } from "zod";
import { signInSchema } from "../lib/zod";
import { AuthError } from "next-auth";
import { signIn } from "../lib/auth";

type formType = z.infer<typeof signInSchema>;

export const login = async (values: formType) => {
  const check = signInSchema.safeParse(values);

  if (!check.success) {
    return { error: "Invalid fields!" };
  }
  const { email, password } = check.data;
  try {
    await signIn("credentials", { email, password, redirectTo: "/" });
    console.log("email");
    return { message: "success" };
  } catch (err) {
    
    if (err instanceof AuthError) {
      console.log(err.type);
      switch (err.type) {
        case "CredentialsSignin":
          return { error: "Invilid Credentials!" };
        default:
          return { error: "Something went wrong!" };
      }
    }
    throw err
  }
};
