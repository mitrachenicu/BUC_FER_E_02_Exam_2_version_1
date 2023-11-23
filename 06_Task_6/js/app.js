import React from "react";
import { createRoot } from "react-dom/client";
import products from "./data/products";

const Item = ({ name, price }) => {
  return (
    <li>
      {name}, Price: {price}
    </li>
  );
};

const Products = ({ products }) => {
  return (
    <>
      <h2>Products</h2>
      <ul>
        {products.map((item) => (
          <Item key={item.id} name={item.name} price={item.price} />
        ))}
      </ul>
    </>
  );
};

const App = () => {
  return <Products products={products} />;
};

/**
 
Do not modify the code below!*/
const container = document.getElementById("app");
const root = createRoot(container);
root.render(<App />);

