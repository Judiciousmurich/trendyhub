import React from 'react'
import { Link } from 'react-router-dom'

const Headphones = () => {
  return (
    <>
        <div className="flex justify-between m-[2rem] p-[3rem] rounded-[7px] bg-[#f42c37] text-white ">
    <div className="">
        <p>20% OFF</p>
        <h1 className="text-5xl font-bold mb-3">FINE <span>SMILE </span></h1>
      <h6>15 Nov To 7 Dec</h6>
    </div>
    <div className="w-[50%]">
        <h5 className='text-[#ffff] font-bold text-2xl'>Beats Solo Air</h5>
      <p className="font-bold text-5xl">Summer Sale</p>
      <p className='mb-4'>Company that’s grown from 270 to 480 employees in the last 12 months.</p>
      <button className="bg-white text-[#f54851] rounded-[50px] w-fit py-2 px-6 "><Link to ='/products'>Shop</Link></button>
     
    </div>
    <img className="absolute h-[50%] left-[25%] translate-y-[-55%] " src="https://demo.phlox.pro/shop-digital/wp-content/uploads/sites/127/2019/09/2.png" alt="" />
  </div>
  </>
  )
}

export default Headphones