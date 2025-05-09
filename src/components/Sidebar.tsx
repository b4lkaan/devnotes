// src/components/Sidebar.tsx
import { NavLink } from 'react-router-dom';

export default function Sidebar() {
  return (
    <aside className="w-64 bg-gray-50 border-r p-4">
      <nav className="space-y-2">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `block px-3 py-2 rounded ${isActive ? 'bg-indigo-100' : 'hover:bg-gray-100'}`
          }
        >
          All Notes
        </NavLink>
        {/* Future filters/tags here */}
      </nav>
    </aside>
  );
}
