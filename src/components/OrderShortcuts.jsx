import React, { useState } from "react";

const OrderShortcuts = ({ shortcuts = [], setSelectedCategory = () => { }, setSelectedItem = () => { } }) => {
    const [activeIndex, setActiveIndex] = useState(null);
    const handleSelectedData = (name = '', data = [], index) => {
        setSelectedCategory(name)
        setSelectedItem(data)
        setActiveIndex(index);
    }
    return (
        <div className="mb-8 rounded-lg bg-white p-6 shadow-md mt-3">
            <h2 className="mb-4 text-xl font-semibold text-gray-800">Order Shortcuts</h2>
            <div className="flex space-x-4 overflow-x-auto pb-4">
                {shortcuts.map((shortcut, index) => (
                    <button
                        key={index}
                        className={`flex flex-col items-center space-y-2 rounded-lg border p-4 transition-colors ${activeIndex === index
                            ? 'border-blue-500 bg-blue-50 text-blue-700'
                            : 'border-gray-200 bg-white text-gray-700 hover:bg-gray-50'
                            }`}
                        onClick={() => handleSelectedData(shortcut?.name, shortcut?.items, index)}
                    >
                        <img
                            src={shortcut.image}
                            alt={shortcut.name}
                            className="h-12 w-12 rounded-md object-cover"
                        />
                        <span className="text-center text-xs">{shortcut.name}</span>
                    </button>
                ))}
            </div>
        </div>
    );
};

export default OrderShortcuts;
