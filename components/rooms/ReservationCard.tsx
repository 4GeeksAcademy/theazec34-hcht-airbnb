"use client";

import { useState } from "react";
import type { Listing } from "@/types/listing";

type ReservationCardProps = {
  listing: Listing;
};

export const ReservationCard = ({ listing }: ReservationCardProps) => {
  const [guests, setGuests] = useState(1);
  const total = listing.price * 2;

  const decreaseGuests = () => {
    setGuests((value) => Math.max(1, value - 1));
  };

  const increaseGuests = () => {
    setGuests((value) => Math.min(listing.guests, value + 1));
  };

  return (
    <aside className="rounded-3xl border border-zinc-200 p-5 shadow-xl md:sticky md:top-28">
      <div className="flex items-end justify-between">
        <p>
          <span className="text-2xl font-bold">${listing.price}</span>
          <span className="text-sm text-zinc-500"> noche</span>
        </p>
        <span className="text-sm font-semibold">Star {listing.rating}</span>
      </div>

      <div className="my-5 rounded-2xl border border-zinc-200 p-4">
        <p className="text-xs font-bold uppercase text-zinc-500">Huespedes</p>
        <div className="mt-3 flex items-center justify-between">
          <button onClick={decreaseGuests} className="size-9 rounded-full border">
            -
          </button>
          <span className="font-semibold">{guests}</span>
          <button onClick={increaseGuests} className="size-9 rounded-full border">
            +
          </button>
        </div>
      </div>

      <button className="w-full rounded-full bg-rose-500 py-3 font-bold text-white">
        Reservar
      </button>
      <p className="mt-4 text-center text-sm text-zinc-500">
        Total estimado para 2 noches: ${total}
      </p>
    </aside>
  );
};
