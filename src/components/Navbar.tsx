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
      <div
        className="
          mx-auto
          flex
          max-w-6xl
          items-center
          justify-between
          rounded-full
          border
          border-[#e5d8c6]
          bg-[#fffaf2]/90
          px-8
          py-4
          shadow-[0_8px_30px_rgba(0,0,0,0.04)]
          backdrop-blur-xl
        "
      >
        {/* LOGO */}
        <div className="flex items-center gap-4">
          <div
            className="
              flex
              h-11
              w-11
              items-center
              justify-center
              rounded-full
              bg-[#171411]
              text-sm
              font-semibold
              text-white
            "
          >
            US
          </div>

          <div>
            <h1 className="text-lg tracking-tight">
              UsherStock
            </h1>

            <p
              className="
                text-[0.65rem]
                uppercase
                tracking-[0.35em]
                text-[#7c7164]
              "
            >
              Inventory System
            </p>
          </div>
        </div>

        {/* NAV LINKS */}
        <nav className="flex items-center gap-10">
          {pages.map((page) => (
            <button
              key={page}
              onClick={() => setActivePage(page)}
              className={`
                relative
                text-sm
                uppercase
                tracking-[0.28em]
                transition
                duration-300
                ${
                  activePage === page
                    ? "text-[#171411]"
                    : "text-[#7c7164] hover:text-[#171411]"
                }
              `}
            >
              {page}

              {activePage === page && (
                <div
                  className="
                    absolute
                    -bottom-2
                    left-0
                    height-[2px]
                    w-full
                    rounded-full
                    bg-[#b9904f]
                  "
                />
              )}
            </button>
          ))}
        </nav>

        {/* ACTION BUTTON */}
        <button
          onClick={() => setActivePage("Add Item")}
          className="
            rounded-full
            bg-[#171411]
            px-6
            py-3
            text-sm
            text-white
            transition
            hover:scale-[1.02]
          "
        >
          Add Item
        </button>
      </div>
    </header>
  );
}