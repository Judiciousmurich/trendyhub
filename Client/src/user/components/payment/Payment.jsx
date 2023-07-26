import axios from 'axios';
import React from 'react'

const Payment = ({cartItems}) => {
    const user = 1;
  const handleProceedToCheckout = () => {
    axios.post('http://localhost:8081/stripe', {
      userID: user,
      cartItems
  }).then((res) => {
      if (res.data.url) {
          window.location.href = res.data.url
      }
  }).catch((error => {
      console.log(error)
  }))
  };
    return (
        <div>

            <button
                className="bg-black text-white px-8 py-3 rounded mb-4 w-full"
                onClick={handleProceedToCheckout}
            >
                PROCEED TO CHECKOUT
            </button>
        </div>
    )
}

export default Payment