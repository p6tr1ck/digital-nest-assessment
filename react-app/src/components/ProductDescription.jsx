import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useContext } from "react";
import { ItemContext } from "../App";

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
    setItemsInShoppingCart((itemsInShoppingCart) => [
      ...itemsInShoppingCart,
      product,
    ]);
    setItemCount(itemCount + 1);
  }

  useEffect(() => {
    getProduct();
  }, [itemsInShoppingCart]);

  if (isLoading) return <div>Loading...</div>;
  return (
    <>
      <button
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "rgb(255, 255, 255)",
          height: "30px",
          border: "0.1rem solid black",
          cursor: "pointer",
        }}
        onClick={() => back()}
      >
        <ArrowBackIcon sx={{ mr: 0.5 }} /> Back to Products
      </button>
      <div>
        <img src={product.image} alt="" />
        <div>
          <p>{product.name}</p>
          <p>
            $
            {product.price.toString().length > 2
              ? product.price
              : product.price.toString() + ".00"}
          </p>
          <p>{product.description}</p>
          <button onClick={() => addToCart()}>Add to Cart</button>
        </div>
      </div>
    </>
  );
}
