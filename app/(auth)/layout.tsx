import { FC, ReactNode } from "react";
import AuthLayout from "@/src/components/auth/background";

const AuthRoot: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <main className="w-screen h-screen lg:grid lg:grid-cols-2 ">
      <AuthLayout />
      {children}
    </main>
  );
};

export default AuthRoot;
