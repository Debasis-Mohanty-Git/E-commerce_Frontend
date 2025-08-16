import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { updatePayment } from '../../../State/Payment/Action';
import { Alert, AlertTitle, Grid, Paper, Typography } from '@mui/material';
import OrderTracker from '../Order/OrderTracker';
import { getOrderById } from '../../../State/Order/Action';
import AddressCard from '../AdressCard/AdressCard';

const PaymentSuccess = () => {
  const [paymentId, setPaymentId] = useState();
  const [paymentStatus, setPaymentStatus] = useState();
  const { orderId } = useParams();
  const dispatch = useDispatch();

  // ✅ Correct: Access order reducer properly
  const { order } = useSelector((store) => store.order);

  // ✅ Correct logging
  console.log("Order from Redux:", order);

  useEffect(() => {
    const urlParam = new URLSearchParams(window.location.search);
    setPaymentId(urlParam.get("razorpay_payment_id"));
    setPaymentStatus(urlParam.get("razorpay_payment_link_status"));
  }, []);

  useEffect(() => {
    const data = { orderId, paymentId };
    if (orderId && paymentId) {
      dispatch(getOrderById(orderId));
      dispatch(updatePayment(data));
    }
  }, [orderId, paymentId]);

  return (
    <div className='px-2 lg:px-36'>
      <div className='flex flex-col justify-center items-center'>
        <Alert
          variant='filled'
          severity='success'
          sx={{ mb: 6, width: "fit-content" }}
        >
          <AlertTitle>Payment Success</AlertTitle>
          Congratulations! Your order has been placed.
        </Alert>
      </div>

      <OrderTracker activeStep={1} />

      <Grid container spacing={4} className='py-10'>
        {order?.orderItems?.map((item, index) => (
          <Grid item xs={12} sm={6} md={12} key={index}>
            <Paper elevation={3} className='p-4'>
              <Grid container spacing={2} direction="column">
                {/* Product Image and Info */}
                <Grid item>
                  <Grid container spacing={2}>
                    <Grid item>
                      <img
                        src={item.product.imageUrl}
                        alt="Product"
                        className="w-20 h-20 object-cover rounded"
                      />
                    </Grid>
                    <Grid item xs>
                      <Typography variant="subtitle1" fontWeight="bold">
                        {item.product.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Color: {item.color}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Size: {item.size}
                      </Typography>
                      <Typography variant="body2">
                        Seller: {item.product.brand}
                      </Typography>
                      <Typography variant="h6">₹{item.price}</Typography>
                    </Grid>
                  </Grid>
                </Grid>

                {/* AddressCard */}
                <Grid item>
                  <AddressCard address={order?.shippingAddress} />
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default PaymentSuccess;
