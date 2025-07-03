import { BellDot, ChevronDown } from "lucide-react";

export function Topbar({ children }: { children: React.ReactNode }) {
  return (
    <section className="h-20 border-b border-stone-100 flex items-center px-5">
      {children}
    </section>
  );
}

export function Greetings({ name }: { name: string }) {
  return (
    <span className="font-inter font-bold text-2xl capitalize">
      welcome, {name}!
    </span>
  );
}

export function DisplayDate() {
  return (
    <span className="font-inter font-medium text-stone-500 text-sm capitalize">
      Today is {formatDate(new Date())}
    </span>
  );
}

export function ButtonNotification() {
  return (
    <button type="button" className="cursor-pointer">
      <BellDot className="size-5 text-stone-500" />
    </button>
  );
}

export function ButtonProfile({ handleClick }: { handleClick: () => void }) {
  return (
    <button
      type="button"
      onClick={handleClick}
      className="cursor-pointer flex items-center gap-2"
    >
      <img
        className="rounded-full size-10 border border-stone-500"
        src="/images/profile-photo.png"
      />
      <ChevronDown className="size-5 text-stone-500" />
    </button>
  );
}

export function formatDate(date: Date): string {
  const year = "numeric";
  const month = "long";
  const day = "numeric";
  const weekday = "long";

  const dayOfWeek = new Intl.DateTimeFormat("en-US", { weekday }).format(date);

  const formatted = new Intl.DateTimeFormat("en-US", { day, year, month })
    .format(date)
    .replace(",", "");

  return `${dayOfWeek}, ${formatted}`;
}
