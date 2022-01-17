import React from "react";
import './navigation.css'

let menuItems = [
  {
    navigationIcon: './images/navigation-icons/Fire.png',
    navigationText: 'Акции'
  },
  {
    navigationIcon: './images/navigation-icons/Pizza.png',
    navigationText: 'Пицца'
  },
  {
    navigationIcon: './images/navigation-icons/Sushi.png',
    navigationText: 'Суши'
  },
  {
    navigationIcon: './images/navigation-icons/Drinks.png',
    navigationText: 'Напитки'
  },
  {
    navigationIcon: './images/navigation-icons/Snacks.png',
    navigationText: 'Закуски'
  },
  {
    navigationIcon: './images/navigation-icons/Combo.png',
    navigationText: 'Комбо'
  },
  {
    navigationIcon: './images/navigation-icons/Desserts.png',
    navigationText: 'Десерты'
  },
  {
    navigationIcon: './images/navigation-icons/Sauces.png',
    navigationText: 'Соусы'
  }
]

export default function header() {

  return (
    <nav className="navigation">
      {menuItems.map((menuItems) => {
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