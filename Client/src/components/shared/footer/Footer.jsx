import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='flex justify-between m-[2rem]'>
      <div className='flex flex-col gap-2'>
        <Link className='text-[#f77b82] font-bold tracking-widest mb-5'>TRENDYHUB</Link>
       <p className='mb-5 text-[#d7d7d7]'>There are many variations passages of,<br/> Lorem Ipsum available, but the majority have</p>
       <p className='flex gap-5'><FaFacebook/><FaInstagram/> <FaLinkedin/><FaTwitter/></p>
    
      </div>
      <div className='flex flex-col gap-2'>
        <Link className='font-bold mb-3'> Quick Links</Link>
        <Link>Home</Link>
        <Link>About</Link>
        <Link>Shop</Link>
        <Link>Contact</Link>
      </div>
      <div className='flex flex-col gap-2'>
        <Link className='font-bold'>Contact</Link>
        <Link>+254 101 0000 888 Judicious </Link>
        <Link>Kirinyaga  </Link>
        <Link>Kerugoya</Link>
        <Link>76051</Link>
      </div>
      <div className='flex flex-col gap-2'>
        <Link className='font-bold'>Subscribe To Our Email</Link>
        <h1 className='font-bold text-4xl'>For Latest News & <br/>Updates</h1>
        <input type="search"placeholder='Enter Your Email' />
        <Link>Link</Link>
      </div>
    </div>
  )
}

export default Footer