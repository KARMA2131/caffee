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
          <p>Assortment of fresh baked fruit breads and muffins 5.50</p>

          <p className="food-title">Honey Almond Granola with Fruits</p>
          <p>Natural cereal of honey toasted oats, raisins, almonds and dates 7.00</p>

          <p className="food-title">Belgian Waffle</p>
          <p>Vanilla flavored batter with malted flour 7.50</p>

          <p className="food-title">Blueberry Pancakes</p>
          <p>With syrup, butter and lots of berries 8.50</p>

          <p className="food-title">Scrambled eggs</p>
          <p>Scrambled eggs, roasted red pepper and garlic, with green onions 7.50</p>
        </div>

        <div className={toggleState === 2 ? "content  active-content" : "content"}>
          <p className="food-title">Coffee</p>
          <p>Regular coffee 2.50</p>

          <p className="food-title">Chocolato</p>
          <p>Chocolate espresso with milk 4.50</p>

          <p className="food-title">Corretto</p>
          <p>Whiskey and coffee 5.00</p>

          <p className="food-title">Iced tea</p>
          <p>Hot tea, except not hot 3.00</p>

          <p className="food-title">Soda</p>
          <p>Coke, Sprite, Fanta, etc. 2.50</p>
        </div>
      </div>

  )}


export default Menu;