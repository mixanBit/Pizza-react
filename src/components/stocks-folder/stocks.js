import React from "react";
import StocksItems from './stocks-items'
import './stocks.css'

let stocksItems = [
  {
    stocksItemText: '3 средние пиццы от 999 рублей'
  }
]

export default function Stocks() {
  return (
    <StocksItems />
  )
}