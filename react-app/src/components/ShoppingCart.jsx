import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import "./ShoppingCart.css";
import { useContext, useState } from "react";
import { ItemContext } from "../App";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "0",
  right: "0",
  width: "25%",
  bgcolor: "background.paper",
  border: "2px solid #000",
  height: "100vh",
  boxShadow: 24,
  p: 4,
};

export default function ShoppingCart() {
  const { itemCount } = useContext(ItemContext);
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
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Your cart is empty
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
