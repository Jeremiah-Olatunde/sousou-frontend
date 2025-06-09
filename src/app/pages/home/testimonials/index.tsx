import {
  ChevronLeft as IconChevronLeft,
  ChevronRight as IconChevronRight,
} from "lucide-react";

export function Testimonials() {
  return (
    <section className="px-24 flex flex-col gap-18">
      <header className="flex flex-col gap-4">
        <h2 className="capitalize font-sora font-bold tracking-tight text-4xl text-center">
          Testimonials
        </h2>
        <p className="font-inter tracking-tight text-xl text-gray-500 text-center">
          Loved by thousands
        </p>
      </header>

      <div className="flex flex-col">
        <div className="flex">
          <button
            type="button"
            className="flex justify-center items-center cursor-pointer"
          >
            <IconChevronLeft className="text-gray-300 size-10" />
          </button>

          <div className="grow flex items-center justify-between p-8 gap-10">
            <div className="bg-gray-50 border border-gray-300 h-110 w-[30%]"></div>
            <div className="bg-gray-100 border border-gray-300 h-120 grow"></div>
            <div className="bg-gray-50 border border-gray-300 h-110 w-[30%]"></div>
          </div>

          <button
            type="button"
            className="flex justify-center items-center cursor-pointer"
          >
            <IconChevronRight className="text-gray-500 size-10" />
          </button>
        </div>

        <div className="flex justify-center items-center gap-2">
          <button
            type="button"
            className="cursor-pointer h-1 w-5 bg-gray-300"
          />
          <button type="button" className="cursor-pointer h-1 w-5 bg-black" />
          <button
            type="button"
            className="cursor-pointer h-1 w-5 bg-gray-300"
          />
          <button
            type="button"
            className="cursor-pointer h-1 w-5 bg-gray-300"
          />
        </div>
      </div>
    </section>
  );
}
