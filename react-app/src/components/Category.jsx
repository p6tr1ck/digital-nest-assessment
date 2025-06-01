import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useState, useContext } from "react";
import { ItemContext } from "../App";
import axios from "axios";

export default function Category() {
  const [category, setCategory] = useState("");
  const { product, setProduct } = useContext(ItemContext);
  const getProduct = async (newCategory) => {
    await axios
      .get(`https://cart-api.alexrodriguez.workers.dev/products`)
      .then((response) => {
        if (newCategory === "All") {
          setProduct(response.data);
          return;
        }
        const newProduct = [];
        response.data.forEach((data) => {
          if (data.category === newCategory) {
            newProduct.push(data);
          }
        });
        setProduct(newProduct);
      });
  };
  const handleChange = (event) => {
    setCategory(event.target.value);
    getProduct(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 150 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">All Categories</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={category}
          label="All Categories"
          onChange={(event) => handleChange(event)}
        >
          <MenuItem value="All">All Categories</MenuItem>
          <MenuItem value="Apparel">Apparel</MenuItem>
          <MenuItem value="Accessories">Accessories</MenuItem>
          <MenuItem value="Electronics">Electronics</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
