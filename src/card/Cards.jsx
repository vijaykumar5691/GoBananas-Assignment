import React from "react";
import styles from "./card.module.css";

const Cards = (props) => {
  return (
    <div key={props.id} className={styles.cardContainer}>
      <div className={styles.imgContainer}>
        <img src={props.thumbnail} alt="image" className={styles.img} />
      </div>
      <div className={styles.container}>
        <h3 className={styles.title}>{props.title}</h3>
        <h4 className={styles.price}>Price :{props.price} </h4>
        <p className={styles.price}>Rating : {props.price} </p>
      </div>
    </div>
  );
};

export default Cards;
