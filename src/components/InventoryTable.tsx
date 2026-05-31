import type { Item } from "../types/item";
import SmallButton from "./SmallButton";
import StockBadge from "./StockBadge";

type InventoryTableProps = {
  items: Item[];
  getStatus: (item: Item) => string;
  onDelete: (id: number) => void;
  onIncrease: (id: number) => void;
  onDecrease: (id: number) => void;
  onEdit: (item: Item) => void;
};

export default function InventoryTable({
  items,
  getStatus,
  onDelete,
  onIncrease,
  onDecrease,
  onEdit,
}: InventoryTableProps) {
  return (
    <div className="app-panel hidden overflow-hidden md:block">
      <table className="w-full text-left text-sm">
        <thead className="bg-[#111111] text-white">
          <tr>
            <th className="px-5 py-4 text-xs font-black uppercase tracking-[0.18em]">
              Item
            </th>
            <th className="px-5 py-4 text-xs font-black uppercase tracking-[0.18em]">
              Category
            </th>
            <th className="px-5 py-4 text-xs font-black uppercase tracking-[0.18em]">
              Quantity
            </th>
            <th className="px-5 py-4 text-xs font-black uppercase tracking-[0.18em]">
              Status
            </th>
            <th className="px-5 py-4 text-xs font-black uppercase tracking-[0.18em]">
              Actions
            </th>
          </tr>
        </thead>

        <tbody>
          {items.map((item) => (
            <tr
              key={item.id}
              className="border-b border-black/10 bg-[#fff8eb]/70 last:border-none hover:bg-white/70"
            >
              <td className="px-5 py-5">
                <p className="text-base font-black uppercase tracking-tight">
                  {item.name}
                </p>
                <p className="mt-1 text-xs font-medium text-black/50">
                  {item.location}
                </p>
              </td>

              <td className="px-5 py-5">
                <span className="rounded-full bg-[#f7b718] px-3 py-1 text-[0.7rem] font-black uppercase text-black">
                  {item.category}
                </span>
              </td>

              <td className="px-5 py-5">
                <p className="text-sm font-black text-black">
                  {item.quantity}
                  <span className="font-medium text-black/45">
                    {" "}
                    / {item.minimumRequired}
                  </span>
                </p>
              </td>

              <td className="px-5 py-5">
                <StockBadge status={getStatus(item)} />
              </td>

              <td className="px-5 py-5">
                <div className="flex flex-wrap gap-2">
                  <SmallButton onClick={() => onDecrease(item.id)}>
                    -
                  </SmallButton>

                  <SmallButton onClick={() => onIncrease(item.id)}>
                    +
                  </SmallButton>

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
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}