import { FC, ReactNode } from "react";
import { redirect } from "next/navigation";
import { auth } from "@/src/lib/auth";
import Header from "@/src/components/header/header";

const ProtectedRoot: FC<{ children: ReactNode }> = async ({ children }) => {
  const session = await auth();
  if (!session) redirect("/sign-in");

  return (
    <div className="h-screen w-screen flex flex-col">
      <Header />
      <main className="flex w-full flex-1">{children}</main>
    </div>
  );
};

export default ProtectedRoot;
