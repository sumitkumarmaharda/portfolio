
import React from 'react'
import './about.css'
import ME from '../../assets/me8.jpeg'
import {FaAward} from 'react-icons/fa'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>Abot Me</h2>

      <div className="container about__container">
         <div className='about__me'>
             <div className='about__me-image'>
               <img src={ME} alt="About Image"/>
              </div>
         </div>
       
        <div className='about__content'>
            <div className='about__cards'>
               <article className='about__card'>
                 <FaAward className='about__icon'/>
                 <h5>B.tech</h5>
                 <small>MNNIT, Allahabad</small> <br />
                 <small>CPI 8.37</small>
               </article>

               <article className='about__card'>
                 <FaAward className='about__icon'/>
                 <h5>Higher Secondary </h5>
                 <small>JNV PATAN SIKAR</small> <br />
                 <small>81.6%</small>
               </article>

               <article className='about__card'>
                 <FaAward className='about__icon'/>
                 <h5>Secondary School </h5>
                 <small>JNV PATAN SIKAR</small> <br />
                 <small>CGPA 9.0</small>
               </article>

            </div>
           <p>
           "To secure a position in a reputed organisation where I can face real world challenges and thereby use my
            skills for the betterment of the organisation and the society."

           </p>

           <a href='#contact' className='btn btn-primary'>Let's Talk</a>

        </div>
      
      </div>
    </section>
  )
}

export default About