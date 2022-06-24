import React from "react";
import Data from "../../helper/Data";
// import cardStyle from "./Card.module.css";
import cardStyle from "../../sass/cards.module.scss";

const Card = () => {
  return (
    <div className={cardStyle["container"]}>
      {Data.map((item) => {
        const { id, title, desc, image } = item;
        return (
          <div className={cardStyle["card"]} key={id}>
            <h1 className={cardStyle["cityName"]}>{title}</h1>
            <img className={cardStyle["images"]} src={image} alt="img" />
            <p className={cardStyle["description"]}>{desc}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Card;
