"use client";

import Image from "next/image";
import lightImage from "@/public/login.png";
import darkImage from "@/public/dark.png";
import { useTheme } from "next-themes";
const AuthLayout = () => {
  const { resolvedTheme, theme } = useTheme();  
  return (
    <div className="hidden bg-muted lg:block">
      <Image
        src={resolvedTheme === "dark" ? darkImage : lightImage}
        alt="Image"
        width="1920"
        height="1080"
        className="h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
      />
    </div>
  );
};

export default AuthLayout;
