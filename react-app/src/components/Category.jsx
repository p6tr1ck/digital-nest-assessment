import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function Category() {
  const [product, setProduct] = React.useState("");

  const handleChange = (event) => {
    setProduct(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 150 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">All Categories</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={product}
          label="All Categories"
          onChange={(event) => handleChange(event)}
        >
          <MenuItem value="apparel">Apparel</MenuItem>
          <MenuItem value="accessories">Accessories</MenuItem>
          <MenuItem value="electornics">Electronics</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
