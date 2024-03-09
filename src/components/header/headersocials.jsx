import React from 'react'
import {BsLinkedin, BsGithub, BsInstagram, BsTwitterX} from 'react-icons/bs'

const headersocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/liza-de-guerengomba/" target='_blank'><BsLinkedin/></a>
        <a href="https://github.com/lizadeguereng" target='_blank'><BsGithub/></a>
        <a href="https://www.instagram.com/liza.gue/" target='_blank'><BsInstagram/></a>
        <a href="https://twitter.com/luvlizaa" target='_blank'><BsTwitterX/></a>

    </div>
  )
}

export default headersocials