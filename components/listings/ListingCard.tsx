import Link from "next/link";
import Image from "next/image";
import type { Listing } from "@/types/listing";

type ListingCardProps = {
  listing: Listing;
};

export const ListingCard = ({ listing }: ListingCardProps) => (
  <Link href={`/rooms/${listing.id}`} className="group block">
    <article className="overflow-hidden rounded-3xl bg-white">
      <div className="relative aspect-[4/3] overflow-hidden rounded-3xl bg-zinc-100">
        <Image
          src={listing.photos[0].src}
          alt={listing.photos[0].alt}
          fill
          sizes="(min-width: 768px) 33vw, 100vw"
          className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent" />
        <span className="absolute left-4 top-4 rounded-full bg-white px-3 py-1 text-xs font-semibold shadow">
          {listing.location}
        </span>
        <span className="absolute bottom-4 right-4 rounded-full bg-white/90 px-3 py-1 text-xs font-medium">
          {listing.photos.length} fotos
        </span>
      </div>
      <div className="space-y-1 px-1 py-3">
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-semibold text-zinc-950 group-hover:underline">
            {listing.title}
          </h3>
          <span className="text-sm font-medium">Star {listing.rating}</span>
        </div>
        <p className="text-sm text-zinc-500">{listing.reviews} resenas</p>
        <p className="text-sm">
          <span className="font-semibold">${listing.price}</span> noche
        </p>
      </div>
    </article>
  </Link>
);
