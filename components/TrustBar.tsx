const trustItems = [
  "Licensed & Insured",
  "Same-Day Service Available",
  "Free Quotes",
  "Family & Pet Safe Treatments",
];

export default function TrustBar() {
  return (
    <section className="bg-gray-100 py-4">
      <div className="mx-auto grid max-w-5xl grid-cols-2 gap-3 px-4 md:grid-cols-4">
        {trustItems.map((item) => (
          <div
            key={item}
            className="flex items-center justify-center gap-2 text-center text-sm font-medium text-gray-700"
          >
            <svg
              className="h-5 w-5 flex-shrink-0 text-green-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
            <span>{item}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
