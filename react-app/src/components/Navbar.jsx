import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import "./Navbar.css";

export default function NavBar() {
  return (
    <div className="navbar">
      <div id="title">DigitalNest Shop</div>
      <div id="icon">
        <button>
          <AddShoppingCartIcon />
        </button>
        <div id="count"></div>
      </div>
    </div>
  );
}
