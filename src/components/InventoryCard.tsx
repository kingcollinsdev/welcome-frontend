import type { Item } from "../types/item";
import SmallButton from "./SmallButton";
import StockBadge from "./StockBadge";

type InventoryCardProps = {
  item: Item;
  status: string;
  onDelete: (id: number) => void;
  onIncrease: (id: number) => void;
  onDecrease: (id: number) => void;
};

export default function InventoryCard({
  item,
  status,
  onDelete,
  onIncrease,
  onDecrease,
}: InventoryCardProps) {
  return (
    <div className="rounded-3xl border border-[#eadfce] bg-white p-4 shadow-sm">
      <div className="flex items-start justify-between gap-3">
        <div>
          <h3 className="font-serif text-xl">{item.name}</h3>
          <p className="text-sm text-[#7c7164]">{item.category}</p>
          <p className="mt-1 text-sm text-[#7c7164]">
            {item.quantity} / {item.minimumRequired}
          </p>
        </div>

        <StockBadge status={status} />
      </div>

      <p className="mt-3 border-t border-[#f1e8da] pt-3 text-xs text-[#8a8175]">
        Location: {item.location}
      </p>

      <div className="mt-4 flex gap-2">
        <SmallButton onClick={() => onDecrease(item.id)}>-</SmallButton>
        <SmallButton onClick={() => onIncrease(item.id)}>+</SmallButton>
        <button
          onClick={() => onDelete(item.id)}
          className="rounded-xl bg-red-50 px-3 py-2 text-xs text-red-600"
        >
          Delete
        </button>
      </div>
    </div>
  );
}