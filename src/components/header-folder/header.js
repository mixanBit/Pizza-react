import React from "react";
import './header.css'

export default function header() {
  return (
    <header>
      <div className="header_info">
        <div className="address">
          <div className="city">
            <img 
              className="icon_map" 
              src='/images/map.png' 
              alt="map" 
            />
            <button className="search_city">Москва <img className="icon_arrow" src='./images/arrow-bottom.png' alt="map" /></button>
          </div>
          <button className="check_address">Проверить адрес</button>
          <div className="delivery_time">
            Среднее время доставки*: 00:24:19
          </div>
        </div>

        <div className="user">
          <div className="working_hours">Время работы: с 11:00 до 23:00</div>
          <div className="login">
            <img className="icon_account" src='./images/account.png' alt="account" />
            <button className="login_account">Войти в аккаунт</button>
          </div>
        </div>
      </div>

      <hr className="hr_header"/>

      <div className="header_design">
        <div className="logo">
          <img className="icon_logo" src='./images/pizza.png' alt="logo" />
          <p className="text_logo">Куда пицца</p>
        </div>

        <div className="block_menu">
          <button className="basket">
            <img className="icon_basket" src='./images/basket.png' alt="basket" />
            <p>0 ₽</p>
          </button>

          <img className="btn_sidebar" src='./images/open-sidebar.png' alt="sidebar" />
        </div>
      </div>

      <hr className="hr_header"/>
    </header>
  )
}