import React from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';
import AdressCard from '../AdressCard/AdressCard';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { createOrder } from '../../../State/Order/Action';

function DeliveryAdressForm() {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
   const data = new FormData(e.target);

    const address = {
      firstName: data.get("firstName"),
      lastName: data.get("lastName"),
      streetAddress: data.get("address"),
      city: data.get("city"),
      state: data.get("state"),
      zipCode: data.get("zip"),
      mobile: data.get("contactNo"),
    };

    const orderData = { address, navigate }
    dispatch(createOrder(orderData))
    console.log("Adress", orderData);

  }

  return (
    <Box sx={{ p: 1 }}>
      {/* Two-column layout */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          gap: 4,
        }}
      >
        {/* Left column - Address Card */}
        <Box
          sx={{
            border: '1px solid #ddd',
            borderRadius: 2,
            height: '30rem',
            overflowY: 'auto',
            p: 3,
            boxShadow: 1,
            width: {
              xs: '100%',
              sm: '100%',
              lg: '400px',
            },

            height: {
              lg: '450px',
            },
            flexShrink: 0,
          }}
        >
          <AdressCard />
          <Button
            sx={{ mt: 2 }}
            fullWidth
            size="large"
            variant="contained"
          >
            Deliver Here
          </Button>
        </Box>

        {/* Right column - Address Form */}
        <Box
          sx={{
            flex: 1,
            border: '1px solid #ddd',
            borderRadius: 2,
            p: 3,
            boxShadow: 1,
            height: {
              lg: '450px',
            },
          }}

        >
          <form onSubmit={handleSubmit}>
            <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
              <TextField
                required
                fullWidth
                label="First Name"
                name="firstName"
                sx={{ flex: '1 1 45%' }}
              />
              <TextField
                required
                fullWidth
                label="Last Name"
                name="lastName"
                sx={{ flex: '1 1 45%' }}
              />
              <TextField
                required
                fullWidth
                multiline
                rows={4}
                label="Address"
                name="address"
                sx={{ flex: '1 1 100%' }}
              />
              <TextField
                required
                fullWidth
                label="City"
                name="city"
                sx={{ flex: '1 1 45%' }}
              />
              <TextField
                required
                fullWidth
                label="State"
                name="state"
                sx={{ flex: '1 1 45%' }}
              />
              <TextField
                required
                fullWidth
                label="Zip / Postal Code"
                name="zip"
                sx={{ flex: '1 1 45%' }}
              />
              <TextField
                required
                fullWidth
                label="Contact No"
                name="contactNo"
                sx={{ flex: '1 1 45%' }}
              />
              <Button
                type="submit"
                variant="contained"
                size="large"
                sx={{ mt: 1, flex: '1 1 100%' }}
              >
                Deliver Here
              </Button>
            </Box>
          </form>
        </Box>
      </Box>
    </Box>
  );
}

export default DeliveryAdressForm;