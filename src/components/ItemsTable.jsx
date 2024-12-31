import { useState } from 'react';
import { Search, Plus } from 'lucide-react';

const ItemsTable = ({ addedItems = [] }) => {
  console.log("addedItems", addedItems)
  const [isSubmitModalOpen, setSubmitModalOpen] = useState(false);
  const [isSuccessModalOpen, setSuccessModalOpen] = useState(false);

  const handleOpenSubmitModal = () => {
    setSubmitModalOpen(true);
  };

  const handleConfirmSubmit = () => {
    setSubmitModalOpen(false);
    setSuccessModalOpen(true);
  };

  const handleCloseSuccessModal = () => {
    setSuccessModalOpen(false);
  };

  return (
    <div className="mb-6">
      <h2 className="mb-3 text-sm font-medium">Items</h2>
      <div className="mb-4 flex items-center space-x-2">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Type to add an item"
            className="w-full rounded-l-md border px-10 py-2 focus:border-blue-500 focus:outline-none"
          />
        </div>
        <select className="rounded-md border px-4 py-2">
          <option>Select Collection</option>
        </select>
        <button className="rounded-md border bg-white px-4 py-2">Quick Add</button>
        <button className="flex items-center rounded-md border bg-white px-4 py-2">
          <Plus className="mr-2 h-4 w-4" />
          New Collection
        </button>
        <button className="rounded-md border bg-white px-4 py-2">Browse Items</button>
        <button
          className="rounded-md bg-blue-500 text-white px-4 py-2"
          onClick={handleOpenSubmitModal}
        >
          Submit
        </button>
      </div>
      <table className="w-full table-auto border-collapse">
        <thead>
          <tr className="border-b text-left text-sm text-gray-500">
            <th className="p-2">ITEM</th>
            <th className="p-2">ATB</th>
            <th className="p-2">QTY</th>
            <th className="p-2">Period</th>
            <th className="p-2">RATE</th>
            <th className="p-2">DISCOUNT</th>
            <th className="p-2">AMOUNT</th>
          </tr>
        </thead>
        <tbody>
          {addedItems?.length > 0 ? (
            addedItems?.map((item, index) => (
              <tr key={index} className="border-b">
                <td className="p-2">{item.name}</td>
                <td className="p-2">{item.atb}</td>
                <td className="p-2">{item.quantity}</td>
                <td className="p-2">{item.period}</td>
                <td className="p-2">{item.rate || " --"}</td>
                <td className="p-2">{item.discount || '20%'}</td>
                <td className="p-2">${item.totalPrice}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={7} className="p-4 text-center text-gray-400">
                No Item Selected
              </td>
            </tr>
          )}
        </tbody>
      </table>

      {/* Submit Modal */}
      {isSubmitModalOpen && addedItems?.length !== 0 && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="rounded-lg bg-white p-6">
            <h2 className="mb-4 text-lg font-semibold">Confirm Submission</h2>
            <p>Are you sure you want to submit the items?</p>
            <div className="mt-4 flex space-x-4">
              <button
                className="rounded-md bg-blue-500 text-white px-4 py-2"
                onClick={handleConfirmSubmit}
              >
                Confirm
              </button>
              <button
                className="rounded-md bg-gray-300 px-4 py-2"
                onClick={() => setSubmitModalOpen(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Success Modal */}
      {isSuccessModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="rounded-lg bg-white p-6">
            <h2 className="mb-4 text-lg font-semibold">Success</h2>
            <p>Your items have been successfully submitted!</p>
            <button
              className="mt-4 rounded-md bg-green-500 text-white px-4 py-2"
              onClick={handleCloseSuccessModal}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ItemsTable;
