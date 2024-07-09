import { MenubarItem } from "../ui/menubar";

const HomeNav = () => {
  return (
    <div className="h-full w-full flex">
      <ul className="h-full w-full flex flex-col overflow-auto ">
        {[...Array(100)].map((d, i) => {
          return (
            <li
              className="flex hover:bg-muted cursor-pointer select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50"
              key={i}
            >
              New Tab
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default HomeNav;
