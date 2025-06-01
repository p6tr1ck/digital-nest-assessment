import { IconButton, TextField, Box } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { useState } from "react";
import { useContext } from "react";
import { ItemContext } from "../App";

export default function Counter() {
  const [count, setCount] = useState(1);
  const { itemCount, setItemCount } = useContext(ItemContext);
  const increment = () => {
    setCount(count + 1);
    setItemCount(itemCount + 1);
  };
  const decrement = () => {
    if (count > 1) {
      setCount(count - 1);
      setItemCount(itemCount - 1);
    }
  };

  return (
    <Box display="flex" alignItems="center" gap={1}>
      <IconButton size="small" onClick={decrement}>
        <RemoveIcon fontSize="small" />
      </IconButton>
      <TextField
        value={count}
        size="small"
        inputProps={{
          readOnly: true,
          style: { textAlign: "center", width: "40px" },
        }}
      />
      <IconButton size="small" onClick={increment}>
        <AddIcon fontSize="small" />
      </IconButton>
    </Box>
  );
}
