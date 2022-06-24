import React from "react";
import Data from "../../helper/Data";
import cardStyle from "../../sass/cards.module.scss";

const Card = () => {
  return (
    <div className={cardStyle["cardContainer"]}>
      {Data.map((item) => {
        const { id, title, desc, image } = item;
        return (
          <div key={id} className={cardStyle["card"]}>
            <div className={cardStyle["cityName"]}>
              <h3>{title}</h3>
            </div>

            <div className={cardStyle["images"]}>
              <img src={image} alt="images" />
            </div>

            <div className={cardStyle["desc"]}>
              <p>{desc}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Card;
