// src/components/Navbar.tsx
export default function Navbar() {
  return (
    <header className="bg-white border-b px-4 py-2 flex justify-between items-center">
      <h1 className="text-xl font-semibold">DevNotes</h1>
      <button className="px-3 py-1 bg-indigo-600 text-white rounded hover:bg-indigo-700">
        New Note
      </button>
    </header>
  );
}
