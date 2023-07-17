import { Link } from 'react-router-dom'
import './cart.css'
import Clients from '../../../shared/Clients'

const Cart = () => {
  return (
    <>
    <div className="bg-[#e2e2e2] w-screen p-16  mb-8 ">
    <i className="flex flex-col items-center w-full">
      <Link to="/" className=" text-[#666666]">Home / Cart</Link>
      <h1 className="font-bold text-4xl ">Cart</h1>
    </i>
  </div>
    <div className='cart'>
      <div>
        <img className="h-[5rem]" src="https://cdn.pixabay.com/photo/2013/07/13/12/17/headphone-159569_1280.png" alt="" />
        <img src="" alt="" />
      </div>
      <div>
        <h3>cart summarry</h3>
        <hr />
        <div>
          <p>Total Price:</p>
          <p>$0.000</p>
        </div>
      </div>
    </div>
    <Clients/>
    </>
   
  )
}

export default Cart