import { useEffect, useState } from "react";
import toast, {Toaster} from "react-hot-toast";

import Navbar from "./components/Navbar";
import BottomNav from "./components/BottomNav";
import Dashboard from "./pages/Dashboard";
import Inventory from "./pages/Inventory";
import AddItem from "./pages/AddItem";
import EditItemModal from "./components/EditItemModal";
import DeleteConfirmModal from "./components/DeleteConfirmModal";

import type { Item } from "./types/item";

type Activity = {
  id: number;
  message: string;
  created_at: string;
};

export default function App() {
  const [items, setItems] = useState<Item[]>([]);
  const [activePage, setActivePage] = useState("Dashboard");
  const [searchTerm, setSearchTerm] = useState("");

  const [name, setName] = useState("");
  const [category, setCategory] = useState("Cards");
  const [quantity, setQuantity] = useState(0);
  const [minimumRequired, setMinimumRequired] = useState(0);
  const [location, setLocation] = useState("");
  const [editingItem, setEditingItem] = useState<Item | null>(null);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [deletingItem, setDeletingItem] = useState<Item | null>(null);
  const [activities, setActivities] = useState<Activity[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

  // FILTER ITEMS
  const filteredItems = items.filter((item) => {
  const matchesSearch = item.name
    .toLowerCase()
    .includes(searchTerm.toLowerCase());

  const matchesCategory =
    selectedCategory === "All" || item.category === selectedCategory;

  return matchesSearch && matchesCategory;
});

  // FETCH ITEMS
async function fetchItems() {
  try {
    setIsLoading(true);
    setErrorMessage("");

    const response = await fetch(
      "https://welcome-backend-up4w.onrender.com/items"
    );

    if (!response.ok) {
      throw new Error("Failed to load inventory");
    }

    const data = await response.json();

    const formattedItems = data.map((item: any) => ({
      id: item.id,
      name: item.name,
      category: item.category,
      quantity: item.quantity,
      minimumRequired: item.minimum_required,
      location: item.location,
    }));

    setItems(formattedItems);
  } catch (error) {
    console.error("Error fetching items:", error);
  } finally {
    setIsLoading(false);
  }
}


  async function fetchActivities() {
  try {
    const response = await fetch(
      "https://welcome-backend-up4w.onrender.com/activities"
    );

    const data = await response.json();
    setActivities(data);
  } catch (error) {
    console.error("Error fetching activities:", error);
  }
}

  // LOAD ITEMS ON START
  useEffect(() => {
    fetchItems();
    fetchActivities();
  }, []);

  useEffect(() => {
  console.log("Editing item:", editingItem);
}, [editingItem]);

  // ADD ITEM
  async function handleAddItem(event: React.FormEvent) {
    
    event.preventDefault();

    if (name.trim() === "") return;

    await fetch("https://welcome-backend-up4w.onrender.com/items", {
      
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        category,
        quantity,
        minimumRequired,
        location,
      }),
    });

    await fetchItems();
    await fetchActivities();
    toast.success("Item added");

    setName("");
    setCategory("Cards");
    setQuantity(0);
    setMinimumRequired(0);
    setLocation("");

    setActivePage("Inventory");
  }

  // DELETE ITEM
  async function handleDeleteItem(id: number) {
    await fetch(`https://welcome-backend-up4w.onrender.com/items/${id}`, {
      method: "DELETE",
    });

    await fetchItems();
    await fetchActivities();
    toast.success("Item deleted");
  }

  // INCREASE QUANTITY
  async function handleIncreaseQuantity(id: number) {
    const item = items.find((item) => item.id === id);

    if (!item) return;

    await fetch(`https://welcome-backend-up4w.onrender.com/items/${id}/quantity`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        quantity: item.quantity + 1,
      }),
    });

    await fetchItems();
    await fetchActivities();
    toast.success("Quantity updated");
  }

  // DECREASE QUANTITY
  async function handleDecreaseQuantity(id: number) {
    const item = items.find((item) => item.id === id);

    if (!item || item.quantity === 0) return;

    await fetch(`https://welcome-backend-up4w.onrender.com/items/${id}/quantity`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        quantity: item.quantity - 1,
      }),
    });

    await fetchItems();
    await fetchActivities();
    toast.success("Quantity updated");
  }

  // STOCK STATUS
  function getStatus(item: Item) {
    if (item.quantity === 0) return "Out of Stock";

    if (item.quantity < item.minimumRequired) {
      return "Low Stock";
    }

    return "In Stock";
  }

  return (
    <div className="min-h-screen bg-[#f2dfbd] text-[#111111]">
      <Toaster
        position="top-right"
        toastOptions={{
          duration: 2500,
          style: {
            background: "#111111",
            color: "#fff8eb",
            borderRadius: "18px",
            padding: "14px 18px",
            fontWeight: "800",
            boxShadow: "0 18px 40px rgba(0,0,0,0.18)",
          },
          success: {
            iconTheme: {
              primary: "#f7b718",
              secondary: "#111111",
            },
          },
          error: {
            iconTheme: {
              primary: "#e73131",
              secondary: "#ffffff",
            },
          },
        }}
      />
      <Navbar
        activePage={activePage}
        setActivePage={setActivePage}
      />

      <main className="mx-auto max-w-7xl p-4 pb-28 pt-8 md:p-8">
        {/* MOBILE HEADER */}
        <header className="mb-8 flex items-center justify-between md:hidden">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.25em] text-black/50">
              Welcome Home
            </p>

            <h1 className="mt-1 text-3xl font-black uppercase tracking-tight text-black">
              WelcomeInventory
            </h1>
          </div>

          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#111111] text-sm font-black text-[#f7b718]">
            WH
          </div>
        </header>


        {/* DASHBOARD */}
        {activePage === "Dashboard" && (
          <Dashboard
            items={items}
            getStatus={getStatus}
            activities={activities}
          />
        )}

        {/* INVENTORY */}
        {activePage === "Inventory" && (
          <Inventory
            items={filteredItems}
            isLoading={isLoading}
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            getStatus={getStatus}
            errorMessage={errorMessage}
            onDelete={(id) => {
              const item = items.find((item) => item.id === id);

              if (item) {
                setDeletingItem(item)
              }
            }}
            onIncrease={handleIncreaseQuantity}
            onDecrease={handleDecreaseQuantity}
            onEdit={setEditingItem}
            selectedCategory ={selectedCategory}
            setSelectedCategory ={setSelectedCategory}
          />
        )}

        {/* ADD ITEM */}
        {activePage === "Add Item" && (
          <AddItem
            name={name}
            setName={setName}
            category={category}
            setCategory={setCategory}
            quantity={quantity}
            setQuantity={setQuantity}
            minimumRequired={minimumRequired}
            setMinimumRequired={setMinimumRequired}
            location={location}
            setLocation={setLocation}
            onSubmit={handleAddItem}
          />
        )}

        {deletingItem && (
          <DeleteConfirmModal
            item={deletingItem}
            onClose={() => setDeletingItem(null)}
            onConfirm={async () => {
              await handleDeleteItem(deletingItem.id);
              setDeletingItem(null);
            }}
          />
        )}

        {/* MOBILE NAV */}
        <BottomNav
          activePage={activePage}
          setActivePage={setActivePage}
        />

        {editingItem && (
        <EditItemModal
          item={editingItem}
          onClose={() => setEditingItem(null)}
          onItemUpdated={fetchItems}
        />
        )}
      </main>
    </div>
  );
}