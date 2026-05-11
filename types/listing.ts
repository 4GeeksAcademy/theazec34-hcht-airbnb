export type Category = {
  id: string;
  label: string;
  icon: string;
};

export type Amenity = {
  icon: string;
  label: string;
};

export type ListingPhoto = {
  src: string;
  alt: string;
};

export type Listing = {
  id: string;
  title: string;
  location: string;
  category: string;
  price: number;
  rating: number;
  reviews: number;
  hostName: string;
  hostYears: number;
  guests: number;
  coordinates: {
    lat: number;
    lng: number;
  };
  photos: ListingPhoto[];
  amenities: Amenity[];
};
