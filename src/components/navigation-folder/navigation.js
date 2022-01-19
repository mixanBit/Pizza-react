import React from "react";
import './navigation.css'

let menuItems = [
  {
    navigationIcon: './images/navigation-icons/Fire.png',
    navigationText: 'Акции',
    navigationLink: '##'
  },
  {
    navigationIcon: './images/navigation-icons/Pizza.png',
    navigationText: 'Пицца',
    navigationLink: '##'
  },
  {
    navigationIcon: './images/navigation-icons/Sushi.png',
    navigationText: 'Суши',
    navigationLink: '##'
  },
  {
    navigationIcon: './images/navigation-icons/Drinks.png',
    navigationText: 'Напитки',
    navigationLink: '##'
  },
  {
    navigationIcon: './images/navigation-icons/Snacks.png',
    navigationText: 'Закуски',
    navigationLink: '##'
  },
  {
    navigationIcon: './images/navigation-icons/Combo.png',
    navigationText: 'Комбо',
    navigationLink: '##'
  },
  {
    navigationIcon: './images/navigation-icons/Desserts.png',
    navigationText: 'Десерты',
    navigationLink: '##'
  },
  {
    navigationIcon: './images/navigation-icons/Sauces.png',
    navigationText: 'Соусы',
    navigationLink: '##'
  }
]

export default function header() {

  return (
    <nav className="navigation">
      {menuItems.map((menuItems) => {
        return (
          <a href={menuItems.navigationLink}>
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