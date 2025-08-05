import { NavLink } from "react-router";

export default function Navbar() {
  return (
    <nav className="top-0 fixed h-12 w-full mt-4 z-50">
      <div className="backdrop-blur-xl border-2 border-purple-400 rounded-3xl flex w-full h-full justify-between items-center mx-auto max-w-xl px-6">
        <NavLink to="/" end>
          Home
        </NavLink>
        <NavLink to="/about" end>
          About
        </NavLink>
        <NavLink to="/contact" end>
          Contact
        </NavLink>
      </div>
    </nav>
  );
}
