import React from "react";
import { useState } from "react";

function Menu() {

  const [ toggleState, setToggleState ] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  }

  return (
    <div className='container' id="Menu">
      <h1>THE MENU</h1>

        <nav id="tab-container">
          <button
          className={toggleState === 1 ? 'tabs active-tabs' : 'tabs'}
          onClick={() => toggleTab(1)}
          >Food</button>
          <button
          className={toggleState === 2 ? 'tabs active-tabs' : 'tabs'}
          onClick={() => toggleTab(2)}
          >Drink</button>
        </nav>

        <div className={toggleState === 1 ? "content  active-content" : "content"}>
          <p className="food-title">Bread Basket</p>
          <p className="contents">Assortment of fresh baked fruit breads and muffinn</p>

          <p className="food-title">Honey Almond Granola with Fruits</p>
          <p className="contents">Natural cereal of honey toasted oats, raisins, almonds and dates</p>

          <p className="food-title">Belgian Waffle</p>
          <p className="contents">Vanilla flavored batter with malted flour</p>

          <p className="food-title">Blueberry Pancakes</p>
          <p className="contents">With syrup, butter and lots of berries</p>

          <p className="food-title">Scrambled eggs</p>
          <p className="contents">Scrambled eggs, roasted red pepper and garlic, with green onions</p>
        </div>

        <div className={toggleState === 2 ? "content  active-content" : "content"}>
          <p className="food-title">Coffee</p>
          <p className="contents">Regular coffee</p>

          <p className="food-title">Chocolato</p>
          <p className="contents">Chocolate espresso with milk</p>

          <p className="food-title">Corretto</p>
          <p className="contents">Whiskey and coffee</p>

          <p className="food-title">Iced tea</p>
          <p className="contents">Hot tea, except not hot</p>

          <p className="food-title">Soda</p>
          <p className="contents">Coke, Sprite, Fanta, etc</p>
        </div>
      </div>

  )}


export default Menu;