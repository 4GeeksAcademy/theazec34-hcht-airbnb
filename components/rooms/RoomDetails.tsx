"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { listings } from "@/data/listings";
import type { Listing } from "@/types/listing";
import { AmenitiesGrid } from "./AmenitiesGrid";
import { HostInfo } from "./HostInfo";
import { ImageGallery } from "./ImageGallery";
import { ReservationCard } from "./ReservationCard";
import { RoomHeader } from "./RoomHeader";

type RoomDetailsProps = {
  id: string;
};

export const RoomDetails = ({ id }: RoomDetailsProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const [listing, setListing] = useState<Listing | null>(null);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setListing(listings.find((item) => item.id === id) ?? null);
      setIsLoading(false);
    }, 1000);

    return () => window.clearTimeout(timer);
  }, [id]);

  if (isLoading) {
    return (
      <main className="mx-auto w-full max-w-6xl px-5 py-8">
        <div className="h-96 animate-pulse rounded-3xl bg-zinc-200" />
      </main>
    );
  }

  if (!listing) {
    return (
      <main className="mx-auto w-full max-w-6xl px-5 py-8">
        <Link href="/catalog" className="font-semibold">
          Volver al catalogo
        </Link>
        <h1 className="mt-6 text-3xl font-bold">Alojamiento no encontrado</h1>
      </main>
    );
  }

  return (
    <main className="mx-auto w-full max-w-6xl space-y-8 px-5 py-8">
      <Link href="/catalog" className="text-sm font-semibold">
        Catalogo / {listing.title}
      </Link>
      <RoomHeader listing={listing} />
      <ImageGallery listing={listing} />

      <section className="grid gap-8 md:grid-cols-[minmax(0,1fr)_360px]">
        <div className="space-y-8">
          <HostInfo listing={listing} />
          <AmenitiesGrid amenities={listing.amenities} />
        </div>
        <ReservationCard listing={listing} />
      </section>
    </main>
  );
};
