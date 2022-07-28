import React from 'react'
import './testimonials.css'

import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'

import { Pagination} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';



const data = [
   {
      // avatar: AVTR1,
      name : 'Dr. A.P.j Abdul Kalam',
      review:  '"Failure will never overtake me if my determination to succeed is strong enough."'
    },

    {
      // avatar: AVTR2,
      name : 'Sardar Vallabhbhai Patel',
      review:  ' “We have tried to overcome our weaknesses honestly and in a definite manner. The proof, if any proof is needed, is Hindu-Muslim unity.”'
    },

    {
      // avatar: AVTR3,
      name : 'Chandershekhar Azad',
      review:  ' Don’t see others doing better than you, beat your records every day because success is a fight between you and yourself.'
    },

    {
      // avatar: AVTR4,
      name : 'Jawaharlal Nehru',
      review:  '“Facts are facts and will not disappear on account of your likes.”'
    },
]


const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from clients</h5>
      <h2>Inspiration</h2>

      <Swiper className="container testimonials__container"
      // install Swiper modules
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true } }>
      {
           data.map(({avatar, name, review}, index) => {
          return (
              <SwiperSlide key={index} className='testimonial'>
              <div className='client__avatar'>
                  <img src={avatar} />
              </div>
              <h5 className='client__name'>{name}</h5>
                  <small className='client__review'>
                  {review}
                  </small>
          </SwiperSlide>
             )
           })  
      }  
      </Swiper>
    </section>
  )
}

export default Testimonials