import { Grid } from '@mui/material';
import React from 'react';
import AdjustOutlinedIcon from '@mui/icons-material/AdjustOutlined';
import { useNavigate } from 'react-router-dom';

function OrderCard() {
    const navigate=useNavigate();

    return (
        <div onClick={()=>navigate(`/account/order/${5}`)} className='p-5 shadow-lg hover:shadow-2xl border'>
            <Grid container spacing={2} sx={{ justifyContent: 'space-between' }}>
                <Grid item xs={12}>
                    <div className="flex items-start space-x-4 cursor-pointer">
                        {/* Image */}
                        <img
                            src="https://rukminim2.flixcart.com/image/612/612/xif0q/short/z/7/l/l-ic-n2000-indiclub-original-imah3822gjfw9jxb.jpeg?q=70"
                            alt="shorts"
                            className="w-[5rem] h-[5rem] object-cover object-top"
                        />

                        {/* Text Content */}
                        <div className="space-y-2">
                            <p>Solid Men Black, Blue Casual Shorts</p>
                            <p className="opacity-40 text-xs font-semibold">Size: L</p>
                            <p className="opacity-40 text-xs font-semibold">Color: Black</p>
                        </div>
                    </div>
                </Grid>

                <Grid item sx={4}>
                    <p>₹1999</p>
                </Grid>

                <Grid item sx={4}>
                    {true && <div>
                        <p>
                        <AdjustOutlinedIcon sx={{width:"15px", height:"15px"}} className='text-green-600 mr-2'/>
                        <span>Delevered on March 03</span>
                        <p className='text-xs'>
                            Your item has been Delevered
                        </p>
                    </p>
                        </div>
}
                    {false && <p>
                        <span>Expected delivery on March 03</span>
                    </p>}
                </Grid>

            </Grid>
        </div>
    );
}

export default OrderCard;