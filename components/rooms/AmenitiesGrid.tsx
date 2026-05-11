import type { Amenity } from "@/types/listing";

type AmenitiesGridProps = {
  amenities: Amenity[];
};

export const AmenitiesGrid = ({ amenities }: AmenitiesGridProps) => (
  <section className="space-y-4">
    <h2 className="text-2xl font-bold">Servicios incluidos</h2>
    <div className="grid gap-3 sm:grid-cols-2">
      {amenities.map((amenity) => (
        <div
          key={amenity.label}
          className="flex items-center gap-3 rounded-2xl border border-zinc-200 p-4"
        >
          <span className="text-sm font-bold text-rose-500">{amenity.icon}</span>
          <span className="text-sm font-medium">{amenity.label}</span>
        </div>
      ))}
    </div>
  </section>
);
