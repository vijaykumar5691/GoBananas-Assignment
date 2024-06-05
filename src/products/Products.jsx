import React, { useEffect, useState } from "react";
import styles from "./products.module.css";
import Cards from "../card/Cards";

const Products = () => {
  // states for storig the data
  const [products, setProducts] = useState([]);
  const [text, setText] = useState("");

  // fetching the data first time loading the app.
  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((res) => {
        setProducts(res.products);
        console.log(products);
      });
  }, []);
  // for filtering the products based on user input .
  const filteredResult = products.filter((prd, id) => {
    return prd.title.toLowerCase().includes(text.toLocaleLowerCase());
  });
  return (
    <div className={styles.productContainer}>
      <div className={styles.inputContainer}>
        <input
          type="text"
          placeholder="search here"
          className={styles.input}
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <div className={styles.container}>
        {filteredResult.length > 0 ? (
          filteredResult.map((items, i) => {
            return (
              <div key={i}>
                <Cards {...items} />
              </div>
            );
          })
        ) : (
          <h2 className={styles.heading}>No Product Found for This Search</h2>
        )}
      </div>
    </div>
  );
};

export default Products;
