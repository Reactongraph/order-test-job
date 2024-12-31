
import { useState } from 'react';
import { Search, Filter, Plus, X } from 'lucide-react'
import ProductCard from './ProductCard';
const Sidebar = ({ items = [], selectedItem = '', selectedCategory = [], handleAddItem = () => { } }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const filteredItems = selectedItem?.filter((item) =>
    item?.name?.toLowerCase().includes(searchTerm?.toLowerCase())
  );
  return (
    <div className="h-full border-l bg-white p-4 w-full">
      <div className="sticky top-0 z-10 bg-white pb-4">
        <h2 className="mb-4 text-lg font-semibold text-gray-800">Available Items</h2>
        <div className="flex items-center justify-between">
          <button className="flex items-center rounded-md border border-gray-300 bg-white px-3 py-1 text-sm text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
            <Filter className="mr-2 h-4 w-4" />
            Filters
          </button>
          <div className="relative">
            <input
              type="text"
              placeholder="Search"
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-32 rounded-md border border-gray-300 pl-8 pr-3 py-1 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
            <Search className="absolute left-2 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
          </div>
        </div>
      </div>
      <span class="bg-green-100 text-green-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300">{selectedCategory !== '' ? selectedCategory : 'No'}</span>
      <div className="space-y-4 mt-4 h-[96vh] overflow-scroll element">
        {filteredItems?.length > 0 ? filteredItems?.map((item, index) =>
        (
          <div>
            <ProductCard data={item} key={index} handleAddItem={handleAddItem} />
          </div>


          // <div key={index} className="rounded-lg border border-gray-200 p-4 shadow-sm">
          //   <div className="flex items-start space-x-4">
          //     <img
          //       src={item.image}
          //       alt={item.name}
          //       className="h-16 w-16 rounded-md object-cover"
          //     />
          //     <div className="flex-1">
          //       <h3 className="font-medium text-gray-900">{item.name}</h3>
          //       <p className="text-sm text-gray-500">
          //         Monthly Price: ${item.price.toFixed(2)}
          //       </p>
          //       <p className="text-sm text-gray-500">
          //         Weekly Price: ${item.weeklyPrice.toFixed(2)}
          //       </p>
          //     </div>
          //   </div>
          //   <div className="mt-4 flex items-center justify-between">
          //     <button className="rounded-full border border-gray-300 p-1 text-gray-400 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
          //       <X className="h-4 w-4" />
          //     </button>
          //     {/* <span className="rounded-full border border-gray-300 px-2 py-1 text-xs text-gray-500">
          //       {item.period}
          //     </span> */}
          //     <select id="countries" class="p-2 border border-gray-300 text-gray-900 text-sm rounded-lg ">
          //       <option selected>Choose a Period</option>
          //       <option value="monthly">Monthly</option>
          //       <option value="weekly">Weekly</option>

          //     </select>
          //     <button className="rounded-full border border-gray-300 p-1 text-gray-400 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
          //       <Plus className="h-4 w-4" />
          //     </button>
          //   </div>
          // </div>
        )) : <p> Kindly select the category first</p>}
      </div>
    </div>
  );
};

export default Sidebar;
