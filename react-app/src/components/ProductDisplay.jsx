import ProductList from "./ProductList";
import ProductDescription from "./ProductDescription";

export default function ProductDisplay(props) {
  return <>{props.itemClicked ? <ProductDescription /> : <ProductList />}</>;
}
