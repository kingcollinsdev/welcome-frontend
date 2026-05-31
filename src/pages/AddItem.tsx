import FormField from "../components/FormField";

type AddItemProps = {
  name: string;
  setName: (value: string) => void;
  category: string;
  setCategory: (value: string) => void;
  quantity: number;
  setQuantity: (value: number) => void;
  minimumRequired: number;
  setMinimumRequired: (value: number) => void;
  location: string;
  setLocation: (value: string) => void;
  onSubmit: (event: React.FormEvent) => void;
};

export default function AddItem({
  name,
  setName,
  category,
  setCategory,
  quantity,
  setQuantity,
  minimumRequired,
  setMinimumRequired,
  location,
  setLocation,
  onSubmit,
}: AddItemProps) {
  return (
    <section className="space-y-8">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <p className="mb-3 text-sm font-black uppercase tracking-tight">
            Team Inventory
          </p>

          <h2 className="poster-title text-[4rem] uppercase leading-[0.9] md:text-[5.5rem]">
            Add <br />
            New <br />
            Item
          </h2>

          <p className="mt-5 max-w-md text-lg font-medium text-black/70">
            Keep the team prepared for every service.
          </p>
        </div>

        <div className="rounded-[28px] bg-[#f7b718] p-6 lg:max-w-sm">
          <p className="text-sm font-black uppercase text-black/70">
            Quick Tip
          </p>

          <h3 className="mt-3 text-3xl font-black uppercase leading-none">
            Organize
            <br />
            By Team.
          </h3>

          <p className="mt-4 text-sm font-medium text-black/70">
            Use categories and locations consistently so that the team can find
            items quickly before service.
          </p>
        </div>
      </div>

      <form
        onSubmit={onSubmit}
        className="app-panel space-y-6 p-6 md:p-8"
      >
        <div className="grid gap-5 md:grid-cols-2">
          <FormField label="Item Name">
            <input
              value={name}
              onChange={(event) => setName(event.target.value)}
              placeholder="Welcome Cards"
              className="rounded-2xl border border-black/10 bg-[#fff8eb] px-4 py-4 text-sm font-medium outline-none transition focus:border-[#f7b718]"
            />
          </FormField>

          <FormField label="Category">
            <select
              value={category}
              onChange={(event) => setCategory(event.target.value)}
              className="rounded-2xl border border-black/10 bg-[#fff8eb] px-4 py-4 text-sm font-medium outline-none transition focus:border-[#f7b718]"
            >
              <option>Cards</option>
              <option>Communion</option>
              <option>Stationery</option>
              <option>Ushering</option>
              <option>Cleaning</option>
              <option>Refreshments</option>
              <option>Forms</option>
            </select>
          </FormField>

          <FormField label="Quantity">
            <input
              type="number"
              value={quantity}
              onChange={(event) => setQuantity(Number(event.target.value))}
              className="rounded-2xl border border-black/10 bg-[#fff8eb] px-4 py-4 text-sm font-medium outline-none transition focus:border-[#f7b718]"
            />
          </FormField>

          <FormField label="Minimum Required">
            <input
              type="number"
              value={minimumRequired}
              onChange={(event) =>
                setMinimumRequired(Number(event.target.value))
              }
              className="rounded-2xl border border-black/10 bg-[#fff8eb] px-4 py-4 text-sm font-medium outline-none transition focus:border-[#f7b718]"
            />
          </FormField>

          <div className="md:col-span-2">
            <FormField label="Location">
              <input
                value={location}
                onChange={(event) => setLocation(event.target.value)}
                placeholder="Ushering Cabinet"
                className="rounded-2xl border border-black/10 bg-[#fff8eb] px-4 py-4 text-sm font-medium outline-none transition focus:border-[#f7b718]"
              />
            </FormField>
          </div>
        </div>

        <div className="flex items-center justify-between border-t border-black/10 pt-6">
          <p className="text-sm font-medium text-black/50">
            Every item helps the team stay ready for service.
          </p>

          <button
            type="submit"
            className="rounded-2xl bg-black px-6 py-4 text-sm font-black uppercase tracking-wide text-white transition hover:opacity-85"
          >
            Save Item →
          </button>
        </div>
      </form>
    </section>
  );
}