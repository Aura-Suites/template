"use client";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
} from "../ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { DropdownMenuItem } from "@radix-ui/react-dropdown-menu";
import { signOut, useSession } from "next-auth/react";

const Profile = () => {
  const { data } = useSession();
  if (!data?.user) return null;

  const image = data?.user?.image || "/";
  const name = data?.user?.name?.split(" ")[0][0];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Avatar>
          <AvatarImage src={image} alt="aura" />
          <AvatarFallback className="uppercase font-medium">
            {name}
          </AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuItem onClick={() => signOut()}>
          <DropdownMenuLabel>logout</DropdownMenuLabel>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default Profile;
