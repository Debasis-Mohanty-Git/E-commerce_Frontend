import React from 'react';

const steps = [
  "Placed",
  "Order Confirmed",
  "Shipped",
  "Out For Delivery",
  "Delivered",
];

const OrderTracker = ({ activeStep }) => {
  return (
    <div className="w-full flex flex-col items-center my-10">
      <div className="w-full max-w-5xl flex justify-between relative">
        {steps.map((label, index) => (
          <div key={index} className="flex-1 flex flex-col items-center relative">
            {/* Circle */}
            <div className={`w-6 h-6 z-10 rounded-full mb-1 
              ${index <= activeStep ? 'bg-purple-600' : 'bg-gray-300'}`}>
            </div>

            {/* Step Label */}
            <p className={`text-xs text-center mt-1 whitespace-nowrap 
              ${index <= activeStep ? 'text-purple-600 font-semibold' : 'text-gray-500'}`}>
              {label}
            </p>

            {/* Line */}
            {index !== steps.length - 1 && (
              <div className={`absolute top-[12px] left-[50%] right-[-50%] h-1 
                ${index < activeStep ? 'bg-purple-600' : 'bg-gray-300'}`}>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrderTracker;
