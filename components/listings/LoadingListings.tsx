export const LoadingListings = () => (
  <div className="mx-auto grid max-w-6xl gap-6 px-5 py-8 md:grid-cols-3">
    {[0, 1, 2].map((item) => (
      <div key={item} className="animate-pulse space-y-3">
        <div className="aspect-[4/3] rounded-3xl bg-zinc-200" />
        <div className="h-4 w-3/4 rounded bg-zinc-200" />
        <div className="h-4 w-1/2 rounded bg-zinc-100" />
      </div>
    ))}
  </div>
);
