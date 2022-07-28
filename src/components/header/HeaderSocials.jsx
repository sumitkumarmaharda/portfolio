import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {FaFacebook} from 'react-icons/fa'
import {BsSkype} from 'react-icons/bs'
const HeaderSocials = () => {
  return (
    <div className='header__socials'>
      <a href='https://www.linkedin.com/in/sumitkumarmaharda' target="_blank"><BsLinkedin /></a>

      <a href='https://www.github.com/sumitkumarmaharda' target="_blank"><FaGithub/></a>

      <a href='https://www.live:.cid.dc3e0aa15d8ba2eb' target="_blank"><BsSkype/></a>

    </div>
  )
}

export default HeaderSocials