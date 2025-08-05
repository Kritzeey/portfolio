import { NavLink } from "react-router";

export default function Navbar() {
  return (
    <nav className="top-0 fixed h-12 w-full mt-4 z-50">
      <div className="backdrop-blur-xl border-2 border-purple-400 rounded-3xl flex w-full h-full justify-between items-center mx-auto max-w-xl px-6">
        <NavLink
          to="/"
          end
          className={({ isActive }) =>
            isActive
              ? "border-2 border-transparent border-b-purple-400 transition-all"
              : "border-2 border-transparent"
          }
        >
          Home
        </NavLink>

        <NavLink
          to="/about"
          end
          className={({ isActive }) =>
            isActive
              ? "border-2 border-transparent transition-all border-b-purple-400"
              : "border-2 border-transparent"
          }
        >
          About
        </NavLink>

        <NavLink
          to="/contact"
          end
          className={({ isActive }) =>
            isActive
              ? "border-2 border-transparent border-b-purple-400 transition-all"
              : "border-2 border-transparent"
          }
        >
          Contact
        </NavLink>
      </div>
    </nav>
  );
}
