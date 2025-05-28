import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import "./Navbar.css";
import { useContext } from "react";
import { ItemContext } from "../App";
import { useEffect } from "react";

export default function NavBar() {
  const { itemCount } = useContext(ItemContext);

  useEffect(() => {
    console.log(`item count: ${itemCount}`);
  }, []);
  return (
    <div className="navbar">
      <div id="title">DigitalNest Shop</div>
      <div id="icon">
        <button
          style={{
            position: "relative",
            padding: "0.6rem",
          }}
        >
          <ShoppingCartIcon />
          <p
            style={{
              position: "absolute",
              top: "0",
              right: "0",
              backgroundColor: "rgb(41, 192, 255)",
              padding: "0.1rem 0.3rem 0.1rem 0.3rem",
              borderRadius: "30px",
            }}
            id="count"
          >
            {itemCount}
          </p>
        </button>
      </div>
    </div>
  );
}
