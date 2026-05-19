import type { Item } from "../types/item";
import StatCard from "../components/StatCard";
import StockBadge from "../components/StockBadge";

type DashboardProps = {
  items: Item[];
  getStatus: (item: Item) => string;
};

export default function Dashboard({ items, getStatus }: DashboardProps) {
  const lowStockItems = items.filter(
    (item) => item.quantity > 0 && item.quantity < item.minimumRequired
  );

  const outOfStockItems = items.filter((item) => item.quantity === 0);
  const alertItems = [...lowStockItems, ...outOfStockItems];
  const categories = new Set(items.map((item) => item.category)).size;

  return (
    <section className="space-y-6">
      <div>
        <h2 className="font-serif text-4xl text-[#1f1b16]">
          Good morning, Chef
        </h2>
        <p className="mt-2 text-[#7c7164]">
          Here is what is happening with the inventory today.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard title="Total Items" value={items.length} description="All tracked supplies" />
        <StatCard title="Low Stock" value={lowStockItems.length} description="Below minimum level" />
        <StatCard title="Out of Stock" value={outOfStockItems.length} description="Need restocking" />
        <StatCard title="Categories" value={categories} description="Supply groups" />
      </div>

      <div className="rounded-3xl border border-[#eadfce] bg-white p-5 shadow-sm">
        <h3 className="font-serif text-2xl">Low Stock Alerts</h3>
        <p className="mt-1 text-sm text-[#7c7164]">
          Items the team should check before service.
        </p>

        <div className="mt-5 space-y-3">
          {alertItems.length === 0 ? (
            <p className="rounded-2xl bg-[#fbf8f2] p-4 text-sm text-[#7c7164]">
              Everything is currently in stock.
            </p>
          ) : (
            alertItems.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between rounded-2xl border border-[#f1e8da] p-4"
              >
                <div>
                  <h4 className="font-medium">{item.name}</h4>
                  <p className="text-sm text-[#7c7164]">{item.location}</p>
                </div>

                <StockBadge status={getStatus(item)} />
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
}