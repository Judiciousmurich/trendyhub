import React from 'react'

const Watches = () => {
  return (
    <>
      <div className="flex justify-between m-[2rem] p-[2rem] rounded-[7px] bg-green-400 text-white">
    <div className="">
        <p>20% OFF</p>
      <h1 className="text-5xl font-bold">HAPPY </h1>
      <h1 className="text-5xl font-bold">HOURSE</h1>
      <h6>15 Nov To 7 Dec</h6>
    </div>
    <div className="w-[50%]">
        <h5 className='text-[#ffff] font-bold'>Beats Solo Air</h5>
      <p className="font-bold">Summer Sale</p>
      <p>Company that’s grown from 270 to 480 employees in the last 12 months.</p>
      <button className="bg-white text-[#84e1aa] rounded-[50px] w-fit py-2 px-6">Shop</button>
    </div>
    <img className="absolute h-[50%] left-[20%] translate-y-[-55%] " src="https://demo.phlox.pro/shop-digital/wp-content/uploads/sites/127/2019/09/O6CCQV1.png" alt="" />
  </div>
  </>
  
  )
}

export default Watches