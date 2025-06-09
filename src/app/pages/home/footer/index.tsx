import { Copyright } from "lucide-react";

export function Footer() {
  return (
    <section className="p-20 bg-black flex flex-col gap-16">
      <div className="flex gap-28">
        <div className="basis-1/2 flex flex-col gap-8">
          <header className="flex flex-col gap-4">
            <h2 className="font-inter font-black text-6xl text-white tracking-tight">
              SouSou
            </h2>

            <p className="font-inter text-xl text-white tracking-tight">
              We passed the school where children strove, at recess in the ring.
              We passed the fields of gazing grain, we passed the setting sun.
            </p>
          </header>

          <form onSubmit={() => {}}>
            <div className="flex bg-white rounded-xl h-15">
              <input
                className="bg-gray-50 rounded-l-xl basis-3/4 font-inter tracking-tight text-xl capitalize placeholder:text-gray-400 px-5 py-4"
                placeholder="email"
              />
              <input
                type="submit"
                value="subcribe"
                className="font-inter tracking-tight text-xl capitalize basis-1/4"
              />
            </div>
          </form>
        </div>

        <div className="basis-1/2 flex">
          <ul className="basis-1/2 flex flex-col gap-8">
            <h3 className="font-inter text-white font-semibold text-lg capitalize">
              why sousou?
            </h3>

            <li className="font-inter text-white text-lg tracking-tight capitalize">
              pay rent monthly
            </li>

            <li className="font-inter text-white text-lg tracking-tight capitalize">
              find the perfect roommate
            </li>

            <li className="font-inter text-white text-lg tracking-tight capitalize">
              pre-qualify in minutes
            </li>

            <li className="font-inter text-white text-lg tracking-tight capitalize">
              secure & transparent
            </li>

            <li className="font-inter text-white text-lg tracking-tight capitalize">
              smart budgeting
            </li>
          </ul>

          <ul className="basis-1/2 flex flex-col gap-8">
            <h3 className="font-inter text-white font-semibold text-lg capitalize">
              get in touch
            </h3>

            <li className="font-inter text-white text-lg tracking-tight capitalize">
              info@sousou.com
            </li>

            <li className="font-inter text-white text-lg tracking-tight capitalize">
              +234 801 767 7738
            </li>

            <li className="font-inter text-white text-lg tracking-tight capitalize">
              No.199 Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed
            </li>
          </ul>
        </div>
      </div>

      <div className="flex justify-between items-center">
        <div className="flex justify-between items-center gap-20">
          <div className="flex gap-2 items-center">
            <Copyright className="text-white size-4" />
            <span className="font-inter text-white text-sm tracking-tight">
              SouSou Inc, 2025
            </span>
          </div>
          <span className="font-inter text-white text-sm tracking-tight">
            Terms of Service
          </span>
          <span className="font-inter text-white text-sm tracking-tight">
            Privacy Policy
          </span>
        </div>
      </div>
    </section>
  );
}
