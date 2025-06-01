import "./Home.css";
import NavBar from "./Navbar";
import ProductDisplay from "./ProductDisplay";
import Category from "./Category";

export default function Home(props) {
  return (
    <>
      <div className="page-container">
        <NavBar />
        <div className="main">
          <div className="home-container">
            {props.itemClicked ? null : (
              <div className="header-container">
                <div
                  style={{
                    fontWeight: "bold",
                    fontSize: "1.5rem",
                  }}
                >
                  Our Products
                </div>
                <Category />
              </div>
            )}
            {props.itemClicked ? (
              <ProductDisplay itemClicked={props.itemClicked} />
            ) : (
              <div className="product-container">
                <ul className="product-list">
                  <ProductDisplay itemClicked={props.itemClicked} />
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
