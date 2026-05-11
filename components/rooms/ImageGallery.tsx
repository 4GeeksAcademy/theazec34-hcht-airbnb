"use client";

import { useState } from "react";
import Image from "next/image";
import type { Listing } from "@/types/listing";

type ImageGalleryProps = {
  listing: Listing;
};

export const ImageGallery = ({ listing }: ImageGalleryProps) => {
  const [photoIndex, setPhotoIndex] = useState(0);
  const currentPhoto = listing.photos[photoIndex];

  const goToPrevious = () => {
    setPhotoIndex((index) =>
      index === 0 ? listing.photos.length - 1 : index - 1,
    );
  };

  const goToNext = () => {
    setPhotoIndex((index) =>
      index === listing.photos.length - 1 ? 0 : index + 1,
    );
  };

  return (
    <section className="overflow-hidden rounded-3xl bg-zinc-100">
      <div className="relative aspect-[4/3] md:aspect-[16/7]">
        <Image
          src={currentPhoto.src}
          alt={currentPhoto.alt}
          fill
          sizes="100vw"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />

        <div className="absolute left-5 top-5 rounded-full bg-white px-4 py-2 text-sm font-semibold text-zinc-700 shadow">
          Galeria {photoIndex + 1} de {listing.photos.length}
        </div>

        <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between gap-3">
          <button
            onClick={goToPrevious}
            className="rounded-full bg-white px-4 py-2 text-sm font-semibold shadow"
          >
            Anterior
          </button>
          <button
            onClick={goToNext}
            className="rounded-full bg-zinc-950 px-4 py-2 text-sm font-semibold text-white shadow"
          >
            Siguiente
          </button>
        </div>
      </div>
    </section>
  );
};
