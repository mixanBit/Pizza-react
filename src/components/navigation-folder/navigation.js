import React from "react";
import './navigation.css'

export default function header() {
  return (
    <nav className="navigation">
      <a href="">
        <div className="navigation_items">
          <img src='./images/navigation-icons/fire.png' alt="fire" />
          <h2 className="navigation_heading">Акции</h2>
        </div>
      </a>
    </nav>
  )
}