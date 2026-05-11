import type { Category } from "@/types/listing";

type CategoryFiltersProps = {
  categories: Category[];
  activeCategory: string;
  onCategoryChange: (category: string) => void;
};

export const CategoryFilters = ({
  categories,
  activeCategory,
  onCategoryChange,
}: CategoryFiltersProps) => (
  <section className="border-b border-zinc-200 bg-white">
    <div className="mx-auto flex max-w-6xl gap-3 overflow-x-auto px-5 py-4">
      {categories.map((category) => {
        const isActive = category.id === activeCategory;

        return (
          <button
            key={category.id}
            onClick={() => onCategoryChange(category.id)}
            className={`min-w-fit rounded-2xl border px-4 py-3 text-left transition ${
              isActive
                ? "border-zinc-950 bg-zinc-950 text-white"
                : "border-zinc-200 text-zinc-600 hover:border-zinc-400"
            }`}
          >
            <span className="block text-xs font-semibold">{category.icon}</span>
            <span className="text-sm font-medium">{category.label}</span>
          </button>
        );
      })}
    </div>
  </section>
);
