import { useEffect, useState } from "react";

const ProductList = ({ category }: { category: string }) => {
  const [products, setProducts] = useState<String[]>([]);

  // callback function

  useEffect(() => {
    console.log("fetching products in ", category);
    setProducts(["Clothing", "Household"]);
  }, [category]); // either props or state variables can be inside this array
  // anytime the value of the prop or the state variable is changed, it will run the
  // effect hook

  return <div>ProductList</div>;
};

export default ProductList;
