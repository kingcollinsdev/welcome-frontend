import { useEffect, useState } from "react";

import Navbar from "./components/Navbar";
import BottomNav from "./components/BottomNav";
import Dashboard from "./pages/Dashboard";
import Inventory from "./pages/Inventory";
import AddItem from "./pages/AddItem";

import type { Item } from "./types/item";

export default function App() {
  const [items, setItems] = useState<Item[]>([]);
  const [activePage, setActivePage] = useState("Dashboard");
  const [searchTerm, setSearchTerm] = useState("");

  const [name, setName] = useState("");
  const [category, setCategory] = useState("Cards");
  const [quantity, setQuantity] = useState(0);
  const [minimumRequired, setMinimumRequired] = useState(0);
  const [location, setLocation] = useState("");

  // FILTER ITEMS
  const filteredItems = items.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // FETCH ITEMS
  async function fetchItems() {
    try {
      const response = await fetch("http://localhost:5000/items");

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
    }
  }

  // LOAD ITEMS ON START
  useEffect(() => {
    fetchItems();
  }, []);

  // ADD ITEM
  async function handleAddItem(event: React.FormEvent) {
    event.preventDefault();

    if (name.trim() === "") return;

    await fetch("http://localhost:5000/items", {
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

    setName("");
    setCategory("Cards");
    setQuantity(0);
    setMinimumRequired(0);
    setLocation("");

    setActivePage("Inventory");
  }

  // DELETE ITEM
  async function handleDeleteItem(id: number) {
    await fetch(`http://localhost:5000/items/${id}`, {
      method: "DELETE",
    });

    await fetchItems();
  }

  // INCREASE QUANTITY
  async function handleIncreaseQuantity(id: number) {
    const item = items.find((item) => item.id === id);

    if (!item) return;

    await fetch(`http://localhost:5000/items/${id}/quantity`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        quantity: item.quantity + 1,
      }),
    });

    await fetchItems();
  }

  // DECREASE QUANTITY
  async function handleDecreaseQuantity(id: number) {
    const item = items.find((item) => item.id === id);

    if (!item || item.quantity === 0) return;

    await fetch(`http://localhost:5000/items/${id}/quantity`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        quantity: item.quantity - 1,
      }),
    });

    await fetchItems();
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
    <div className="min-h-screen bg-[#f7f3ec] text-[#1f1b16]">
      <Navbar
        activePage={activePage}
        setActivePage={setActivePage}
      />

      <main className="mx-auto max-w-6xl p-4 pb-28 pt-8 md:p-8">
        {/* MOBILE HEADER */}
        <header className="mb-6 md:hidden">
          <h1 className="text-2xl font-serif">
            UsherStock
          </h1>

          <p className="text-sm text-[#7c7164]">
            Inventory Hub
          </p>
        </header>

        {/* DASHBOARD */}
        {activePage === "Dashboard" && (
          <Dashboard
            items={items}
            getStatus={getStatus}
          />
        )}

        {/* INVENTORY */}
        {activePage === "Inventory" && (
          <Inventory
            items={filteredItems}
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            getStatus={getStatus}
            onDelete={handleDeleteItem}
            onIncrease={handleIncreaseQuantity}
            onDecrease={handleDecreaseQuantity}
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

        {/* MOBILE NAV */}
        <BottomNav
          activePage={activePage}
          setActivePage={setActivePage}
        />
      </main>
    </div>
  );
}