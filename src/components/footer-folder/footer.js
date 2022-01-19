import React from "react";
import './footer.css'

export default function footer() {
  return (
    <footer className="footer">
      <main className="footer_conatiner">
        <section className="footer_connection">
          <div className="footer_box">
            <div className="logo">
              <img className="icon_logo" src='./images/pizza.png' alt="logo" />
              <p className="text_logo">Куда пицца</p>
            </div>
            <p className="copyright">
              © Copyright 2021 — Куда Пицца
            </p>
          </div>

          <div className="footer_box">
            <h2 className="footer_heading">Куда пицца</h2>
            <a href="">О компании</a>
            <a href="">Пользовательское соглашение</a>
            <a href="">Условия гарантии</a>
          </div>

          <div className="footer_box">
            <h2 className="footer_heading">Помощь</h2>
            <a href="">Ресторан</a>
            <a href="">Контакты</a>
            <a href="">Поддержка</a>
            <a href="">Отследить заказ</a>
          </div>

          <div className="footer_box">
            <h2 className="footer_heading">Контакты</h2>
            <div className="footer_data">
              <img src="./images/telephone.png" alt="telephone" />
              <p>
                <a href="tel:+79262231011">+7 (926) 223-10-11</a>
              </p>
            </div>

            <div className="footer_data">
              <img src="./images/footer-map.png" alt="map" />
              <p>Москва, ул. Юных Ленинцев, д.99</p>
            </div>

            <div className="footer_data">
              <div className="footer_social_media">
                <img src="./images/facebook.png" alt="facebook" />
                <p>Facebok</p>
              </div>  

              <div className="footer_social_media">
                <img src="./images/instagram.png" alt="instagram" />
                <p>Facebok</p>
              </div> 
            </div>
          </div>
        </section>
        <section className="footer_copyright2">
          <hr/>
          <p>© Copyright 2021 — Куда Пицца</p>
        </section>
      </main>
    </footer>
  )
}