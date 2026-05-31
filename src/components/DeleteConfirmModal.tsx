import type { Item } from "../types/item";

type DeleteConfirmModalProps = {
  item: Item;
  onClose: () => void;
  onConfirm: () => void;
};

export default function DeleteConfirmModal({
  item,
  onClose,
  onConfirm,
}: DeleteConfirmModalProps) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4 backdrop-blur-sm">
      
      <div className="w-full max-w-lg rounded-4xl bg-[#fff8eb] p-7 shadow-[0_25px_60px_rgba(0,0,0,0.2)]">
        
        <div className="mb-5 inline-flex rounded-full bg-[#e73131] px-4 py-2 text-[0.7rem] font-black uppercase tracking-[0.2em] text-white">
          Delete Confirmation
        </div>

        <h2 className="poster-title text-[3.5rem] uppercase leading-[0.9] text-black">
          Delete <br />
          Item?
        </h2>

        <p className="mt-5 max-w-md text-base font-medium text-black/65">
          You are about to permanently remove{" "}
          <span className="font-black text-black">
            {item.name}
          </span>{" "}
          from the hospitality inventory.
        </p>

        <div className="mt-8 rounded-2xl bg-white/70 p-4">
          <p className="text-xs font-black uppercase tracking-wide text-black/50">
            Item Location
          </p>

          <p className="mt-1 text-sm font-semibold text-black">
            {item.location}
          </p>
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          
          <button
            onClick={onConfirm}
            className="rounded-2xl bg-[#e73131] px-6 py-4 text-sm font-black uppercase tracking-wide text-white transition hover:opacity-90"
          >
            Delete Item
          </button>

          <button
            onClick={onClose}
            className="rounded-2xl bg-black px-6 py-4 text-sm font-black uppercase tracking-wide text-white transition hover:opacity-85"
          >
            Cancel
          </button>

        </div>
      </div>
    </div>
  );
}