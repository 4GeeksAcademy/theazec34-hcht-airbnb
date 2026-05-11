"use client";

import { useMemo, useState } from "react";
import { TopNav } from "@/components/TopNav";
import { listings } from "@/data/listings";
import { ListingCard } from "./ListingCard";
import { MapPlaceholder } from "./MapPlaceholder";

export const CatalogListings = () => {
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");

  const sortedListings = useMemo(() => {
    return [...listings].sort((first, second) => {
      const priceDiff = first.price - second.price;

      return sortOrder === "asc" ? priceDiff : -priceDiff;
    });
  }, [sortOrder]);

  return (
    <>
      <TopNav />
      <main className="mx-auto w-full max-w-6xl px-5 py-8">
        <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-semibold text-rose-500">Catalogo</p>
            <h1 className="text-3xl font-bold">
              {sortedListings.length} alojamientos disponibles
            </h1>
          </div>

          <label className="flex flex-col gap-2 text-sm font-semibold">
            Ordenar por precio
            <select
              value={sortOrder}
              onChange={(event) => setSortOrder(event.target.value as "asc" | "desc")}
              className="h-11 rounded-full border border-zinc-200 bg-white px-4"
            >
              <option value="asc">Ascendente</option>
              <option value="desc">Descendente</option>
            </select>
          </label>
        </div>

        <section className="grid gap-8 md:grid-cols-[minmax(0,1fr)_360px]">
          <div className="grid gap-6 sm:grid-cols-2">
            {sortedListings.map((listing) => (
              <ListingCard key={listing.id} listing={listing} />
            ))}
          </div>
          <MapPlaceholder />
        </section>
      </main>
    </>
  );
};
