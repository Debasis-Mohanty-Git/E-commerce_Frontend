import React from 'react';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CallIcon from '@mui/icons-material/Call';

function AddressCard({address}) {
  if (!address) return null; 
  return (
    <div style={{
      padding: '1.5rem',
      maxWidth: '300px',
      border: '1px solid #ccc',
      borderRadius: '10px',
      boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
      fontFamily: 'Arial, sans-serif',
      backgroundColor: '#fdfdfd'
    }}>
      <h2 style={{ margin: '0 0 1rem 0', color: '#333', fontWeight: 'bold' }}>{address.firstName} {address.lastName}</h2>
      <p style={{ margin: '0.5rem 0',opacity:0.5}}>
        <LocationOnIcon />
        {address.streetAddress},{address.zipCode}
      </p>

      <p style={{ margin: '0.5rem 0',opacity:0.5 }}>
        <CallIcon />
         {address.mobile}
      </p>
    </div>
  );
}

export default AddressCard;