import { useState } from "react";
import "./App.css";
import Home from "./components/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createContext } from "react";

export const ItemContext = createContext();

function App() {
  const [itemsInShoppingCart, setItemsInShoppingCart] = useState(new Map());
  const [itemCount, setItemCount] = useState(0);
  return (
    <>
      <BrowserRouter>
        <ItemContext.Provider
          value={{
            itemsInShoppingCart,
            setItemsInShoppingCart,
            itemCount,
            setItemCount,
          }}
        >
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route
              path="/product/:id"
              element={<Home itemClicked={true} />}
            ></Route>
          </Routes>
        </ItemContext.Provider>
      </BrowserRouter>
    </>
  );
}

export default App;
