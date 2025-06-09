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

function LinkWhite({
  text,
  href,
  handleClick,
}: { text: string; href: string; handleClick?: () => void }) {
  return (
    <button
      type="button"
      onClick={handleClick}
      className="cursor-pointer border border-gray-300 py-3 px-6 rounded-sm"
    >
      <a href={href}>
        <span className="font-inter font-medium tracking-tight text-xl capitalize">
          {text}
        </span>
      </a>
    </button>
  );
}

function LinkBlack({
  text,
  href,
  handleClick,
}: { text: string; href: string; handleClick?: () => void }) {
  return (
    <button
      type="button"
      onClick={handleClick}
      className="cursor-pointer bg-black border border-black py-3 px-6 rounded-sm"
    >
      <a href={href}>
        <span className="font-inter font-medium tracking-tight text-xl text-white capitalize">
          {text}
        </span>
      </a>
    </button>
  );
}
