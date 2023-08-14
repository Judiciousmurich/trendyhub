import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import Terms from '../Terms'

const Footer = () => {
  return (
    <>
    <div className='sm:flex justify-between m-[2rem]'>
      <div className='flex flex-col gap-2'>
        <Link className='text-[#f77b82] font-bold tracking-widest mb-5'>TRENDYHUB</Link>
        <p className='mb-5 text-[#8e8d8d]'>There are many variations passages of,<br /> Lorem Ipsum available, but the majority have</p>
        <p className='flex gap-5'><FaFacebook /><FaInstagram /> <FaLinkedin /><FaTwitter /></p>

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
      <div className=" grid">
        <h3 className="font-bold">Subscribe To Our Email</h3>
        <p className="font-bold">
          For Latest News & Updates
        </p>
        <div className="flex bg-[#ededed]  p-3 rounded-[50px]">
          <input
            type="email"
            placeholder="Enter Your Email"
            className=" bg-[#ededed]  "
          />
          <button className="bg-[#f42c37] rounded-[50px] py-1 px-6  text-[#ffffff]  ">
            Subscribe
          </button>
        </div>
      </div>
    </div>
    <Terms/>
    </>
  )
}

export default Footer