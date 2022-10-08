import { useState } from "react";

import DynamicBiIcon from "./DynamicBiIcon";
import { BiChevronDown } from "react-icons/bi";

export default function SidebarItem({ item }) {
  const [open, setOpen] = useState(false);

  if (item.submenu) {
    return (
      <div className={open ? "sidebar-item open" : "sidebar-item"}>
        <div className="sidebar-title">
          <span>
            {/* {item.icon} */}
            <DynamicBiIcon name={item.icon} />
            {" " + item.menuName}
          </span>
          <BiChevronDown
            className="toggle-btn"
            onClick={() => setOpen(!open)}
          />
        </div>
        <div className="sidebar-content">
          {Object.entries(item.submenu).map(([k, v]) => {
            return <SidebarItem key={k} item={v} />;
          })}
        </div>
      </div>
    );
  } else {
    return (
      // change it to </Link>
      <a href={item.path || "#"} className="sidebar-item plain">
        <DynamicBiIcon name={item.icon} />
        {item.menuName}
      </a>
    );
  }
}
