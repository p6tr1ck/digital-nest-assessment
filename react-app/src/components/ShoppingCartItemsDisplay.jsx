import { useContext } from "react";
import { ItemContext } from "../App";
import Counter from "./Counter";

export default function ShoppingCartItemsDisplay() {
  const { itemsInShoppingCart } = useContext(ItemContext);

  return (
    <>
      {[...itemsInShoppingCart.values()].map((item, index) => (
        <div key={index}>
          <img src={item.product.image} alt="" />
          <div>
            <p>{item.product.name}</p>
            <p>
              $
              {item.product.price.toString().length > 2
                ? item.product.price
                : item.product.price.toString() + ".00"}
            </p>
            <Counter />
          </div>
        </div>
      ))}
    </>
  );
}
