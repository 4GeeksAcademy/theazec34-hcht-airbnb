"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { CategoryFilters } from "@/components/CategoryFilters";
import { TopNav } from "@/components/TopNav";
import { categories, listings as listingData } from "@/data/listings";
import type { Listing } from "@/types/listing";
import { ListingCard } from "./ListingCard";
import { LoadingListings } from "./LoadingListings";

export const HomeListings = () => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const [isLoading, setIsLoading] = useState(true);
  const [listings, setListings] = useState<Listing[]>([]);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setListings(listingData);
      setIsLoading(false);
    }, 1000);

    return () => window.clearTimeout(timer);
  }, []);

  const visibleListings = useMemo(() => {
    const query = search.trim().toLowerCase();

    return listings.filter((listing) => {
      const matchesCategory = category === "all" || listing.category === category;
      const text = `${listing.title} ${listing.location}`.toLowerCase();

      return matchesCategory && text.includes(query);
    });
  }, [category, listings, search]);

  return (
    <>
      <TopNav searchValue={search} onSearchChange={setSearch} />
      <CategoryFilters
        categories={categories}
        activeCategory={category}
        onCategoryChange={setCategory}
      />

      <main className="mx-auto w-full max-w-6xl px-5 py-8">
        <section className="mb-8 space-y-3">
          <p className="text-sm font-semibold text-rose-500">
            Alojamientos seleccionados
          </p>
          <h1 className="max-w-2xl text-3xl font-bold tracking-tight md:text-5xl">
            Encuentra una estancia memorable para tu proximo viaje.
          </h1>
          <Link href="/catalog" className="inline-block text-sm font-semibold">
            Ver catalogo completo
          </Link>
        </section>

        {isLoading ? (
          <LoadingListings />
        ) : (
          <section className="grid gap-6 md:grid-cols-3">
            {visibleListings.map((listing) => (
              <ListingCard key={listing.id} listing={listing} />
            ))}
          </section>
        )}
      </main>
    </>
  );
};
