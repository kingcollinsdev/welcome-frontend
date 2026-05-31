import type { Item } from "../types/item";
import InventoryCard from "../components/InventoryCard";
import InventoryTable from "../components/InventoryTable";

type InventoryProps = {
  items: Item[];
  isLoading: boolean;
  errorMessage: string;
  searchTerm: string;
  setSearchTerm: (value: string) => void;
  getStatus: (item: Item) => string;
  onDelete: (id: number) => void;
  onIncrease: (id: number) => void;
  onDecrease: (id: number) => void;
  onEdit: (item: Item) => void;
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
};

export default function Inventory({
  items,
  isLoading,
  errorMessage,
  searchTerm,
  setSearchTerm,
  getStatus,
  onDelete,
  onIncrease,
  onDecrease,
  onEdit,
  selectedCategory,
  setSelectedCategory,
}: InventoryProps) {
  const categories = [
    "All",
    "Cards",
    "Communion",
    "Stationery",
    "Badges",
    "Welcome Desk",
    "Forms",
    "Refreshments",
  ];

  return (
    <section className="space-y-8">
      <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <p className="mb-3 text-sm font-black uppercase tracking-tight">
            Team Supplies
          </p>

          <h2 className="poster-title text-[4.5rem] uppercase leading-[0.9] md:text-[6rem]">
            Inventory
          </h2>

          <p className="mt-4 max-w-md text-lg font-medium text-black/65">
            Search, filter, update, and manage everything the team
            needs.
          </p>
        </div>

        <div className="rounded-[28px] bg-[#f7b718] p-5 lg:w-[320px]">
          <p className="text-sm font-black uppercase text-black/70">
            Quick View
          </p>

          <p className="mt-3 text-5xl font-black leading-none">
            {items.length}
          </p>

          <p className="mt-2 text-sm font-medium text-black/70">
            Items currently shown after filtering.
          </p>
        </div>
      </div>

      <div className="app-panel space-y-5 p-5 md:p-6">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <input
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
            placeholder="Search items..."
            className="w-full rounded-2xl border border-black/10 bg-[#fff8eb] px-4 py-4 text-sm font-medium outline-none transition focus:border-[#f7b718] lg:max-w-md"
          />

          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`rounded-full px-4 py-3 text-xs font-black uppercase tracking-wide transition ${
                  selectedCategory === category
                    ? "bg-[#111111] text-white"
                    : "bg-white/70 text-black/60 hover:bg-[#f7b718] hover:text-black"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>

      {errorMessage ? (
        <div className="rounded-[28px] bg-[#e73131] p-8 text-white">
          <p className="text-sm font-black uppercase tracking-[0.2em]">
            System Alert
          </p>

          <h3 className="mt-3 text-4xl font-black uppercase leading-none">
            Unable <br />
            To Load.
          </h3>

          <p className="mt-4 max-w-md text-sm font-medium text-white/80">
            {errorMessage}
          </p>
        </div>
      ) : isLoading ? (
        <div className="app-panel flex min-h-55 items-center justify-center p-10">
          <div className="text-center">
            <p className="text-5xl">📦</p>

            <h3 className="mt-4 text-2xl font-black uppercase">
              Loading Inventory
            </h3>

            <p className="mt-2 text-sm font-medium text-black/55">
              Preparing the supplies...
            </p>
          </div>
        </div>
      ) : items.length === 0 ? (
        <div className="app-panel flex min-h-55 items-center justify-center p-10">
          <div className="text-center">
            <p className="text-5xl">✨</p>

            <h3 className="mt-4 text-2xl font-black uppercase">
              No Items Found
            </h3>

            <p className="mt-2 text-sm font-medium text-black/55">
              Try changing your search or category filters.
            </p>
          </div>
        </div>
      ) : (
        <>
          <InventoryTable
            items={items}
            getStatus={getStatus}
            onDelete={onDelete}
            onIncrease={onIncrease}
            onDecrease={onDecrease}
            onEdit={onEdit}
          />

          <div className="space-y-4 md:hidden">
            {items.map((item) => (
              <InventoryCard
                key={item.id}
                item={item}
                status={getStatus(item)}
                onDelete={onDelete}
                onIncrease={onIncrease}
                onDecrease={onDecrease}
                onEdit={onEdit}
              />
            ))}
          </div>
        </>
      )}
    </section>
  );
}