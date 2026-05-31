type NavbarProps = {
  activePage: string;
  setActivePage: (page: string) => void;
};

const pages = ["Dashboard", "Inventory", "Add Item"];

export default function Navbar({
  activePage,
  setActivePage,
}: NavbarProps) {
  return (
    <header className="sticky top-0 z-50 hidden px-6 pt-6 md:block">
      <div className="mx-auto flex max-w-7xl items-center justify-between rounded-[30px] bg-[#111111] px-8 py-5 text-white">
        
        {/* LEFT */}
        <div className="flex items-center gap-5">
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#f7b718] text-lg font-black text-black">
            WH
          </div>

          <div>
            <h1 className="text-xl font-black uppercase tracking-tight">
              Welcome Home
            </h1>

            <p className="text-[0.65rem] font-bold uppercase tracking-[0.35em] text-white/50">
              Team Inventory
            </p>
          </div>
        </div>

        {/* CENTER NAV */}
        <nav className="flex items-center gap-3 rounded-full bg-white/5 p-2">
          {pages.map((page) => (
            <button
              key={page}
              onClick={() => setActivePage(page)}
              className={`
                rounded-full
                px-5
                py-3
                text-xs
                font-black
                uppercase
                tracking-[0.18em]
                transition
                duration-300
                ${
                  activePage === page
                    ? "bg-[#f7b718] text-black"
                    : "text-white/70 hover:bg-white/10 hover:text-white"
                }
              `}
            >
              {page}
            </button>
          ))}
        </nav>

        {/* RIGHT BUTTON */}
        <button
          onClick={() => setActivePage("Add Item")}
          className="
            rounded-full
            bg-[#f7b718]
            px-6
            py-3
            text-sm
            font-black
            uppercase
            tracking-wide
            text-black
            transition
            hover:scale-[1.02]
          "
        >
          + Add Item
        </button>
      </div>
    </header>
  );
}