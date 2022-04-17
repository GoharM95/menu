import React, { useState } from "react";
import "./Categories.css";

// const Categories = ({ categories, filterItems }) => {
//   return (
//     <div className="categories">
//       {categories.map((category, index) => {
//         return (
//           <div key={index}>
//             <button onClick={() => filterItems(category)}>{category}</button>
//           </div>
//         );
//       })}
//     </div>
//   );
// };

class Categories extends React.Component {
  render() {
    const { categories, filterItems } = this.props;
    return (
      <div className="categories">
        {categories.map((category, index) => {
          return (
            <div key={index}>
              <button onClick={() => filterItems(category)}>{category}</button>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Categories;
