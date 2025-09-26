import { Link } from "react-router-dom";
import { useState } from "react";
import { HiMenu } from "react-icons/hi";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="flex items-center h-18 px-5 bg-white shadow-md sticky top-0 z-50">
      <img src="/img/logo-pustakadunia.png" alt="Logo" className="w-50" />
      <HiMenu
        className="ml-auto md:hidden p-2 text-5xl"
        onClick={() => setOpen(!open)}
      />
      <nav
        className={`flex-col pl-15 py-5 md:flex-row md:flex gap-5 font-bold absolute md:static top-full left-0 w-full md:w-auto bg-white shadow-md md:shadow-none ${
          open ? "flex" : "hidden"
        }`}
      >
        <Link to={"/"} className="hover:text-indigo-700">
          Home
        </Link>
        <Link to={"/product"} className="hover:text-indigo-700">
          Product
        </Link>
        <Link to={"/about"} className="hover:text-indigo-700">
          About
        </Link>
      </nav>
    </header>
  );
}
