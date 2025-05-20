import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function ProductList() {
  const [product, setProduct] = useState([]);
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
          <li key={index} onClick={() => handleClick(data.id)}>
            <div>
              <img src={data.image} alt="" />
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
