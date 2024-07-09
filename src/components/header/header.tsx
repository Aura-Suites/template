import Link from "next/link";
import Image from "next/image";
import Theme from "./theme";
import Profile from "./profile";
import { Label } from "../ui/label";

const Header = () => {
  return (
    <header className="flex flex-[0_0_56px] items-center border-b h-14 shadow-lg">
      <div className="flex flex-1 flex-col">
        <Link href={`/`} className="cursor-pointer" title="Home">
          <div className="flex items-center gap-3 p-[16px]">
            <Image
              src="/logo_aura.jpg"
              alt="Logo"
              width={32}
              height={32}
              style={{ width: "auto", height: "auto" }}
            />
            <Label className="cursor-pointer overflow-visible uppercase leading-4">
              Port bi
            </Label>
          </div>
        </Link>
      </div>
      <div className="flex-1 flex justify-end gap-3 pr-3 ">
        <Theme />
        <Profile />
      </div>
    </header>
  );
};

export default Header;
