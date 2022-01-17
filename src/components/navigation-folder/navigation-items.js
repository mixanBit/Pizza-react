import React from "react";


export default function navigationItems(props) {
  return (
    <nav className="navigation">
      {props.menuItems.map(menuItems => {
        return (
          <a href="##">
            <div className="navigation_items">
              <img className="icon_navigation_item" src={menuItems.navigationIcon} alt={menuItems.navigationText} />
              <h2 className="navigation_heading">{menuItems.navigationText}</h2>
            </div>
          </a>
        )
      })}
    </nav>
  )
}


