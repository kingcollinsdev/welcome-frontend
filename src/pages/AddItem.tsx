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
    <section className="space-y-6">
      <div>
        <h2 className="font-serif text-4xl">Add Item</h2>
        <p className="mt-2 text-[#7c7164]">
          Add a new supply item to the inventory.
        </p>
      </div>

      <form onSubmit={onSubmit} className="rounded-3xl border border-[#eadfce] bg-white p-6 shadow-sm">
        <div className="grid gap-4 md:grid-cols-2">
          <FormField label="Item Name">
            <input
              value={name}
              onChange={(event) => setName(event.target.value)}
              placeholder="Welcome Cards"
              className="input"
            />
          </FormField>

          <FormField label="Category">
            <select
              value={category}
              onChange={(event) => setCategory(event.target.value)}
              className="input"
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
              className="input"
            />
          </FormField>

          <FormField label="Minimum Required">
            <input
              type="number"
              value={minimumRequired}
              onChange={(event) => setMinimumRequired(Number(event.target.value))}
              className="input"
            />
          </FormField>

          <div className="md:col-span-2">
            <FormField label="Location">
              <input
                value={location}
                onChange={(event) => setLocation(event.target.value)}
                placeholder="Ushering Cabinet"
                className="input"
              />
            </FormField>
          </div>
        </div>

        <button
          type="submit"
          className="mt-6 rounded-2xl bg-[#1f1b16] px-5 py-3 text-sm font-medium text-white hover:bg-black"
        >
          Save Item
        </button>
      </form>
    </section>
  );
}
