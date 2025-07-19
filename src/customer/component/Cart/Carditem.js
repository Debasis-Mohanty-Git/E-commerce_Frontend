import IconButton from '@mui/material/IconButton'
import React from 'react'
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { Button } from '@mui/material';
import { useDispatch } from 'react-redux';
import { removeCartItem, updateCartItem } from '../../../State/Cart/Action';
function Carditem({ item }) {

    const dispatch = useDispatch();

    const cartItemUpdata = (num) => {
    const updatedQuantity = item.quantity + num;

    // Optional: prevent invalid quantity update at function level
    if (updatedQuantity < 1) return;

    dispatch(updateCartItem(item.id, updatedQuantity));
};


    const handleRemoveCartItem = () => {
        dispatch(removeCartItem(item.id));
    }
    return (
        <div className="p-6 m-4 shadow-xl border border-gray-200 rounded-lg bg-white">
            <div className="flex items-center space-x-6">
                {/* Image container */}
                <div className="w-[5rem] h-[5rem] lg:w-[9rem] lg:h-[9rem] rounded overflow-hidden">
                    <img
                        className="w-full h-full object-cover object-top"
                        src={item.product?.imageUrl}
                        alt="product"
                    />
                </div>

                {/* Text content */}
                <div className="ml-5 space-y-1">
                    <p className="text-lg font-semibold text-gray-900">{item.product?.title}</p>
                    <p className="text-sm text-gray-600">Size: {item.size}</p>
                    <p className="text-sm text-gray-600">Seller: {item.product?.brand},{item.product?.color}</p>
                    <div className="flex space-x-5 items-center text-gray-900 pt-4">
                        <p className="font-semibold text-lg">₹{item.product?.discountedPrice}</p>
                        <p className="line-through text-sm text-gray-500">₹{item.product?.price}</p>
                        <p className="text-green-600 text-sm font-medium">{item.product?.discountPresent}% off</p>
                    </div>
                </div>
            </div>

            <div className='lg:flex items-center lg:space-x-10 pt-4'>
                <div className='flex items-center space-x-2'>
                    <IconButton onClick={() => cartItemUpdata(-1)}
                        disabled={item.quantity <= 1}
                        sx={{ color: "red", '&:hover': { bgcolor: 'rgba(255,0,0,0.1)' } }}>
                        <RemoveCircleOutlineIcon />
                    </IconButton>
                    <span className='py-1 px-7 border rounded-sm bg-gray-100'>{item.quantity}</span>
                    <IconButton onClick={() => cartItemUpdata(1)}
                        sx={{ color: "green", '&:hover': { bgcolor: 'rgba(34,197,94,0.1)' } }}>

                        <AddCircleOutlineIcon />
                    </IconButton>
                </div>

                <div>
                    <Button onClick={handleRemoveCartItem}
                        className='text-violet-700 font-semibold'>REMOVE</Button>
                </div>
            </div>
        </div>
    )
}

export default Carditem
