import React from "react";
import './stocks.css'

let stocksItemsArray = [
  {
    stocksItemImg: '/images/open-pizza.png',
    stocksItemText: '3 средние пиццы от 999 рублей'
  },
  {
    stocksItemImg: '/images/pizza-box.png',
    stocksItemText: 'Кэшбек 10% на самовывоз (доставка)'
  },
  {
    stocksItemImg: '/images/open-pizza.png',
    stocksItemText: '3 средние пиццы от 999 рублей'
  },
  {
    stocksItemImg: '/images/pizza-box.png',
    stocksItemText: 'Кэшбек 10% на самовывоз (доставка)'
  }
]

export default function Stocks() {
  return (
    <section className="stocks">
      {stocksItemsArray.map((stocksItemsArray) => {
        return (
          <div className="stocks_item">
            <div className="box_img_stocks">
              <img className="img_stocks" src={stocksItemsArray.stocksItemImg} alt="" />
            </div>
            <p className="stocks_item_text">{stocksItemsArray.stocksItemText}</p>
          </div>
        )
      })}
    </section>
    // <StocksItems stocksItemsArray={stocksItemsArray}/>
  )
}