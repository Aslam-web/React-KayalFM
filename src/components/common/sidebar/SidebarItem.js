import { useState } from "react";
import { Link } from "react-router-dom";

import DynamicBiIcon from "./DynamicBiIcon"
import { BiChevronDown } from "react-icons/bi";

export default function SidebarItem({ item }) {
  const [open, setOpen] = useState(false);

  console.log("from SidebarItem - item.submenu:" + item.submenu);

  if (item.submenu) {
    return (
      <div className={open ? "sidebar-item open" : "sidebar-item"}>
        <div className="sidebar-title">
          <span>
            {/* {item.icon} */}
            <DynamicBiIcon name={item.icon}/>
            {" "+item.menuName}
          </span>
          <BiChevronDown
            className="toggle-btn"
            onClick={() => setOpen(!open)}
          />
        </div>
        <div className="sidebar-content">
          {Object.entries(item.submenu).map(([k, v]) => {
            console.log(`$v.menuName} : ${v.path} $v.icon}`);
            return <SidebarItem key={k} item={v} />;
          })}
        </div>
      </div>
    );
  } else {
    return (
      // change it to </Link>
      <a href={item.path || "#"} className="sidebar-item plain">
        <DynamicBiIcon name={item.icon}/>
        {item.menuName}
      </a>
    );
  }
}
