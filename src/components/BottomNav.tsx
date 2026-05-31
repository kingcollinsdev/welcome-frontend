type BottomNavProps = {
  activePage: string;
  setActivePage: (page: string) => void;
};

const pages = ["Dashboard", "Inventory", "Add Item"];

export default function BottomNav({
  activePage,
  setActivePage,
}: BottomNavProps) {
  return (
    <nav className="fixed bottom-5 left-4 right-4 z-50 md:hidden">
      <div className="rounded-[28px] bg-[#111111] p-3 shadow-[0_18px_40px_rgba(0,0,0,0.18)]">
        
        <div className="grid grid-cols-3 gap-2">
          {pages.map((page) => (
            <button
              key={page}
              onClick={() => setActivePage(page)}
              className={`
                rounded-2xl
                px-3
                py-4
                text-[0.7rem]
                font-black
                uppercase
                tracking-[0.12em]
                transition
                duration-300
                ${
                  activePage === page
                    ? "bg-[#f7b718] text-black"
                    : "text-white/60 hover:bg-white/10 hover:text-white"
                }
              `}
            >
              {page}
            </button>
          ))}
        </div>

      </div>
    </nav>
  );
}