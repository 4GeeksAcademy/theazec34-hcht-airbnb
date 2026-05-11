import type { Listing } from "@/types/listing";

type RoomHeaderProps = {
  listing: Listing;
};

export const RoomHeader = ({ listing }: RoomHeaderProps) => (
  <section className="space-y-3">
    <p className="text-sm font-semibold text-rose-500">{listing.location}</p>
    <h1 className="text-3xl font-bold tracking-tight md:text-5xl">
      {listing.title}
    </h1>
    <div className="flex flex-wrap gap-3 text-sm font-medium text-zinc-600">
      <span>Star {listing.rating}</span>
      <span>{listing.reviews} resenas</span>
      <span>Hasta {listing.guests} huespedes</span>
    </div>
  </section>
);
