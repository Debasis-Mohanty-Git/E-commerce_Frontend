import React, { useEffect } from 'react'
import AddressCard from '../AdressCard/AdressCard'
import Carditem from '../Cart/Carditem'
import { useDispatch, useSelector } from 'react-redux';
import { findProductsById } from '../../../State/Product/Action';
import { useLocation } from 'react-router-dom';
import { createPayment } from '../../../State/Payment/Action';

function OrderSummary() {
  const dispatch = useDispatch();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const orderId = searchParams.get("order_id")
  const { order } = useSelector(store => store)

  useEffect(() => {
    dispatch(findProductsById(orderId))
  }, [orderId])

  const handleCheckOut=()=>{
    dispatch(createPayment(orderId))
  }
  return (
    <div>
      <div className='lg:grid lg:px-16 grid-cols-3 relative'>
        <div className='col-span-2'>
          {order.order?.orderItems.map((item) => <Carditem item={item} />)}
        </div>
        <div className='px-5 py-4 sticky top-0 h-[100vh] mt-5 lg:mt-0'>
          <div className='border bg-gray-50 p-4 rounded-lg shadow-sm'>
            <p className='uppercase font-bold opacity-40  text-center'>Price Details</p>
            <hr />
            <div className='space-y-3 font-semibold'>
              <div className='flex justify-between pt-3 text-black'>
                <span>Price</span>
                <span>₹{order.order?.totalPrice}</span>
              </div>
              <div className='flex justify-between pt-3 text-black'>
                <span>Discount</span>
                <span className='text-red-600'>- ₹{order.order?.discount}</span>
              </div>
              <div className='flex justify-between pt-3 text-black'>
                <span>Delivery Charges</span>
                <span className='text-green-600'>Free</span>
              </div>
              <hr />
              <div className='flex justify-between pt-3 text-black'>
                <span>Total Amount</span>
                <span className='text-green-600'>₹{order.order?.totalDiscountedPrice}</span>
              </div>
            </div>
            <button 
            onClick={handleCheckOut}
            className='uppercase mt-6 w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition duration-300'>
              Checkout
            </button>
          </div>
          <br></br>
          <div className='p-5 shadow-lg rounded-s-md border'>
            <AddressCard  address={order.order?.shippingAddress}/>
          </div>
        </div>

      </div>
    </div>
  )
}

export default OrderSummary
