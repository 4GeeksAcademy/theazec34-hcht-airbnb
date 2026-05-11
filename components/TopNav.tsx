import Link from "next/link";

type TopNavProps = {
  searchValue?: string;
  onSearchChange?: (value: string) => void;
};

export const TopNav = ({ searchValue = "", onSearchChange }: TopNavProps) => (
  <header className="sticky top-0 z-20 border-b border-zinc-200 bg-white/95 backdrop-blur">
    <div className="mx-auto flex max-w-6xl flex-col gap-4 px-5 py-4 md:flex-row md:items-center md:justify-between">
      <Link href="/" className="flex items-center gap-2 text-xl font-bold">
        <span className="grid size-9 place-items-center rounded-full bg-rose-500 text-white">
          A
        </span>
        airbnb
      </Link>

      <label className="flex h-12 flex-1 items-center rounded-full border border-zinc-200 px-4 shadow-sm md:max-w-md">
        <span className="text-sm text-zinc-500">Buscar</span>
        <input
          value={searchValue}
          onChange={(event) => onSearchChange?.(event.target.value)}
          placeholder="Destino, titulo o ciudad"
          className="ml-3 min-w-0 flex-1 bg-transparent text-sm outline-none"
        />
      </label>

      <nav className="flex items-center justify-between gap-3 text-sm font-semibold">
        <Link href="/catalog" className="rounded-full px-4 py-2 hover:bg-zinc-100">
          Catalogo
        </Link>
        <button className="rounded-full border border-zinc-200 px-4 py-2">
          Menu
        </button>
      </nav>
    </div>
  </header>
);
