type BottomNavProps = {
  activePage: string;
  setActivePage: (page: string) => void;
};

const pages = ["Dashboard", "Inventory", "Add Item"];

export default function BottomNav({ activePage, setActivePage }: BottomNavProps) {
  return (
    <nav className="fixed bottom-4 left-4 right-4 rounded-3xl border border-[#eadfce] bg-white p-2 shadow-lg md:hidden">
      <div className="grid grid-cols-3 gap-2">
        {pages.map((page) => (
          <button
            key={page}
            onClick={() => setActivePage(page)}
            className={`rounded-2xl px-3 py-3 text-xs ${
              activePage === page ? "bg-[#efe5d6] text-[#1f1b16]" : "text-[#7c7164]"
            }`}
          >
            {page}
          </button>
        ))}
      </div>
    </nav>
  );
}