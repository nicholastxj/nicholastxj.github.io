import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";
import { SidebarData } from "../../data/data";

function Sidebar() {
  const [selected, setSelected] = useState(0);

  return (
    <div className="sidebar">
      {/* Menu Logo */}
      <div className="menu-logo">
        <i class="fa-solid fa-table-columns" />
        Menu
      </div>

      {/* Menu */}
      <div className="sidebar-menu">
        {SidebarData.map((item, index) => {
          return (
            <Link
              to={item.link}
              className={
                selected === index
                  ? "sidebar-menu-item sidebar-menu-active"
                  : "sidebar-menu-item"
              }
              key={index}
              onClick={() => setSelected(index)}
            >
              {item.icon}
              {item.heading}
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default Sidebar;
