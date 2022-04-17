import React from "react";
import "./Menu.css";

// const Menu = ({ menuItems }) => {
//   return (
//     <div className="menuItems">
//       {menuItems.map((menuItem) => {
//         const { id, title, category, price, img, desc } = menuItem;

//         return (
//           <div key={id} className="menuItem">
//             <h2>{title}</h2>
//             <h3>{category}</h3>
//             <img src={img} alt={title} />
//             <span>{price}</span>
//             <div className="desc">
//               <p>{desc}</p>
//             </div>
//           </div>
//         );
//       })}
//     </div>
//   );
// };

class Menu extends React.Component {
  render() {
    const { menuItems } = this.props;
    return (
      <div className="menuItems">
        {menuItems.map((menuItem) => {
          const { id, title, category, price, img, desc } = menuItem;

          return (
            <div key={id} className="menuItem">
              <h2>{title}</h2>
              <h3>{category}</h3>
              <img src={img} alt={title} />
              <span>{price}</span>
              <div className="desc">
                <p>{desc}</p>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Menu;
