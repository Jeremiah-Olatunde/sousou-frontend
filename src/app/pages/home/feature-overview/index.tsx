import {
  PiggyBank as IconPiggyBank,
  UsersRound as IconUsersRound,
  type LucideIcon,
} from "lucide-react";

export function FeatureOverview() {
  return (
    <section className="px-24 flex flex-col gap-18">
      <header className="flex flex-col gap-4">
        <h2 className="capitalize font-sora font-bold tracking-tight text-4xl text-center">
          Feature Overview
        </h2>
        <p className="font-inter text-xl text-gray-500 text-center tracking-tight ">
          Surely some revelation is at hand, surely the second coming is at
          hand.
        </p>
      </header>

      <div className="flex gap-15 items-center justify-between">
        <CardFeature
          icon={IconPiggyBank}
          title="loan services"
          text=" Apply for a loan, get pre-qualified and repay monthly while your landlord receives full payment upfront."
        />
        <CardFeature
          icon={IconUsersRound}
          title="roommate matching"
          text="Find compatible roommates based on shared interests, hobbies and housing preferences."
        />
      </div>
    </section>
  );
}

function CardFeature({
  icon: Icon,
  title,
  text,
}: { icon: LucideIcon; title: string; text: string }) {
  return (
    <div className="flex flex-col items-center gap-4">
      <div className="">
        <Icon className="size-16 text-gray-300" />
      </div>

      <h3 className="font-inter font-medium text-3xl capitalize tracking-tight">
        {title}
      </h3>

      <p className="font-inter font-light text-2xl text-gray-500 text-center">
        {text}
      </p>

      <ButtonLink text="learn more" href="#" />
    </div>
  );
}

function ButtonLink({ text, href }: { text: string; href: string }) {
  return (
    <a
      href={href}
      className="font-inter text-xl underline text-blue-300 capitalize"
    >
      {text}
    </a>
  );
}
