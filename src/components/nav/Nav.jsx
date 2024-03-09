import React from 'react'
import './nav.css'
import {AiOutlineHome, AiOutlineUser} from 'react-icons/ai'
import {MdOutlineBookmarkAdded} from 'react-icons/md'
import {RiServiceLine} from 'react-icons/ri'
import {TbMessageCircle2} from 'react-icons/tb'
import {useState} from 'react'

const Nav = () => {
  const [activeNav, setActive] = useState('#')
  return (
     <nav>
      <a href="#" onClick={() => setActive('#')} className={activeNav === '#' ? 'active': ''}><AiOutlineHome/></a>
      <a href="#about" onClick={() => setActive('about')} className={activeNav === 'about' ? 'active' : ''}><AiOutlineUser/></a>
      <a href="#experience" onClick={() => setActive('experience')} className={activeNav === 'experience' ? 'active' : ''}><MdOutlineBookmarkAdded/></a>
      <a href="#services" onClick={() => setActive('services')} className={activeNav === 'services' ? 'active' : ''}><RiServiceLine/></a>
      <a href="#contact" onClick={() => setActive('contact')} className={activeNav === 'contact' ? 'active' : ''}><TbMessageCircle2/></a>
     </nav>
  )
}

export default Nav