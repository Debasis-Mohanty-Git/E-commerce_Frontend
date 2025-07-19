import React from 'react'
import AdressCard from '../AdressCard/AdressCard'
import OrderTracker from './OrderTracker'
import { Box, Grid } from '@mui/material'
import { deepPurple } from '@mui/material/colors'
import { StarIcon } from '@heroicons/react/24/outline'
function OrderDetails() {
    return (
        <div className='lg:px-20 px-5 mt-7'>
            <div>
                <h1 className='font-bold text-lg'>Delivery address</h1>
                <AdressCard />
            </div>
            <div className='py-10'>
                <OrderTracker activeStep={3} />
            </div>

            <Grid container justifyContent="center" columnSpacing={2} rowSpacing={3}>
               {[1,1,1,1,1].map((item) =><Grid item xs={12} lg={8}>
                    <Box className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200">
                        <div className="flex flex-col md:flex-row items-start md:items-center gap-5 p-5">
                            {/* Product Image */}
                            <div className="flex-shrink-0">
                                <img
                                    src="https://rukminim2.flixcart.com/image/612/612/xif0q/short/z/7/l/l-ic-n2000-indiclub-original-imah3822gjfw9jxb.jpeg?q=70"
                                    alt="Product"
                                    className="w-[5rem] h-[5rem] md:w-[6rem] md:h-[6rem] rounded-lg object-cover object-top border"
                                />
                            </div>

                            {/* Product Info */}
                            <div className="flex-1 space-y-2 text-sm">
                                <p className="font-semibold text-gray-800 text-base">
                                    Solid Men Black, Blue Casual Shorts
                                </p>
                                <div className="text-gray-600">
                                    <span className="mr-4">Color: Pink</span>
                                    <span>Size: L</span>
                                </div>
                                <p className="text-lg font-bold text-green-700">₹199</p>
                            </div>
                        </div>

                        {/* Divider */}
                        <div className="border-t border-gray-200" />

                        {/* Rating Section */}
                        <div className="p-3 flex items-center gap-2 cursor-pointer hover:bg-purple-50 transition-all">
                            <StarIcon className="w-6 h-6 text-purple-600" />
                            <span className="text-sm font-medium text-purple-700">
                                Rate and Review Product
                            </span>
                        </div>
                    </Box>
                </Grid>)} 
               
            </Grid>


        </div>
    )
}

export default OrderDetails

