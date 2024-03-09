import React from 'react'
import './about.css';
import profilepic2 from '../../assets/IMG_5777 (3).jpg'
import { IoSchoolOutline } from "react-icons/io5";
import { VscFiles } from "react-icons/vsc";
import { VscWorkspaceTrusted } from "react-icons/vsc";
import { HiOutlineComputerDesktop } from "react-icons/hi2";



export const about = () => {
  return (
    <section id='about'>
      <h5>Get to know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={profilepic2} className='about-image' alt="about image"/>
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className='about__Card'>
              <IoSchoolOutline className='about-icon'/>
              <h5>Education</h5>
              <small>B.S in Software Development</small>
            </article>
            <article className='about__Card'>
              <HiOutlineComputerDesktop className='about-icon'/>
              <h5>Open to work</h5>
              <small>Looking for internships in programming</small>
            </article>
            <article className='about__Card'>
              <VscFiles className='about-icon'/>
              <h5>Projects</h5>
              <small>30+ diverse coding projects</small>
            </article>
          </div>
          <p className='about-text'>Hello! My name is Liza De Guerengomba. At Grand Canyon University,
               I'm a student seeking a Bachlor's of Science in Software Development
               and a minor in web desgin! I'm currently looking for jobs and internships
               in software engineering, UI/UX design, and full-stack development. 
               I have a strong interest in front-end development, graphic design, and
              the.net framework. </p>
              <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default about