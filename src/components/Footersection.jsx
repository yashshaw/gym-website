import React from 'react'
import { TiSocialFacebook, TiSocialInstagram, TiSocialYoutube } from "react-icons/ti";
import { Link } from 'react-router-dom';
const Footersection = () => {
  return (
    <div className='flex space-x-4 pl-4' style={{position:"absolute", bottom:"0"}}>
        <Link target='_blank' to="https://facebook.com"><TiSocialFacebook className='text-2xl'/></Link>
        <Link target='_blank' to="https://instagram.com"><TiSocialInstagram className='text-2xl'/></Link>
        <Link target='_blank' to="https://youtube.com"><TiSocialYoutube className='text-2xl'/></Link>
    </div>
  )
}

export default Footersection