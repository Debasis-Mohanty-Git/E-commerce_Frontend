// Order.js
import React from 'react';
import OrderCard from './OrderCard';

const orderStatus = [
  { label: 'On The Way', value: 'on_the_way' },
  { label: 'Delivered', value: 'delivered' },
  { label: 'Cancel', value: 'cancel' },
  { label: 'Return', value: 'return' },
];

function Order() {
  return (
    <div className="mt-10 px-4 lg:px-15 max-w-7xl mx-auto">
      <div className="flex flex-col lg:flex-row lg:gap-6 items-start">
        {/* Left Box - Filter */}
        <div className="w-full lg:w-3/12 bg-white shadow-md rounded-md p-6 lg:sticky top-5 mb-6 lg:mb-0 max-h-[80vh] overflow-y-auto">
          <div className="space-y-4">
            <h2 className="uppercase font-extrabold text-sm text text text-center">Order Status</h2>
            {orderStatus.map((option, idx) => (
              <div className="flex items-center" key={idx}>
                <input
                  type="checkbox"
                  defaultValue={option.value}
                  id={option.value}
                  className="h-4 w-4 text-indigo-600 border-gray-400 focus:ring-indigo-500"
                />
                <label htmlFor={option.value} className="ml-3 text-sm text-gray-600">
                  {option.label}
                </label>
              </div>
            ))}
          </div>
        </div>

        {/* Right Box - Order Cards */}
        <div className="w-full lg:w-9/12 space-y-5">
            {[1,1,1,1,1].map((item)=> <OrderCard />)}
        </div>
      </div>
    </div>
  );
}

export default Order;