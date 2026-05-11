import type { Category, Listing } from "@/types/listing";

export const categories: Category[] = [
  { id: "all", label: "Todas", icon: "All" },
  { id: "beach", label: "Playa", icon: "Sea" },
  { id: "mansions", label: "Mansiones", icon: "Villa" },
  { id: "trending", label: "Tendencias", icon: "Hot" },
  { id: "cabins", label: "Cabanas", icon: "Wood" },
  { id: "city", label: "Ciudad", icon: "Urban" },
];

export const listings: Listing[] = [
  {
    id: "casa-brisa",
    title: "Casa Brisa frente al mar",
    location: "Tulum, Mexico",
    category: "beach",
    price: 148,
    rating: 4.92,
    reviews: 128,
    hostName: "Lucia",
    hostYears: 6,
    guests: 4,
    coordinates: { lat: 20.211, lng: -87.465 },
    photos: [
      {
        src: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?auto=format&fit=crop&w=1200&q=80",
        alt: "Casa blanca junto al mar con palmeras",
      },
      {
        src: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
        alt: "Playa tropical de arena clara",
      },
      {
        src: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=1200&q=80",
        alt: "Habitacion luminosa de hotel costero",
      },
    ],
    amenities: [
      { icon: "Wifi", label: "Wifi rapido" },
      { icon: "Pool", label: "Piscina privada" },
      { icon: "AC", label: "Aire acondicionado" },
      { icon: "Sea", label: "Vista al mar" },
    ],
  },
  {
    id: "villa-roca",
    title: "Villa Roca con piscina infinita",
    location: "Marbella, Espana",
    category: "mansions",
    price: 310,
    rating: 4.86,
    reviews: 84,
    hostName: "Mateo",
    hostYears: 9,
    guests: 8,
    coordinates: { lat: 36.51, lng: -4.885 },
    photos: [
      {
        src: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1200&q=80",
        alt: "Villa moderna con piscina al atardecer",
      },
      {
        src: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=80",
        alt: "Salon elegante de villa de lujo",
      },
      {
        src: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=80",
        alt: "Dormitorio amplio con ventanales",
      },
    ],
    amenities: [
      { icon: "Chef", label: "Cocina equipada" },
      { icon: "Car", label: "Parking privado" },
      { icon: "Pool", label: "Piscina infinita" },
      { icon: "Gym", label: "Gimnasio" },
    ],
  },
  {
    id: "loft-centro",
    title: "Loft luminoso en el centro",
    location: "Lisboa, Portugal",
    category: "city",
    price: 96,
    rating: 4.78,
    reviews: 203,
    hostName: "Ines",
    hostYears: 4,
    guests: 2,
    coordinates: { lat: 38.722, lng: -9.139 },
    photos: [
      {
        src: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80",
        alt: "Loft urbano con cama y ventanales",
      },
      {
        src: "https://images.unsplash.com/photo-1554995207-c18c203602cb?auto=format&fit=crop&w=1200&q=80",
        alt: "Apartamento moderno con cocina abierta",
      },
      {
        src: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1200&q=80",
        alt: "Sala luminosa de apartamento urbano",
      },
    ],
    amenities: [
      { icon: "Desk", label: "Zona de trabajo" },
      { icon: "Metro", label: "Cerca del metro" },
      { icon: "Wifi", label: "Wifi incluido" },
      { icon: "Coffee", label: "Cafetera" },
    ],
  },
  {
    id: "cabana-norte",
    title: "Cabana nordica junto al bosque",
    location: "Bergen, Noruega",
    category: "cabins",
    price: 122,
    rating: 4.95,
    reviews: 67,
    hostName: "Erik",
    hostYears: 7,
    guests: 5,
    coordinates: { lat: 60.392, lng: 5.322 },
    photos: [
      {
        src: "https://images.unsplash.com/photo-1449158743715-0a90ebb6d2d8?auto=format&fit=crop&w=1200&q=80",
        alt: "Cabana de madera rodeada de bosque",
      },
      {
        src: "https://images.unsplash.com/photo-1518733057094-95b53143d2a7?auto=format&fit=crop&w=1200&q=80",
        alt: "Interior calido de cabana con madera",
      },
      {
        src: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&w=1200&q=80",
        alt: "Casa pequena de madera entre arboles",
      },
    ],
    amenities: [
      { icon: "Fire", label: "Chimenea" },
      { icon: "Trail", label: "Rutas cerca" },
      { icon: "Kitchen", label: "Cocina completa" },
      { icon: "Pet", label: "Acepta mascotas" },
    ],
  },
  {
    id: "atico-trendy",
    title: "Atico trendy con terraza",
    location: "Barcelona, Espana",
    category: "trending",
    price: 184,
    rating: 4.88,
    reviews: 156,
    hostName: "Clara",
    hostYears: 5,
    guests: 3,
    coordinates: { lat: 41.387, lng: 2.168 },
    photos: [
      {
        src: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=80",
        alt: "Atico moderno con terraza y salon",
      },
      {
        src: "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1200&q=80",
        alt: "Cocina moderna en apartamento",
      },
      {
        src: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80",
        alt: "Terraza urbana preparada para cenar",
      },
    ],
    amenities: [
      { icon: "View", label: "Terraza panoramica" },
      { icon: "Wifi", label: "Wifi rapido" },
      { icon: "AC", label: "Climatizacion" },
      { icon: "Lift", label: "Ascensor" },
    ],
  },
  {
    id: "suite-arena",
    title: "Suite Arena a pasos de la playa",
    location: "Mallorca, Espana",
    category: "beach",
    price: 136,
    rating: 4.81,
    reviews: 91,
    hostName: "Nora",
    hostYears: 3,
    guests: 2,
    coordinates: { lat: 39.569, lng: 2.65 },
    photos: [
      {
        src: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80",
        alt: "Resort con piscina junto al mar",
      },
      {
        src: "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80",
        alt: "Suite de hotel con cama blanca",
      },
      {
        src: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=1200&q=80",
        alt: "Habitacion de hotel con luz natural",
      },
    ],
    amenities: [
      { icon: "Sea", label: "Acceso a playa" },
      { icon: "Breakfast", label: "Desayuno" },
      { icon: "AC", label: "Aire acondicionado" },
      { icon: "Wifi", label: "Wifi incluido" },
    ],
  },
];
