import {
  CalendarDays,
  ChevronDown,
  CircleCheckBig,
  CircleHelp,
  House,
  Landmark,
  PiggyBank,
  Sparkles,
  UsersRound,
  X,
  type LucideIcon,
} from "lucide-react";
import { Logo } from "../../../components/logo";
import { useState } from "react";
import { invert } from "fp-ts-std/Boolean";
import { Support } from "../../../components/support";

export function Dashboard() {
  return (
    <section className="relative min-h-screen">
      <div className="absolute top-0 left-0 h-screen w-80 bg-stone-50 flex flex-col">
        <div className="p-5 border-b border-b-stone-100">
          <Logo />
        </div>
        <div className="grow-1 p-5 flex flex-col">
          <div className="grow-1">
            <nav>
              <List>
                <Item text="dashboard" icon={House} />
                <Item text="loan services" icon={Landmark}>
                  <List>
                    <Item text="apply for loan" icon={PiggyBank} />
                    <Item text="Pre-Qualification" icon={CircleCheckBig} />
                    <Item text="loan repayment plan" icon={CalendarDays} />
                  </List>
                </Item>
                <Item text="roommate matching" icon={UsersRound}>
                  <List>
                    <Item text="coming soon" icon={Sparkles} />
                  </List>
                </Item>
              </List>
            </nav>
          </div>
          <Support />
        </div>
      </div>
    </section>
  );
}

function Item({
  children,
  text,
  icon: Icon,
}: {
  children?: React.ReactNode;
  text: string;
  icon: LucideIcon;
}) {
  const [open, setOpen] = useState(false);

  return (
    <li>
      <button
        className="cursor-pointer w-full flex gap-2 items-center p-2"
        onClick={() => setOpen(invert)}
      >
        <Icon className="size-5 text-stone-600" />
        <span className="grow-1 capitalize font-inter font-semibold text-sm text-left text-stone-600">
          {text}
        </span>

        {children && (
          <span className="">
            {open ? (
              <X className="text-stone-600 size-5" />
            ) : (
              <ChevronDown className="text-stone-600 size-5" />
            )}
          </span>
        )}
      </button>

      {open && <div className="pl-8">{children}</div>}
    </li>
  );
}

function List({ children }: { children: React.ReactNode }) {
  return <ul className="flex flex-col gap-2">{children}</ul>;
}
