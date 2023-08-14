import React from 'react'
import { Link } from 'react-router-dom'

const BackHome = () => {
  return (<div className="bg-[#e2e2e2] w-screen p-16  mb-8 ">
  <i className="flex flex-col items-center w-full">
    <Link to="/" className=" text-[#666666]">Home / Blog</Link>
    <h1 className="font-bold text-4xl ">Blog</h1>
  </i>
</div>
  )
}

export default BackHome