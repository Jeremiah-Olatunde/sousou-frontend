import {
  BanknoteArrowUp,
  ChevronRight,
  ContactRound,
  PiggyBank,
  UsersRound,
  type LucideIcon,
} from "lucide-react";

export function DashboardHome() {
  return (
    <section>
      <div className="flex flex-col gap-8">
        <CompleteYourProfile />
        <div className="flex gap-8">
          <div className="basis-1/2 flex flex-col gap-4">
            <ButtonRectangle text="Complete your profile" />
            <ButtonRectangle text="Apply for a loan" />
            <ButtonRectangle text="New matches available" />
          </div>
          <div className="basis-1/2 grid grid-rows-2 grid-cols-2 gap-4">
            <ButtonSquare text="Find a Roommate" icon={UsersRound} />
            <ButtonSquare text="Apply for Loan" icon={PiggyBank} />
            <ButtonSquare text="My Matches" icon={ContactRound} />
            <ButtonSquare text="Repayment Status" icon={BanknoteArrowUp} />
          </div>
        </div>
      </div>
    </section>
  );
}

function CompleteYourProfile() {
  return (
    <Button handleClick={() => {}}>
      <div className="flex flex-col gap-4 py-16 px-5">
        <span className="font-inter font-semibold text-xl text-stone-700">
          Complete your profile to unlock all features
        </span>
        <div className="flex gap-4  items-center justify-center">
          <div className="bg-stone-50 rounded-s-full rounded-e-full h-3 grow flex">
            <span className="bg-stone-300 rounded-s-full rounded-e-full h-full w-1/2" />
          </div>
          <span className="font-inter text-sm font-semibold">50%</span>
        </div>
      </div>
    </Button>
  );
}

function ButtonRectangle({ text }: { text: string }) {
  return (
    <Button handleClick={() => {}}>
      <div className="py-8 px-5 flex gap-2 items-center">
        <span className="grow font-inter text-lg font-medium text-stone-600">
          {text}
        </span>
        <ChevronRight className="text-stone-600 size-6" />
      </div>
    </Button>
  );
}

function ButtonSquare({
  text,
  icon: Icon,
}: {
  text: string;
  icon: LucideIcon;
}) {
  return (
    <Button handleClick={() => {}}>
      <div className="w-full h-full flex flex-col gap-2 justify-center items-center ">
        <div className="p-3 flex justify-center items-center bg-stone-100 rounded-lg aspect-square">
          <Icon className="text-stone-600 size-6" />
        </div>
        <span className="font-inter font-medium text-stone-600 text-sm">
          {text}
        </span>
      </div>
    </Button>
  );
}

function Button({
  children,
  handleClick,
}: {
  children: React.ReactNode;
  handleClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={handleClick}
      className="border border-stone-100 rounded-xl text-left cursor-pointer"
    >
      {children}
    </button>
  );
}
