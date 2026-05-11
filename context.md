# Mini-brief de interfaz

La plataforma replica una experiencia tipo Airbnb para que una persona pueda descubrir alojamientos, comparar resultados y ver el detalle de una habitacion antes de reservar. La interfaz se construye mobile-first: a 375px se muestra una sola columna y desde 768px se expanden las cuadriculas y el mapa lateral.

## Paginas

- Home (`/`): muestra la barra superior con logo, buscador y menu de usuario; una fila de categorias; y una cuadricula de alojamientos. El buscador filtra las tarjetas en tiempo real y las categorias guardan la seleccion activa.
- Catalogo (`/catalog`): reutiliza las tarjetas de alojamiento, muestra el numero de resultados, permite ordenar por precio ascendente o descendente y reserva un area de mapa en movil debajo de la lista y en escritorio a la derecha.
- Detalle (`/rooms/[id]`): carga una habitacion por el `id` de la URL, muestra galeria con controles anterior/siguiente, cabecera, anfitrion, amenities y una tarjeta de reserva con contador de huespedes.

## Componentes principales

- `TopNav`: logo, campo de busqueda y accesos de usuario.
- `CategoryFilters`: filtros horizontales por categoria.
- `ListingCard`: tarjeta reutilizable con placeholder visual, titulo, precio y rating.
- `HomeListings`: estado local para busqueda, categoria activa y carga simulada.
- `CatalogListings`: estado local para ordenacion y resultados ordenados.
- `MapPlaceholder`: placeholder visual del mapa.
- `ImageGallery`: galeria de fotos simuladas con indice activo.
- `HostInfo`, `AmenitiesGrid` y `ReservationCard`: secciones enfocadas del detalle.

## Usuario y objetivo

El usuario es una persona que busca alojamiento vacacional. Quiere explorar opciones rapido, filtrar por texto o categoria, ordenar por precio y confirmar detalles de una habitacion concreta antes de iniciar una reserva.

## Especificaciones derivadas de la referencia visual

- El layout usa tarjetas redondeadas, espacios amplios, texto negro sobre blanco y acentos en rojo Airbnb.
- Las imagenes se representan con placeholders de color para evitar depender de assets externos.
- La navegacion interna usa `Link` de Next.js para evitar recargas completas.
- Los estados de carga se simulan con `useEffect` y `setTimeout`, mostrando indicadores antes de renderizar datos.
