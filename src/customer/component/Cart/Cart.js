import React, { useEffect } from 'react'
import Carditem from './Carditem'
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { gatCart } from '../../../State/Cart/Action';

function Cart() {
    const navigate=useNavigate();
    const dispatch=useDispatch();
    const {cart} =useSelector(store => store);

    const handleCheckout =()=>{
        navigate("/checkout?step=2")
    }

    useEffect(()=>{
        dispatch(gatCart());
    },[cart.updateCartItem,cart.deleteCartItem])

    return (
        <div className='lg:grid lg:px-16 grid-cols-3 relative'>
            <div className='col-span-2'>
                {cart.cart?.cartItem.map((item) => <Carditem  item={item}/>)}
            </div>
            <div className='px-5 py-4 sticky top-0 h-[100vh] mt-5 lg:mt-0'>
                <div className='border bg-gray-50 p-4 rounded-lg shadow-sm'>
                    <p className='uppercase font-bold opacity-40  text-center'>Price Details</p>
                    <hr />
                    <div className='space-y-3 font-semibold'>
                        <div className='flex justify-between pt-3 text-black'>
                            <span>Price({cart.cart?.totalItem})</span>
                            <span>₹{cart.cart?.totalPrice }</span>
                        </div>
                        <div className='flex justify-between pt-3 text-black'>
                            <span>Discount</span>
                            <span className='text-red-600'>- ₹{cart.cart?.discount}</span>
                        </div>
                        <div className='flex justify-between pt-3 text-black'>
                            <span>Delivery Charges</span>
                            <span className='text-green-600'>Free</span>
                        </div>
                        <hr />
                        <div className='flex justify-between pt-3 text-black'>
                            <span>Total Amount</span>
                            <span className='text-green-600'>₹{cart.cart?.totalDiscountPrice}</span>
                        </div>
                    </div>
                    <button onClick={handleCheckout} className='uppercase mt-6 w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition duration-300'>
                        Check out
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Cart
