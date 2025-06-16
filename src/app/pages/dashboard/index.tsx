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
} from "lucide-react";
import { Logo } from "../../../components/logo";

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
              <ul className="flex flex-col gap-2">
                <li>
                  <button className="cursor-pointer w-full flex gap-2 items-center p-2 bg-stone-100 border-l-2 border-stone-300">
                    <House className="size-5 text-stone-600" />
                    <span className="grow-1 capitalize font-inter font-semibold text-sm text-left text-stone-600">
                      dashboard
                    </span>
                  </button>
                </li>

                <li>
                  <button className="cursor-pointer w-full flex gap-2 items-center p-2">
                    <Landmark className="size-5 text-stone-600" />
                    <span className="grow-1 capitalize font-inter font-semibold text-sm text-left text-stone-600">
                      loan service
                    </span>
                    <span className="">
                      <ChevronDown className="text-stone-600 size-5" />
                    </span>
                  </button>

                  <ul className="pl-10">
                    <li>
                      <button className="cursor-pointer w-full flex gap-2 items-center p-2">
                        <PiggyBank className="size-4 text-stone-600" />
                        <span className="grow-1 capitalize font-inter font-semibold text-sm text-left text-stone-600">
                          Apply for Loan
                        </span>
                      </button>
                    </li>
                    <li>
                      <button className="cursor-pointer w-full flex gap-2 items-center p-2">
                        <CircleCheckBig className="size-4 text-stone-600" />
                        <span className="grow-1 capitalize font-inter font-semibold text-sm text-left text-stone-600">
                          Pre-Qualification
                        </span>
                      </button>
                    </li>
                    <li>
                      <button className="cursor-pointer w-full flex gap-2 items-center p-2">
                        <CalendarDays className="size-4 text-stone-600" />
                        <span className="grow-1 capitalize font-inter font-semibold text-sm text-left text-stone-600">
                          Loan Repayment Plan
                        </span>
                      </button>
                    </li>
                  </ul>
                </li>

                <li>
                  <button className="cursor-pointer w-full flex gap-2 items-center p-2">
                    <UsersRound className="size-5 text-stone-600" />
                    <span className="grow-1 capitalize font-inter font-semibold text-sm text-left text-stone-600">
                      roommate matching
                    </span>
                    <span className="">
                      <ChevronDown className="text-stone-600 size-5" />
                    </span>
                  </button>

                  <ul className="pl-10">
                    <li>
                      <button className="cursor-pointer w-full flex gap-2 items-center p-2">
                        <Sparkles className="size-4 text-stone-600" />
                        <span className="grow-1 capitalize font-inter font-semibold text-sm text-left text-stone-600">
                          Coming soon
                        </span>
                      </button>
                    </li>
                  </ul>
                </li>
              </ul>
            </nav>
          </div>
          <Support />
        </div>
      </div>
    </section>
  );
}

function Support() {
  return (
    <div className="bg-stone-100 rounded-4xl w-full flex flex-col gap-4 p-6">
      <div className="flex justify-center items-center">
        <CircleHelp className="size-10 text-stone-600" />
      </div>
      <p className="font-inter text-sm text-center text-stone-600 tracking-tight">
        Get quick assistance or reach out to our support team if you have any
        questions.
      </p>

      <a
        className="cursor-pointer bg-stone-700 border border-stone-700 py-2 px-4 rounded-sm w-full text-center"
        href="#"
      >
        <span className="font-inter font-medium tracking-tight text-sm text-white capitalize">
          get support
        </span>
      </a>
    </div>
  );
}
