import React, { useState } from 'react';
import '../Header/style.css';

const Header = () => {

  const [ burger_class, setBurgerClass ] = useState('burger-bar unclicked');
  const [ menu_class, setMenuClass ] = useState('menu hidden');
  const [ isMenuClicked, setIsMenuClicked ] = useState(false);

  const updateMenu = () => {
    if(!isMenuClicked) {
      setBurgerClass('burger-bar clicked')
      setMenuClass('menu visible')
    }
    else{
      setBurgerClass('burger-bar unclicked')
      setMenuClass('menu hidden')
    }
    setIsMenuClicked(!isMenuClicked)
  }

    return(
    // <header>

    //   <a href='#/' className='brand-title'>COFFEE</a>
    //   <nav>
        //   <ul className={menu_class}>
        //     <li className='nav-item'><a className='nav-link' href="#Main">Home</a></li>
        //     <li className='nav-item'><a className='nav-link' href="#About">About</a></li>
        //     <li className='nav-item'><a className='nav-link' href="#Menu">Menu</a></li>
        //     <li className='nav-item'><a className='nav-link' href="#Location">Location</a></li>
        // </ul>

    //     <div className='burger-menu'  onClick={updateMenu} >
    //       <div className={burger_class} ></div>
    //       <div className={burger_class} ></div>
    //       <div className={burger_class} ></div>
    //     </div>

    //   </nav>


    <header>
      <div className='container' >

      <div className='brand-title'> <a href="#/">COFFEE</a></div>

      <ul className={menu_class}>
        <li className='nav-item'><a className='nav-link' href="#Main">Home</a></li>
        <li className='nav-item'><a className='nav-link' href="#About">About</a></li>
        <li className='nav-item'><a className='nav-link' href="#Menu">Menu</a></li>
        <li className='nav-item'><a className='nav-link' href="#Location">Location</a></li>
      </ul>

      <div className='burger-menu' onClick={updateMenu}>
        <div className={burger_class} ></div>
        <div className={burger_class} ></div>
        <div className={burger_class} ></div>
      </div>

      </div>


    </header>

    )
  }

export default Header;