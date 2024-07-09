import { ExclamationTriangleIcon } from "@radix-ui/react-icons";
import { FC } from "react";

const SignInError: FC<{ message?: string }> = ({ message }) => {
  if (!message) return null;
  return (
    <div className="bg-destructive/15 text-destructive flex items-center border border-destructive p-2 gap-2 rounded-md">
      <ExclamationTriangleIcon className="h-4 w-4" />
      <p>{message}</p>
    </div>
  );
};

export default SignInError;
