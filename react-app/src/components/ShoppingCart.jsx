import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import "./ShoppingCart.css";
import { useContext, useState } from "react";
import { ItemContext } from "../App";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import ShoppingCartItemsDisplay from "./ShoppingCartItemsDisplay";
import { Badge } from "@mui/material";

const style = {
  position: "absolute",
  top: "0",
  right: "0",
  minWidth: "300px",
  width: "25%",
  bgcolor: "background.paper",
  border: "2px solid #000",
  height: "100vh",
  boxShadow: 24,
  p: 4,
};

export default function ShoppingCart() {
  const { itemCount, itemsInShoppingCart } = useContext(ItemContext);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div id="icon">
      <button
        style={{
          position: "relative",
          padding: "0.6rem",
        }}
        onClick={() => handleOpen()}
      >
        <Badge badgeContent={itemCount} color="primary">
          <ShoppingCartIcon />
        </Badge>
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Your Cart
          </Typography>
          <div id="modal-modal-description" sx={{ mt: 2 }}>
            {itemCount > 0 ? (
              <ShoppingCartItemsDisplay />
            ) : (
              "Your cart is empty"
            )}
          </div>
        </Box>
      </Modal>
    </div>
  );
}
