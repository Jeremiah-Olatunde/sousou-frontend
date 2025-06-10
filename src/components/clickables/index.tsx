type PropsLink = {
  href: string;
  text: string;
};

type PropsButton = {
  handleClick: () => void;
  text: string;
};

type PropsClickableLink = PropsLink & { type: "link" };
type PropsClickableButton = PropsButton & { type: "button" };
type PropsClickable = PropsClickableButton | PropsClickableLink;

export function ClickableStone(props: PropsClickable) {
  switch (props.type) {
    case "button":
      return <StoneButton handleClick={props.handleClick} text={props.text} />;
    case "link":
      return <StoneLink href={props.href} text={props.text} />;
  }
}

function StoneButton({ text, handleClick }: PropsButton) {
  return (
    <button
      onClick={handleClick}
      className="text-center cursor-pointer bg-stone-300 rounded-md py-4 px-8"
    >
      <span className="font-inter font-medium text-sm capitalize">{text}</span>
    </button>
  );
}

function StoneLink({ text, href }: PropsLink) {
  return (
    <a
      href={href}
      className="text-center cursor-pointer bg-stone-300 rounded-md py-4 px-8"
    >
      <span className="font-inter font-medium text-sm capitalize">{text}</span>
    </a>
  );
}

export function ClickableWhite(props: PropsClickable) {
  switch (props.type) {
    case "button":
      return <WhiteButton handleClick={props.handleClick} text={props.text} />;
    case "link":
      return <WhiteLink href={props.href} text={props.text} />;
  }
}

function WhiteButton({ text, handleClick }: PropsButton) {
  return (
    <button
      className="cursor-pointer border border-gray-300 py-3 px-6 rounded-sm"
      onClick={handleClick}
    >
      <span className="font-inter font-medium tracking-tight text-xl capitalize">
        {text}
      </span>
    </button>
  );
}

function WhiteLink({ text, href }: PropsLink) {
  return (
    <a
      className="text-center cursor-pointer border border-gray-300 py-3 px-6 rounded-sm"
      href={href}
    >
      <span className="font-inter font-medium tracking-tight text-xl capitalize">
        {text}
      </span>
    </a>
  );
}

export function ClickableBlack(props: PropsClickable) {
  switch (props.type) {
    case "button":
      return <BlackButton handleClick={props.handleClick} text={props.text} />;
    case "link":
      return <BlackLink href={props.href} text={props.text} />;
  }
}

function BlackLink({ text, href }: PropsLink) {
  return (
    <a
      className="text-center cursor-pointer bg-black border border-black py-3 px-6 rounded-sm"
      href={href}
    >
      <span className="font-inter font-medium tracking-tight text-xl text-white capitalize">
        {text}
      </span>
    </a>
  );
}

function BlackButton({ text, handleClick }: PropsButton) {
  return (
    <button
      className="cursor-pointer bg-black border border-black py-3 px-6 rounded-sm"
      onClick={handleClick}
    >
      <span className="font-inter font-medium tracking-tight text-xl text-white capitalize">
        {text}
      </span>
    </button>
  );
}
