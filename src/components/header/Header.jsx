import React from 'react';
import './header.css';
import Resume from './resume';
import ME from '../../assets/profilepic1.jpg';
import Headersocials from './headersocials';

const Header = () => {
  return (
    <section id='home'>
    <header>
      <div className="container header_container">
      <h5>Hello I'm</h5>
      <h1>Liza De Guerengomba</h1>
      <h5 className="text-light">Software Developer</h5>
      <Resume />
      <Headersocials />

      <div className="me">
        <img className="profile-img" src={ME} alt="me"/>
      </div>

      <a href="#contact" className='scroll_down'>Scroll Down</a>
      </div>
    </header>
    </section>
  )
}

export default Header;