import React from "react";
import { categories } from "../../../backend/db/categories";
function TopCategories() {
  console.log("cat is", categories);
  return (
    <section>
      <hr className="horizontal-line" />
      <h1 className="heading">Top Categories</h1>
      <div className="top-categories">
        {categories.map((eachCategory) => {
          return (
            <div className="category-card">
              <div className="category-img">
                <img src={eachCategory.img} alt={eachCategory.category} />
              </div>
              <p>{eachCategory.category}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default TopCategories;
