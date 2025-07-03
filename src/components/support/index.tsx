import { CircleHelp } from "lucide-react";

export function Support() {
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
