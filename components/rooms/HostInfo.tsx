import type { Listing } from "@/types/listing";

type HostInfoProps = {
  listing: Listing;
};

export const HostInfo = ({ listing }: HostInfoProps) => (
  <section className="flex items-center gap-4 rounded-3xl border border-zinc-200 p-5">
    <div className="grid size-14 place-items-center rounded-full bg-zinc-950 text-lg font-bold text-white">
      {listing.hostName.charAt(0)}
    </div>
    <div>
      <h2 className="text-lg font-bold">Anfitrion: {listing.hostName}</h2>
      <p className="text-sm text-zinc-500">
        {listing.hostYears} anos recibiendo viajeros.
      </p>
    </div>
  </section>
);
