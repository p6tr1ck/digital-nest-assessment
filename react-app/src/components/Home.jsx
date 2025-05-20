import { useEffect, useState } from "react";
import axios from "axios";
import "./Home.css";

export default function Home() {
  const [product, setProduct] = useState([]);

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
    <div className="main">
      <div style={{ fontWeight: "bold" }}>Our Products</div>
      <div className="product-container">
        <ul className="product-list">
          {product.map((data) => {
            return (
              <li key={data.id}>
                <div>
                  <img src={data.image} alt="" />
                  <div>
                    <div>{data.name}</div>
                    <div>
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
        </ul>
      </div>
    </div>
  );
}
