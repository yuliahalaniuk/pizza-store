import React from "react";
import scss from "./Categories.module.scss";
const Categories = () => {
  return (
    <ul className={scss.categoryList}>
      <li>
        <label forHtml="all">
          <input type="radio" value="all" />
          All
        </label>
      </li>
      <li>
        <label forHtml="meat">
          <input type="radio" value="meat" /> Meat
        </label>
      </li>
      <li>
        <label forHtml="vegietarian">
          <input type="radio" value="vegietarian" /> Vegietarian
        </label>
      </li>
      <li>
        <label forHtml="grilled">
          <input type="radio" value="grilled" /> Grilled
        </label>
      </li>
      <li>
        <label forHtml="spicy">
          <input type="radio" value="spicy" />
          Spicy
        </label>
      </li>
      <li>
        <label forHtml="closed">
          <input type="radio" value="closed" />
          Closed
        </label>
      </li>
    </ul>
  );
};

export default Categories;
