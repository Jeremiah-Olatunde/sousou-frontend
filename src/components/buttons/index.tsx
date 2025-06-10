export function ButtonStone({
  text,
  handleClick,
}: { text: string; handleClick: () => void }) {
  return (
    <button
      onClick={handleClick}
      className="cursor-pointer bg-stone-300 rounded-md py-4 px-8"
    >
      <span className="font-inter font-medium text-sm capitalize">{text}</span>
    </button>
  );
}

export function LinkWhite({ text, href }: { text: string; href: string }) {
  return (
    <a
      className="cursor-pointer border border-gray-300 py-3 px-6 rounded-sm"
      href={href}
    >
      <span className="font-inter font-medium tracking-tight text-xl capitalize">
        {text}
      </span>
    </a>
  );
}

export function LinkBlack({ text, href }: { text: string; href: string }) {
  return (
    <a
      className="cursor-pointer bg-black border border-black py-3 px-6 rounded-sm"
      href={href}
    >
      <span className="font-inter font-medium tracking-tight text-xl text-white capitalize">
        {text}
      </span>
    </a>
  );
}
