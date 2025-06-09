export function Hero() {
  return (
    <section className="px-24 flex flex-col gap-20">
      <div className="flex flex-col gap-4">
        <span className="font-playfair text-6xl text-center">
          Find a Home, Pay Monthly, Live Smarter.
        </span>
        <span className="font-inter text-4xl text-center text-gray-700">
          Affordable housing, made simple. Get a home without paying a full
          year’s rent upfront.
        </span>
      </div>

      <div className="flex flex-col gap-14">
        <span className="font-inter text-2xl text-gray-700 text-center">
          What location do you want to live?
        </span>
        <div className="flex justify-between items-center">
          <BoxLocation />
          <BoxLocation />
          <BoxLocation />
          <BoxLocation />
        </div>
      </div>
    </section>
  );
}

function BoxLocation() {
  return (
    <div className="bg-gray-50 border border-gray-300 rounded-4xl aspect-square h-64"></div>
  );
}
