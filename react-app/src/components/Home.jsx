import { useEffect, useState } from "react";
import axios from "axios";

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
    <div>
      <ul style={{ listStyle: "none" }}>
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
  );
}
