import React from "react";
import headerStyle from "../../sass/header.module.scss";

const Header = () => {
  return (
    <div className={headerStyle["head"]}>
      <h2>Popular Tour Places</h2>
    </div>
  );
};

export default Header;
