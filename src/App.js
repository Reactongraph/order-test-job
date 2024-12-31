import React, { useState } from 'react'
import Transactions from './components/Transactions';
import OrderShortcuts from './components/OrderShortcuts';
import ItemsTable from './components/ItemsTable';
import Sidebar from './components/Sidebar';
import { availableItems, shortcuts } from './utils/constant';

export default function App() {
  const [selectedItem, setSelectedItem] = useState(null)
  const [selectedCategory, setSelectedCategory] = useState('')
  const [addedItems, setAddedItems] = useState([])
  const handleAddItem = (item) => {
    setAddedItems((prevItems) => [...prevItems, item]);
  };
  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className='flex w-full gap-[20px]'>
        <div className='w-[90%]'>
          <Transactions />
          <OrderShortcuts shortcuts={shortcuts} setSelectedCategory={setSelectedCategory} setSelectedItem={setSelectedItem} />
          <ItemsTable addedItems={addedItems} />
        </div>
        <div className='w-[40%]'>
          <Sidebar items={availableItems} selectedItem={selectedItem} selectedCategory={selectedCategory} handleAddItem={handleAddItem} />
        </div>
      </div>
    </div>
  );
}
