import instagram_img from '../img/instagram.png'
import facebook from '../img/facebook.png';
import google_map from '../img/g_map.png';
import telegram from '../img/telegram.png';

export default function Footer(){

  return (
    <footer className="container" id='Footer'>
      <div className='social-media'>
        <a href="/#Instagram"><img src={instagram_img} alt="" /></a>
        <a href="/#Facebook"><img src={facebook} alt="" /></a>
        <a href="/#Google_map"><img src={google_map} alt="" /></a>
        <a href="/#Telegram"><img src={telegram} alt="" /></a>
      </div>

      <div className='contact-information'>
        <a href="#About-info">About</a>
        <a href="#Privacy-policy">Privacy Policy</a>
        <a href="#Technical-support">Technical support</a>
        <a href="#Contacts">Contacts</a>
      </div>
    </footer>
  )
}