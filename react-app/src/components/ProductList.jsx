import axios from "axios";
import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ItemContext } from "../App";

export default function ProductList(props) {
  const { product, setProduct } = useContext(ItemContext);
  const navigate = useNavigate();

  function handleClick(id) {
    navigate(`/product/${id}`);
  }

  const getProduct = async () => {
    await axios
      .get("https://cart-api.alexrodriguez.workers.dev/products")
      .then((response) => {
        setProduct(response.data);
      });
  };

  useEffect(() => {
    getProduct();
  }, []);

  return (
    <>
      {product.map((data, index) => {
        return (
          <li
            style={{ borderRadius: "1rem" }}
            key={index}
            onClick={() => handleClick(data.id)}
          >
            <div>
              <img
                style={{
                  borderTopLeftRadius: "1rem",
                  borderTopRightRadius: "1rem",
                }}
                src={data.image}
                alt=""
              />
              <div className="description">
                <div className="item-name">{data.name}</div>
                <div className="item-price">
                  $
                  {data.price.toString().length > 2
                    ? data.price
                    : data.price.toString() + ".00"}
                </div>
              </div>
            </div>
          </li>
        );
      })}
    </>
  );
}
