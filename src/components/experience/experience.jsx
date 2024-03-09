import React from 'react'
import './experience.css';
import {BsPatchCheckFill} from 'react-icons/bs';

const experience = () => {
  return (
    <section id='experience'>
      <h5>Skills</h5>
      <h2> My Experience</h2>

      <div className="container experience__cont">
        <div className="experience__frontend">
          <h3>Frontend</h3>
          <div className="experience__content">
            <article className='experience__dts'>
            <BsPatchCheckFill className='experience-icon'/>
              <div>
              <h4>HTML</h4>
              <small className='text-light'>Advanced</small>
              </div>
            </article>
            <article className='experience__dts'>
            <BsPatchCheckFill className='experience-icon'/>
            <div>
            <h4>CSS</h4>
            <small className='text-light'>Advanced</small>
            </div>
            </article>
            <article className='experience__dts'>
            <BsPatchCheckFill className='experience-icon'/>
            <div>
            <h4>JavaScript</h4>
            <small className='text-light'>Advanced</small>
            </div>
            </article>
            <article className='experience__dts'>
            <BsPatchCheckFill className='experience-icon'/>
            <div>
            <h4>React</h4>
            <small className='text-light'>Intermediate</small>
            </div>
            </article>
            <article className='experience__dts'>
            <BsPatchCheckFill className='experience-icon'/>
            <div>
            <h4>Angular</h4>
            <small className='text-light'>Intermediate</small>
            </div>
            </article>
            <article className='experience__dts'>
            <BsPatchCheckFill className='experience-icon'/>
            <div>
            <h4>Figma</h4>
            <small className='text-light'>Intermediate</small>
            </div>
            </article>
          </div>
        </div>

      {/* end of front end, beginning of backend */}

        <div className="experience__backend">
        <h3>Backend</h3>
          <div className="experience__content">
            <article className='experience__dts'>
            <BsPatchCheckFill className='experience-icon'/>
            <div>
            <h4>Java</h4>
            <small className='text-light'>Advanced</small>
            </div>
            </article>
            <article className='experience__dts'>
            <BsPatchCheckFill className='experience-icon'/>
            <div>
            <h4>C#</h4>
            <small className='text-light'>Advanced</small>
            </div>
            </article>
            <article className='experience__dts'>
            <BsPatchCheckFill className='experience-icon'/>
            <div>
            <h4>Node JS</h4>
            <small className='text-light'>Advanced</small>
            </div>
            </article>
            <article className='experience__dts'>
            <BsPatchCheckFill className='experience-icon'/>
            <div>
            <h4>MySQL</h4>
            <small className='text-light'>Advanced</small>
            </div>
            </article>
            <article className='experience__dts'>
            <BsPatchCheckFill className='experience-icon'/>
            <div>
            <h4>REST API</h4>
            <small className='text-light'>Advanced</small>
            </div>
            </article>
            <article className='experience__dts'>
            <BsPatchCheckFill className='experience-icon'/>
            <div>
            <h4>Postman</h4>
            <small className='text-light'>Intermediate</small>
            </div>
            </article>
          </div>
          </div>
      </div>
    </section>
  )
}

export default experience