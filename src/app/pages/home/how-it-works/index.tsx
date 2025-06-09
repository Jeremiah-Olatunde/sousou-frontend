import { CircleCheck as IconCircleCheck } from "lucide-react";

export function HowItWorks() {
  return (
    <section className="px-24">
      <div className="flex gap-18">
        <div className="basis-2/5 flex flex-col gap-8">
          <header className="flex flex-col gap-4">
            <h2 className="capitalize font-sora font-bold tracking-tight text-4xl">
              how it works
            </h2>
            <p className="font-inter text-xl text-gray-500 tracking-tight ">
              Surely some revelation is at hand, surely the second coming is at
              hand.
            </p>
          </header>

          <div>
            <ul className="flex flex-col gap-2">
              <div className="flex gap-4">
                <HowItWorksItem text="Unlimited meetings" />
                <HowItWorksItem text="Integrate calendars" />
              </div>
              <HowItWorksItem text="AI scheduling and calendar conflicts management" />
            </ul>
          </div>
        </div>

        <ul className="basis-3/5 flex flex-col gap-4">
          <HowItWorksStep
            index={1}
            text="Turning and turning in the widening gyre the falcon cannot hear the falconer."
          />
          <HowItWorksStep
            index={2}
            text="Tell all the truth, but tell it slant. Success in circuit lies. To bright for our infirm delight the truth's superb surprise."
          />
          <HowItWorksStep
            index={3}
            text="Because I could not stop for death he kindly stopped for me. The carraige held but just ourselves and immortality."
          />
        </ul>
      </div>
    </section>
  );
}

function HowItWorksItem({ text }: { text: string }) {
  return (
    <li className="flex gap-2 items-center">
      <IconCircleCheck className="size-6 fill-black stroke-white" />
      <span className="font-inter text-gray-500 tracking-tight">{text}</span>
    </li>
  );
}

function HowItWorksStep({ index, text }: { index: number; text: string }) {
  return (
    <li className="bg-gray-50 rounded-xl px-6 py-8 ">
      <span className="font-inter font-bold tracking-tight text-2xl capitalize">
        step {index} :{" "}
      </span>
      <span className="font-inter text-2xl tracking-tight text-gray-500">
        {text}
      </span>
    </li>
  );
}
