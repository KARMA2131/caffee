import image from '../img/cafe-main.jpg'

export default function About() {

  return(
    <div className="container" id="About">
      <h1>ABOUT THE CAFE</h1>
        <div className="about-text">
          <p>The Cafe was founded in blabla by Mr. Smith in lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          <p>In addition to our full espresso and brew bar menu, we serve fresh made-to-order breakfast and lunch sandwiches, as well as a selection of sides and salads and other good stuff.</p>
          <div className="note">
            <p>"Use products from nature for what it's worth - but never too early, nor too late." Fresh is the new sweet.</p>
            <p>Chef, Coffeeist and Owner: Liam Brown</p>
        </div>
        <img src={image} alt="img" />
        <div className='note'>
          <p><b>Opening hours:</b> everyday from 6am to 5pm.</p>
          <p><b>Address:</b> 15 Adr street, 5015, NY</p>
        </div>
      </div>
    </div>
  )
}