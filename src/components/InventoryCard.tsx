import type { Item } from "../types/item";
import SmallButton from "./SmallButton";
import StockBadge from "./StockBadge";

type InventoryCardProps = {
  item: Item;
  status: string;
  onDelete: (id: number) => void;
  onIncrease: (id: number) => void;
  onDecrease: (id: number) => void;
  onEdit: (item: Item) => void;
};

export default function InventoryCard({
  item,
  status,
  onDelete,
  onIncrease,
  onDecrease,
  onEdit,
}: InventoryCardProps) {
  return (
    <div className="app-panel p-5">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="mb-2 inline-flex rounded-full bg-[#f7b718] px-3 py-1 text-[0.65rem] font-black uppercase text-black">
            {item.category}
          </p>

          <h3 className="text-2xl font-black uppercase leading-none tracking-tight">
            {item.name}
          </h3>

          <p className="mt-3 text-sm font-medium text-black/60">
            {item.quantity} available / {item.minimumRequired} minimum
          </p>
        </div>

        <StockBadge status={status} />
      </div>

      <div className="mt-5 rounded-2xl bg-white/60 p-4">
        <p className="text-xs font-black uppercase text-black/50">
          Location
        </p>

        <p className="mt-1 text-sm font-semibold text-black">
          {item.location}
        </p>
      </div>

      <div className="mt-5 flex flex-wrap items-center gap-2">
        <SmallButton onClick={() => onDecrease(item.id)}>-</SmallButton>
        <SmallButton onClick={() => onIncrease(item.id)}>+</SmallButton>

        <button
          onClick={() => onEdit(item)}
          className="rounded-full bg-black px-4 py-2 text-xs font-black uppercase text-white transition hover:opacity-80"
        >
          Edit
        </button>

        <button
          onClick={() => onDelete(item.id)}
          className="rounded-full bg-[#e73131] px-4 py-2 text-xs font-black uppercase text-white transition hover:opacity-80"
        >
          Delete
        </button>
      </div>
    </div>
  );
}