import { LinkWhite, LinkBlack } from "../buttons";

export function NavbarWithAuthButtons() {
  return (
    <NavbarBase>
      <div className="flex gap-3">
        <LinkWhite text="log in" href="#" />
        <LinkBlack text="sign up" href="#" />
      </div>
    </NavbarBase>
  );
}

export function Navbar() {
  return <NavbarBase />;
}

function NavbarBase({ children }: { children?: React.ReactNode }) {
  return (
    <nav className="flex justify-between items-center px-24 py-12">
      <span className="font-inter font-black text-4xl tracking-tight">
        SouSou
      </span>

      <div className="flex items-center gap-10">
        <div className="">
          <ul className="flex items-center gap-8">
            <NavItem text="how it works" />
            <NavItem text="pre-qualify" />
            <NavItem text="roommate finder" />
          </ul>
        </div>

        {children}
      </div>
    </nav>
  );
}

function NavItem({ text }: { text: string }) {
  return (
    <li>
      <a href="#" className="cursor-pointer">
        <span className="font-inter font-medium text-xl tracking-tight capitalize">
          {text}
        </span>
      </a>
    </li>
  );
}
