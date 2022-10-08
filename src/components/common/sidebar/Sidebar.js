import SidebarItem from "./SidebarItem.js";
import { sidebarList } from "./data/sideBarList";

export default function Sidebar() {
  return (
    <div className="sidebar">
      {Object.entries(sidebarList).map(([key, value]) => {
        return <SidebarItem key={key} item={value} />;
      })}
    </div>
  );
}
