import "./Navbar.css";
import ShoppingCart from "./ShoppingCart";

export default function NavBar() {
  return (
    <div className="navbar">
      <div id="title">DigitalNest Shop</div>
      <ShoppingCart />
    </div>
  );
}
