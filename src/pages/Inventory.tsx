import type { Item } from "../types/item";
import InventoryCard from "../components/InventoryCard";
import InventoryTable from "../components/InventoryTable";

type InventoryProps = {
  items: Item[];
  searchTerm: string;
  setSearchTerm: (value: string) => void;
  getStatus: (item: Item) => string;
  onDelete: (id: number) => void;
  onIncrease: (id: number) => void;
  onDecrease: (id: number) => void;
};

export default function Inventory({
  items,
  searchTerm,
  setSearchTerm,
  getStatus,
  onDelete,
  onIncrease,
  onDecrease,
}: InventoryProps) {
  return (
    <section className="space-y-6">
      <div>
        <h2 className="font-serif text-4xl">Inventory</h2>
        <p className="mt-2 text-[#7c7164]">
          Search, update, and manage ushering supplies.
        </p>
      </div>

      <input
        value={searchTerm}
        onChange={(event) => setSearchTerm(event.target.value)}
        placeholder="Search items..."
        className="w-full rounded-2xl border border-[#eadfce] bg-white px-4 py-3 outline-none focus:border-[#b99b68] md:max-w-md"
      />

      <InventoryTable
        items={items}
        getStatus={getStatus}
        onDelete={onDelete}
        onIncrease={onIncrease}
        onDecrease={onDecrease}
      />

      <div className="space-y-3 md:hidden">
        {items.map((item) => (
          <InventoryCard
            key={item.id}
            item={item}
            status={getStatus(item)}
            onDelete={onDelete}
            onIncrease={onIncrease}
            onDecrease={onDecrease}
          />
        ))}
      </div>
    </section>
  );
}