import React, { useState } from "react";
import items from "../../data";
import Categories from "../Categories";
import Menu from "../Menu";
import "./App.css";

// const App = () => {
//   const filterItems = (category) => {
//     if (category === "all") {
//       setMenuItems(items);
//       return;
//     }

//     const newItems = items.filter((item) => item.category === category);
//     setMenuItems(newItems);
//   };
//   const allCategories = ["all", ...new Set(items.map((item) => item.category))];

//   const [menuItems, setMenuItems] = useState(items);
//   const [categories, setCategories] = useState(allCategories);
//   return (
//     <div>
//       <p>Our menu</p>
//       <Categories filterItems={filterItems} categories={categories} />
//       <Menu menuItems={menuItems} />
//     </div>
//   );
// };

// export default App;

/// ???????????????
//   const allCategories = ["all", ...new Set(items.map((item) => item.category))];

class App extends React.Component {
  allCategories = ["all", ...new Set(items.map((item) => item.category))];

  state = { menuItems: items, categories: this.allCategories };

  filterItems = (category) => {
    if (category === "all") {
      this.setState({ menuItems: items });
      return;
    }

    const newItems = items.filter((item) => item.category === category);
    this.setState({ menuItems: newItems });
  };

  render() {
    const { categories, menuItems } = this.state;
    return (
      <div>
        <p>Our menu</p>
        <Categories filterItems={this.filterItems} categories={categories} />
        <Menu menuItems={menuItems} />
      </div>
    );
  }
}

export default App;
