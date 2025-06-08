import { invert } from "fp-ts-std/Boolean";
import { Plus as IconPlus } from "lucide-react";
import { useState } from "react";

export function FAQs() {
  return (
    <section className="px-24 flex flex-col gap-18">
      <header className="flex flex-col gap-4">
        <h2 className="capitalize font-sora font-bold tracking-tight text-4xl text-center">
          FAQs
        </h2>
        <p className="font-inter tracking-tight text-xl text-gray-500 text-center">
          Find answers to frequently asked questions.
        </p>
      </header>

      <div className="flex flex-col gap-5">
        <FAQ
          open
          question="Mere anarchy is loosed upon the world"
          answer="As lightning to the children eased with explanation kind, the truth must dazzle gradually or every man be blind"
        />

        <FAQ
          question="The best lack all conviction"
          answer="Some questions were never meant to be answered"
        />

        <FAQ
          question="The center cannot hold"
          answer="Some questions were never meant to be answered"
        />

        <FAQ
          question="The darkness drops again"
          answer="Some questions were never meant to be answered"
        />
      </div>
    </section>
  );
}

function FAQ({
  answer,
  question,
  open,
}: {
  answer: string;
  question: string;
  open?: boolean;
}) {
  const [openInternal, setOpenInternal] = useState(open ?? false);

  return (
    <div className="flex flex-col gap-5 border border-gray-300 rounded-lg p-6">
      <div className="flex justify-between items-center">
        <span className="font-inter font-semibold tracking-tight text-2xl">
          {question}?
        </span>
        <button
          type="button"
          className="cursor-pointer"
          onClick={() => setOpenInternal(invert)}
        >
          <IconPlus className="size-5" />
        </button>
      </div>
      {openInternal && (
        <p className="font-inter text-xl text-gray-500 tracking-tight">
          {answer}
        </p>
      )}
    </div>
  );
}
