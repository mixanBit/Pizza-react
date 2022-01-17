import React from "react";
import NavigationItems from './navigation-items'
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
      <NavigationItems menuItems={menuItems}/>
  )
}