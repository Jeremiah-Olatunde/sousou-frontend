import { MoveRight as IconMoveRight } from "lucide-react";

export function FromOurBlog() {
  return (
    <section className="px-24 flex flex-col gap-18">
      <header className="flex flex-col gap-4">
        <h2 className="capitalize font-sora font-bold tracking-tight text-4xl text-center">
          from our blog
        </h2>
        <p className="font-inter text-xl text-gray-500 text-center tracking-tight">
          For only gossamer my gown, my tippet only tulle
        </p>
      </header>

      <div className="flex justify-between items-center gap-8">
        <BlogItem
          title="how to find rentals in abuja"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis"
        />
        <BlogItem
          title="how to find rentals in abuja"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis"
        />
        <BlogItem
          title="how to find rentals in abuja"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis"
        />
      </div>
    </section>
  );
}

function BlogItem({ title, text }: { title: string; text: string }) {
  return (
    <article className="flex flex-col gap-6 items-start">
      <div className="aspect-[1.8] bg-gray-50 border border-gray-300 w-full" />
      <header className="flex flex-col gap-2">
        <h1 className="font-inter font-medium text-2xl capitalize tracking-tight">
          {title}
        </h1>
        <p className="font-inter font-light text-xl text-gray-500 tracking-tight">
          {text}
        </p>
      </header>
      <ButtonLink text="read more" href="#" />
    </article>
  );
}

function ButtonLink({ text, href }: { text: string; href: string }) {
  return (
    <a href={href} className="cursor-pointer flex gap-4 justify-between">
      <span className="font-inter underline text-stone-400 capitalize">
        {text}
      </span>
      <IconMoveRight className="text-stone-400" />
    </a>
  );
}
