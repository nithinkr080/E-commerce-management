import React from "react";
import "./Home.css";
import Product from "./Product";
function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://m.media-amazon.com/images/I/61jovjd+f9L._SX3000_.jpg"
          alt=""
        />

        <div className="home__row">
          <Product
            id="12321341"
            title="Apple iPhone 12 Pro Max, 256GB, Pacific Blue"
            price={125000}
            image="https://m.media-amazon.com/images/I/71FuI8YvCNL._AC_UY218_.jpg"
            rating={4}
          />
          <Product
            id="49538094"
            title="Acer Nitro 5 AN515-55-53E5 Gaming Laptop | Intel Core i5-10300H | NVIDIA GeForce RTX 3050 Laptop GPU | 15.6 FHD 144Hz IPS Display | 8GB DDR4 | 256GB NVMe SSD | Intel Wi-Fi 6"
            price={78500}
            image="https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY218_.jpg"
            rating={5}
          />
        </div>
        <div className="home__row">
          <Product
            id="4903850"
            title='Kingston 480GB A400 SATA 3 2.5" Internal SSD SA400S37/480G - HDD Replacement for Increase Performance'
            price={7000}
            image="https://m.media-amazon.com/images/I/91RL+MhTWbL._AC_UY218_.jpg"
            rating={4}
          />
          <Product
            id="23445930"
            title="The Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses"
            price={1099}
            image="https://m.media-amazon.com/images/I/81-QB7nDh4L._AC_UY218_.jpg"
            rating={4}
          />
          <Product
            id="3254354345"
            title="Sony WH-1000XM4 Wireless Industry Leading Noise Canceling Overhead Headphones with Mic for Phone-Call and Alexa Voice Control, Black"
            price={25000}
            image="https://m.media-amazon.com/images/I/71o8Q5XJS5L._AC_UY218_.jpg"
            rating={5}
          />
        </div>
        <div className="home__row">
          <Product
            id="90829332"
            title="Amazon Fire TV 55' Omni Series 4K UHD smart TV, hands-free with Alexa"
            price={40000}
            image="https://m.media-amazon.com/images/I/618Yxam1kWL._AC_UY218_.jpg"
            rating={3}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
