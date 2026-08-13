import MainNavbar from "./MainNavbar";
import TopNavbar from "./TopNavbar";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50">
      <TopNavbar />
      <MainNavbar />
    </header>
  );
}