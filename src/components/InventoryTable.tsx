import type { Item } from "../types/item";
import SmallButton from "./SmallButton";
import StockBadge from "./StockBadge";

type InventoryTableProps = {
  items: Item[];
  getStatus: (item: Item) => string;
  onDelete: (id: number) => void;
  onIncrease: (id: number) => void;
  onDecrease: (id: number) => void;
};

export default function InventoryTable({
  items,
  getStatus,
  onDelete,
  onIncrease,
  onDecrease,
}: InventoryTableProps) {
  return (
    <div className="hidden overflow-hidden rounded-3xl border border-[#eadfce] bg-white shadow-sm md:block">
      <table className="w-full text-left text-sm">
        <thead className="border-b border-[#eadfce] text-[#7c7164]">
          <tr>
            <th className="p-4 font-medium">Item</th>
            <th className="p-4 font-medium">Category</th>
            <th className="p-4 font-medium">Quantity</th>
            <th className="p-4 font-medium">Status</th>
            <th className="p-4 font-medium">Actions</th>
          </tr>
        </thead>

        <tbody>
          {items.map((item) => (
            <tr key={item.id} className="border-b border-[#f1e8da] last:border-none">
              <td className="p-4">
                <p className="font-medium">{item.name}</p>
                <p className="text-xs text-[#8a8175]">{item.location}</p>
              </td>

              <td className="p-4 text-[#7c7164]">{item.category}</td>

              <td className="p-4 text-[#7c7164]">
                {item.quantity} / {item.minimumRequired}
              </td>

              <td className="p-4">
                <StockBadge status={getStatus(item)} />
              </td>

              <td className="p-4">
                <div className="flex gap-2">
                  <SmallButton onClick={() => onDecrease(item.id)}>-</SmallButton>
                  <SmallButton onClick={() => onIncrease(item.id)}>+</SmallButton>
                  <button
                    onClick={() => onDelete(item.id)}
                    className="rounded-xl bg-red-50 px-3 py-2 text-xs text-red-600 hover:bg-red-100"
                  >
                    Delete
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}