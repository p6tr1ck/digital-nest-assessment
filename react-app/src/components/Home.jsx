import { useEffect, useState } from "react";
import axios from "axios";
import "./Home.css";
import ProductList from "./ProductList";
import NavBar from "./Navbar";

export default function Home() {
  return (
    <>
      <NavBar />
      <div className="main">
        <div className="header-container">
          <div
            style={{
              fontWeight: "bold",
              paddingTop: "1rem",
              fontSize: "1.2rem",
            }}
          >
            Our Products
          </div>
        </div>
        <div className="product-container">
          <ul className="product-list">
            <ProductList />
          </ul>
        </div>
      </div>
    </>
  );
}
