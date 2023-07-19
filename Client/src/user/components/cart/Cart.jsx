import { Link } from 'react-router-dom'
import './cart.css'
import Clients from '../../../shared/Clients'
import Product from '../product/Product'

const Cart = () => {
  return (
    <>

      <div className='cart'>
        <div>
          <div className="flex  gap-10 cursor-pointer select align-middle">
            <div className=' rounded-[5px]  h-[10rem]'>
              <img className='rounded-[10px] h-full object-contain mb-4' src="https://demo.phlox.pro/shop-digital/wp-content/uploads/sites/127/2019/09/Group-1269-935x701.jpg" alt="product" />
            </div>

           <div >
           <h3 className="font-bold  hover:text-red-500 transition-all duration-300">
              Rocky Mountain
            </h3>
            <p className="relative inline-block group font bold">
              <span className="font-bold ">
                $8,250
              </span>
              </p>
           </div>

      


          </div>
        </div>
        <div>
          <h3 className='font-bold mb-4 hover:text-red-500 cursor-pointer'>cart summarry</h3>
          <hr />
          <div>
            <p className='mb-4 font bold'>Total Price:</p>
            <p className='font-bold '>$0.000</p>
          </div>
        </div>
      </div>
      <hr/>

    </>

  )
}

export default Cart