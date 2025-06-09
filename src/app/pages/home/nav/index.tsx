export function Nav() {
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

        <div className="flex gap-3">
          <ButtonWhite text="log in" />
          <ButtonBlack text="sign up" />
        </div>
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

function ButtonWhite({
  text,
  handleClick,
}: { text: string; handleClick?: () => void }) {
  return (
    <button
      type="button"
      onClick={handleClick}
      className="cursor-pointer border border-gray-300 py-3 px-6 rounded-sm"
    >
      <span className="font-inter font-medium tracking-tight text-xl capitalize">
        {text}
      </span>
    </button>
  );
}

function ButtonBlack({
  text,
  handleClick,
}: { text: string; handleClick?: () => void }) {
  return (
    <button
      type="button"
      onClick={handleClick}
      className="cursor-pointer bg-black border border-black py-3 px-6 rounded-sm"
    >
      <span className="font-inter font-medium tracking-tight text-xl text-white capitalize">
        {text}
      </span>
    </button>
  );
}
