import * as Boolean from "fp-ts-std/Boolean";
import { ChevronDown, X, type LucideIcon } from "lucide-react";
import { useState } from "react";

export function SidebarList({ children }: { children: React.ReactNode }) {
  return <ul className="flex flex-col gap-2">{children}</ul>;
}

export function SidebarDropdown({
  icon: Icon,
  text,
  children,
}: {
  icon: LucideIcon;
  text: string;
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);

  return (
    <li>
      <button
        className="cursor-pointer w-full flex gap-2 items-center p-2"
        onClick={() => setOpen(Boolean.invert)}
      >
        <Icon className="size-5 text-stone-600" />
        <span className="grow-1 capitalize font-inter font-semibold text-sm text-left text-stone-600">
          {text}
        </span>

        <span className="">
          {open ? (
            <X className="text-stone-600 size-5" />
          ) : (
            <ChevronDown className="text-stone-600 size-5" />
          )}
        </span>
      </button>

      {open && <div className="pl-8">{children}</div>}
    </li>
  );
}

export function SidebarItem({
  text,
  icon: Icon,
  handleClick,
}: {
  text: string;
  icon: LucideIcon;
  handleClick: (clicked: string) => void;
}) {
  return (
    <li>
      <button
        className="cursor-pointer w-full flex gap-2 items-center p-2"
        onClick={() => handleClick(text)}
      >
        <Icon className="size-5 text-stone-600" />
        <span className="grow-1 capitalize font-inter font-semibold text-sm text-left text-stone-600">
          {text}
        </span>
      </button>
    </li>
  );
}
