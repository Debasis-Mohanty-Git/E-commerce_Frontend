import { Avatar, Box } from '@mui/material'
import Grid from '@mui/material/Grid'
import Rating from '@mui/material/Rating'
import React from 'react'

const ProductReviewCard = () => {
    return (
        <div>
            <Grid container spacing={2} gap={3}>
                <Grid item xs={3}>
                    <Box>
                        <Avatar className='text-white' sx={{ width: 56, height: 56, bgcolor: "#9155fd" }}>
                            R
                        </Avatar>
                    </Box>
                </Grid>

                <Grid item xs={9}>
                    <div className='space-y-2'>
                        <div>
                            <p className='font-semibold'>Ram</p>
                            <p className='opacity-50 '>April 5,2025</p>
                        </div>
                    </div>
                    <Rating value={4.2} name='average-rating' readOnly precision={0.5}/>
                    <p className='opacity-50'>Nice Product,I love this product material</p>
                </Grid>
            </Grid>
        </div>
    )
}

export default ProductReviewCard
