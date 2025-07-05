import { Outlet, NavLink } from "react-router-dom";

export default function MainLayout() {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-800 text-white p-6 space-y-4">
        <h2 className="text-2xl font-bold mb-6">AdminPro</h2>

        <nav className="flex flex-col space-y-2">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              isActive
                ? "text-blue-400 font-semibold border-l-4 border-blue-400 pl-2"
                : "text-white pl-2"
            }
          >
            Dashboard
          </NavLink>

          <NavLink
            to="/users"
            className={({ isActive }) =>
              isActive
                ? "text-blue-400 font-semibold border-l-4 border-blue-400 pl-2"
                : "text-white pl-2"
            }
          >
            Users
          </NavLink>

          <NavLink
            to="/settings"
            className={({ isActive }) =>
              isActive
                ? "text-blue-400 font-semibold border-l-4 border-blue-400 pl-2"
                : "text-white pl-2"
            }
          >
            Settings
          </NavLink>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 bg-gray-100 overflow-y-auto">
        <header className="bg-white shadow p-4">
          <h1 className="text-xl font-semibold">Welcome Admin</h1>
        </header>

        <section className="p-6">
          <Outlet />
        </section>
      </main>
    </div>
  );
}
