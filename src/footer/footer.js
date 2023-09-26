import React from 'react'
//import { BsTwitter } from "react-icons/bs";
//import { SiLinkedin } from "react-icons/si";
import { BsYoutube } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
//import DeleteIcon from '@mui/icons-material/Delete';
import twitterimg from '../assests/assests/ic/Twitter-icon.png'

const Footer = () => {
  return (
    <div>

<div className="footer-wrapper">
      <div className="">
        <div className="">
          <img src={twitterimg} alt='none'></img>
          <BsYoutube />
          <FaFacebookF />
        </div>
      </div>
      <div className="footer-section-two">
        <div className="text-white" color='white'>
          <span>Qualtiy</span>
          <span>Help</span>
          <span>Share</span>
          <span>Carrers</span>
          <span>Testimonials</span>
          <span>Work</span>
        </div>
        <div className="text-white">
          <span>+91-9789991234</span>
          <span>Elive@dress.com</span>
          <span>dress@Elive.com</span>
          <span>contact@Elive.com</span>
        </div>
        <div className="text-white">
          <span>Terms & Conditions</span>
          <span>Privacy Policy</span>
        </div>
      </div>
      </div>
      
    </div>
  )
}

export default Footer;