import Navbar from "./assets/components/Navbar";
import Footer from "./assets/components/Footer";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <>
      <Navbar />

      <main className="flex-grow">
        <Outlet />
      </main>

      <Footer />
    </>
  );
}
