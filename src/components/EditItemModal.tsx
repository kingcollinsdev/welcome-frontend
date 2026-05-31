import type { Item } from "../types/item";
import { useState } from "react";

type EditItemModalProps = {
  item: Item;
  onClose: () => void;
  onItemUpdated: () => void;
};

export default function EditItemModal({
  item,
  onClose,
  onItemUpdated,
}: EditItemModalProps) {
  const [name, setName] = useState(item.name);
  const [category, setCategory] = useState(item.category);
  const [minimumRequired, setMinimumRequired] = useState(
    item.minimumRequired
  );
  const [location, setLocation] = useState(item.location);

  async function handleSave() {
    await fetch(
      `https://welcome-backend-up4w.onrender.com/items/${item.id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          category,
          minimumRequired,
          location,
        }),
      }
    );

    await onItemUpdated();
    onClose();
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4 backdrop-blur-sm">
      
      <div className="w-full max-w-2xl rounded-4xl bg-[#fff8eb] p-7 shadow-[0_25px_60px_rgba(0,0,0,0.2)]">
        
        <div className="flex items-start justify-between gap-4">
          
          <div>
            <p className="mb-3 text-sm font-black uppercase tracking-[0.2em] text-black/50">
              Inventory Update
            </p>

            <h2 className="poster-title text-[4rem] uppercase leading-[0.9]">
              Edit <br />
              Item
            </h2>

            <p className="mt-4 max-w-md text-base font-medium text-black/60">
              Update inventory information for the hospitality team.
            </p>
          </div>

          <button
            onClick={onClose}
            className="flex h-12 w-12 items-center justify-center rounded-full bg-black text-xl font-black text-white transition hover:opacity-80"
          >
            ×
          </button>

        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-2">
          
          <div className="space-y-3">
            <label className="text-sm font-black uppercase tracking-wide text-black/55">
              Item Name
            </label>

            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Item name"
              className="w-full rounded-2xl border border-black/10 bg-white/70 px-4 py-4 text-sm font-medium outline-none transition focus:border-[#f7b718]"
            />
          </div>

          <div className="space-y-3">
            <label className="text-sm font-black uppercase tracking-wide text-black/55">
              Category
            </label>

            <input
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              placeholder="Category"
              className="w-full rounded-2xl border border-black/10 bg-white/70 px-4 py-4 text-sm font-medium outline-none transition focus:border-[#f7b718]"
            />
          </div>

          <div className="space-y-3">
            <label className="text-sm font-black uppercase tracking-wide text-black/55">
              Minimum Required
            </label>

            <input
              type="number"
              value={minimumRequired}
              onChange={(e) =>
                setMinimumRequired(Number(e.target.value))
              }
              placeholder="Minimum Required"
              className="w-full rounded-2xl border border-black/10 bg-white/70 px-4 py-4 text-sm font-medium outline-none transition focus:border-[#f7b718]"
            />
          </div>

          <div className="space-y-3">
            <label className="text-sm font-black uppercase tracking-wide text-black/55">
              Location
            </label>

            <input
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder="Location"
              className="w-full rounded-2xl border border-black/10 bg-white/70 px-4 py-4 text-sm font-medium outline-none transition focus:border-[#f7b718]"
            />
          </div>

        </div>

        <div className="mt-8 flex flex-wrap gap-3 border-t border-black/10 pt-6">
          
          <button
            onClick={handleSave}
            className="rounded-2xl bg-black px-6 py-4 text-sm font-black uppercase tracking-wide text-white transition hover:opacity-85"
          >
            Save Changes →
          </button>

          <button
            onClick={onClose}
            className="rounded-2xl bg-white px-6 py-4 text-sm font-black uppercase tracking-wide text-black transition hover:bg-black/5"
          >
            Cancel
          </button>

        </div>
      </div>
    </div>
  );
}