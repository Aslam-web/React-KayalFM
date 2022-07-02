import SidebarItem from "./SidebarItem.js";
import items from "./data/sidebar.json";
import { sidebarList } from "./data/sideBarList";

export default function Sidebar() {
  // Object.entries(sidebarList).map(([key, value]) => {
  //   console.log(`${key} : ${value.menuName}`);
  //   if (value.submenu) {
  //     Object.entries(value.submenu).map(([k, v]) => {
  //       // recieves submenu, not the same as main menu
  //       console.log(`${v.menuName} : ${v.path} ${v.icon}`);
  //     });
  //   }
  // });

  return (
    <div className="main">
      <div className="sidebar">
        {/* {items.map((item, index) => (
          <SidebarItem key={index} item={item} />
        ))} */}
        {Object.entries(sidebarList).map(([key, value]) => {
          console.log(`${value.menuName} : ${value.path} ${value.icon}`);
          return <SidebarItem key={key} item={value} />;
        })}
      </div>
      {/* <div className="container">
        <h1 className="title">My React App</h1>
        <p className="info">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <button className="btn">Explore now</button>
      </div> */}
    </div>
  );
}
