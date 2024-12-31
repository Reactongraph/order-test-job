'use client';

import { Minus, Plus, ShoppingCart } from 'lucide-react';
import { useState } from 'react';

export default function ProductCard({ data = [], handleAddItem = () => { } }) {
  const [quantity, setQuantity] = useState(1);
  const [period, setPeriod] = useState('weekly');
  const [selectedData, setSelectedData] = useState([])
  const handleQuantityChange = (action) => {
    if (action === 'increase') {
      setQuantity((prev) => prev + 1);
    } else if (action === 'decrease' && quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  const calculateTotal = () => {
    if (period === 'weekly') {
      return (data?.weeklyPrice * quantity).toFixed(2)
    } else {
      return (data.price * quantity).toFixed(2);
    }

  };


  const handleAddData = () => {
    // Handle adding item to cart

    let product = {
      name: data?.name,
      quantity,
      period,
      totalPrice: calculateTotal(),
      invt: "availblable",
      rate: "$200",
      atb: "7",
      dicount: "20%"
    }
    handleAddItem(product)
  }

  return (
    <div className="">
      <div className="w-full max-w-md rounded-xl bg-white p-6 shadow-lg transition-all hover:shadow-xl">
        <div className="flex items-start space-x-4">
          {/* Product Image */}
          <div className="relative h-24 w-24 flex-shrink-0">
            {/* <div className="absolute -left-2 -top-2 z-10 rounded-full bg-red-500 p-1.5 text-[10px] font-semibold text-white">
              {data.isNew ? 'New' : ''}
            </div> */}
            <img
              src={data.image}
              alt={data.name}
              className="h-full w-full rounded-lg object-cover"
            />
          </div>

          {/* Product Details */}
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-gray-900">{data.name}</h3>

            {/* Pricing Information */}
            <div className="mt-1 space-y-1">
              <p className="text-sm text-gray-600">
                Monthly Price:{' '}
                <span className="font-medium text-gray-900">${data?.price?.toFixed(2)}</span>
              </p>
              <p className="text-sm text-gray-600">
                Weekly Price:{' '}
                <span className="font-medium text-gray-900">${data?.weeklyPrice?.toFixed(2)}</span>
              </p>
            </div>

            {/* Controls */}
            <div className="mt-4 flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <button
                  onClick={() => handleQuantityChange('decrease')}
                  className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-300 text-gray-600 transition-colors hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50"
                  disabled={quantity <= 1}
                >
                  <Minus className="h-4 w-4" />
                </button>
                <span className="min-w-[2rem] text-center font-medium">{quantity}</span>
                <button
                  onClick={() => handleQuantityChange('increase')}
                  className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-300 text-gray-600 transition-colors hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                  <Plus className="h-4 w-4" />
                </button>
              </div>

              <select
                value={period}
                onChange={(e) => setPeriod(e.target.value)}
                className="rounded-lg border border-gray-300 bg-white px-3 py-1.5 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
              >
                <option value="weekly">Weekly</option>
                <option value="monthly">Monthly</option>
              </select>
            </div>

            {/* Total Price */}
            <div className="mt-4 border-t pt-4">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-gray-600">Total Price:</span>
                <span className="text-lg font-semibold text-blue-600">
                  ${calculateTotal()}
                </span>
              </div>
              <p className="mt-1 text-xs text-gray-500">
                {period === 'weekly' ? 'Per Week' : 'Per Month'} × {quantity} {quantity === 1 ? 'unit' : 'units'}
              </p>
            </div>
            <button
              onClick={() => handleAddData()}
              className="mt-4 flex w-full items-center justify-center space-x-2 rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              <ShoppingCart className="h-4 w-4" />
              <span>Add Item</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
