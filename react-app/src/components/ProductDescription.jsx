import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useContext } from "react";
import { ItemContext } from "../App";
import { Box, Button } from "@mui/material";

export default function ProductDescription() {
  const [product, setProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const {
    itemsInShoppingCart,
    setItemsInShoppingCart,
    itemCount,
    setItemCount,
  } = useContext(ItemContext);
  const { id } = useParams();
  const navigate = useNavigate();
  const getProduct = async () => {
    await axios
      .get(`https://cart-api.alexrodriguez.workers.dev/products/${id}`)
      .then((response) => {
        setProduct(response.data);
        setIsLoading(false);
      });
  };

  function back() {
    navigate(`/`);
  }

  function addToCart() {
    if (!itemsInShoppingCart.has(product.id)) {
      itemsInShoppingCart.set(product.id, {
        product,
        quantity: 0,
      });
    }
    itemsInShoppingCart.set(product.id, {
      product,
      quantity: itemsInShoppingCart.get(product.id).quantity + 1,
    });
    setItemsInShoppingCart(itemsInShoppingCart);
    setItemCount(itemCount + 1);
  }

  useEffect(() => {
    getProduct();
  }, [itemsInShoppingCart]);

  if (isLoading) return <div>Loading...</div>;
  return (
    <Box
      sx={{
        bgcolor: "rgb(255, 255, 255)",
        width: {
          xs: 500,
          sm: 600,
          md: 900,
        },
        boxShadow: 5,
        p: 5,
        borderRadius: "1rem",
      }}
    >
      <button
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "rgb(255, 255, 255)",
          height: "30px",
          border: "0.1rem solid black",
          borderRadius: "10px",
          cursor: "pointer",
          marginBottom: "1rem",
        }}
        onClick={() => back()}
      >
        <ArrowBackIcon sx={{ mr: 0.5 }} /> Back to Products
      </button>
      <Box sx={{ display: "flex" }}>
        <img
          src={product.image}
          style={{ marginRight: "3rem", borderRadius: "1rem" }}
          alt=""
        />
        <Box>
          <h1>{product.name}</h1>
          <p style={{ color: "rgb(11, 134, 200)", fontWeight: "bold" }}>
            $
            {product.price.toString().length > 2
              ? product.price
              : product.price.toString() + ".00"}
          </p>
          <p style={{ margin: "1rem 0 1rem 0" }}>{product.description}</p>
          <Button variant="contained" onClick={() => addToCart()}>
            Add to Cart
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
