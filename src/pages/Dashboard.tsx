import type { Item } from "../types/item";
import StatCard from "../components/StatCard";
import StockBadge from "../components/StockBadge";
import ActivityFeed from "../components/ActivityFeed";
import ReportBanner from "../components/ReportBanner";

type Activity = {
  id: number;
  message: string;
  created_at: string;
};

type DashboardProps = {
  items: Item[];
  getStatus: (item: Item) => string;
  activities: Activity[];
};

export default function Dashboard({
  items,
  getStatus,
  activities,
}: DashboardProps) {
  const priorityItems = [
    "Welcome Cards",
    "Communion Cups",
    "Offering Envelopes",
    "Pens",
    "Visitor Forms",
  ];

  const importantAlertItems = items
    .filter(
      (item) =>
        priorityItems.indexOf(item.name) !== -1 &&
        item.quantity < item.minimumRequired
    )
    .slice(0, 5);

  const allLowStockItems = items.filter(
    (item) => item.quantity > 0 && item.quantity < item.minimumRequired
  );

  const outOfStockItems = items.filter((item) => item.quantity === 0);

  return (
    <section className="space-y-8">
      <div className="grid gap-8 lg:grid-cols-[1fr_1.35fr]">
        <div>
          <p className="mb-4 text-sm font-black uppercase tracking-tight">
            Good morning, team 👋
          </p>

          <h2 className="poster-title text-[5rem] uppercase md:text-[7rem]">
            Ready <br />
            For <br />
            <span className="text-[#f7b718]">Sunday</span>
          </h2>

          <p className="mt-5 max-w-md text-xl font-medium">
            Let&apos;s make today an incredible Sunday.
          </p>
        </div>

        <div>
          <p className="mb-4 text-sm font-black uppercase">Overview</p>

          <div className="grid gap-4 sm:grid-cols-2">
            <StatCard title="Total Items" value={items.length} description="All inventory items" color="bg-[#f7b718] text-black" icon="📦" />
            <StatCard title="Low Stock" value={allLowStockItems.length} description="Need attention" color="bg-[#0057b8] text-white" icon="!" />
            <StatCard title="Out of Stock" value={outOfStockItems.length} description="Restock needed" color="bg-[#e73131] text-white" icon="!" />
            <StatCard title="Ready for Service" value="95%" description="Great job team!" color="bg-[#006b45] text-white" icon="✓" />
          </div>
        </div>
      </div>

      <div className="grid gap-8 lg:grid-cols-2">
        <div className="app-panel p-6">
          <h3 className="text-2xl font-black uppercase">Priority Stock Alerts</h3>
          <p className="mt-1 text-sm text-black/60">
            Important items the team should check before service.
          </p>

          <div className="mt-6 space-y-4">
            {importantAlertItems.length === 0 ? (
              <p className="rounded-2xl bg-white/60 p-4 text-sm text-black/60">
                Priority items are currently in stock.
              </p>
            ) : (
              importantAlertItems.map((item) => (
                <div
                  key={item.id}
                  className={`flex items-center justify-between rounded-2xl border p-4 ${
                    item.quantity === 0
                      ? "border-red-200 bg-red-50"
                      : "border-amber-200 bg-amber-50"
                  }`}
                >
                  <div>
                    <h4 className="font-black">{item.name}</h4>
                    <p className="text-sm text-black/60">{item.location}</p>
                  </div>

                  <StockBadge status={getStatus(item)} />
                </div>
              ))
            )}
          </div>
        </div>

        <ActivityFeed activities={activities} />
      </div>

      <ReportBanner />
    </section>
  );
}