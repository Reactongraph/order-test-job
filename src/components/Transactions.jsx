import { ChevronDown, Calendar, Clock, ChevronUp } from 'lucide-react'
import { useState } from 'react'

const Transactions = () => {
    const [isExpanded, setIsExpanded] = useState(false)
    return (
        <div className="bg-gray-50">
      <div className="rounded-lg bg-white p-8 shadow-sm">
        <h2 className="mb-6 text-xl font-semibold text-gray-800">Transaction Details</h2>
        
        <div className={`space-y-6 ${isExpanded ? '' : 'max-h-[80px] overflow-hidden'}`}>
          {/* First Row */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-5">
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">
                Transaction Type<span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <select 
                  defaultValue="Rental Agreement"
                  className="w-full appearance-none rounded-md border border-gray-300 bg-white px-3 py-2 pr-10 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                >
                  <option>Rental Agreement</option>
                </select>
                <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">
                Customer<span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <select 
                  defaultValue="California Construction Co."
                  className="w-full appearance-none rounded-md border border-gray-300 bg-white px-3 py-2 pr-10 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                >
                  <option>California Construction Co.</option>
                </select>
                <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">
                Rental Start Date<span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <input
                  type="text"
                  defaultValue="04/11/2024"
                  className="w-full rounded-md border border-gray-300 px-3 py-2 pr-10 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
                <Calendar className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">Rental End Date</label>
              <div className="relative">
                <input
                  type="text"
                  defaultValue="03/11/2025"
                  className="w-full rounded-md border border-gray-300 px-3 py-2 pr-10 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
                <Calendar className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">Duration</label>
              <input
                type="text"
                defaultValue="12"
                className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
            </div>
          </div>

          {/* Second Row */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">Project</label>
              <div className="relative">
                <select 
                  defaultValue="California Construction"
                  className="w-full appearance-none rounded-md border border-gray-300 bg-white px-3 py-2 pr-10 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                >
                  <option>California Construction</option>
                </select>
                <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">Sub-Project</label>
              <div className="relative">
                <select 
                  defaultValue="Select"
                  className="w-full appearance-none rounded-md border border-gray-300 bg-white px-3 py-2 pr-10 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                >
                  <option>Select</option>
                </select>
                <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">
                Planned Ship Date<span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <input
                  type="text"
                  defaultValue="11/4/2024"
                  className="w-full rounded-md border border-gray-300 px-3 py-2 pr-10 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
                <Calendar className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">Transaction Date</label>
              <div className="relative">
                <input
                  type="text"
                  className="w-full rounded-md border border-gray-300 px-3 py-2 pr-10 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
                <Calendar className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
              </div>
            </div>
          </div>

          {/* Installation Times */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">Installation Start</label>
              <div className="relative">
                <input
                  type="text"
                  className="w-full rounded-md border border-gray-300 px-3 py-2 pr-24 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
                <div className="absolute right-0 top-0 flex h-full items-center space-x-2 px-3">
                  <Clock className="h-4 w-4 text-gray-400" />
                  <span className="text-sm text-gray-500">All Day</span>
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">Installation End</label>
              <div className="relative">
                <input
                  type="text"
                  className="w-full rounded-md border border-gray-300 px-3 py-2 pr-24 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
                <div className="absolute right-0 top-0 flex h-full items-center space-x-2 px-3">
                  <Clock className="h-4 w-4 text-gray-400" />
                  <span className="text-sm text-gray-500">All Day</span>
                </div>
              </div>
            </div>
          </div>

          {/* Event Times */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">Event Start</label>
              <div className="relative">
                <input
                  type="text"
                  className="w-full rounded-md border border-gray-300 px-3 py-2 pr-24 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
                <div className="absolute right-0 top-0 flex h-full items-center space-x-2 px-3">
                  <Clock className="h-4 w-4 text-gray-400" />
                  <span className="text-sm text-gray-500">All Day</span>
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">Event End</label>
              <div className="relative">
                <input
                  type="text"
                  className="w-full rounded-md border border-gray-300 px-3 py-2 pr-24 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
                <div className="absolute right-0 top-0 flex h-full items-center space-x-2 px-3">
                  <Clock className="h-4 w-4 text-gray-400" />
                  <span className="text-sm text-gray-500">All Day</span>
                </div>
              </div>
            </div>
          </div>

          {/* Subsidiary & Location */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">
                Subsidiary<span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <select 
                  defaultValue="SCD Machines & Dynamics"
                  className="w-full appearance-none rounded-md border border-gray-300 bg-white px-3 py-2 pr-10 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                >
                  <option>SCD Machines & Dynamics</option>
                </select>
                <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">
                Location<span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <select 
                  defaultValue="California"
                  className="w-full appearance-none rounded-md border border-gray-300 bg-white px-3 py-2 pr-10 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                >
                  <option>California</option>
                </select>
                <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
              </div>
            </div>
          </div>

          {/* Sales Representative & Pickup/Removal Times */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">Sales Representative</label>
              <div className="relative">
                <select 
                  defaultValue="Michelle Lim"
                  className="w-full appearance-none rounded-md border border-gray-300 bg-white px-3 py-2 pr-10 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                >
                  <option>Michelle Lim</option>
                </select>
                <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">Pickup/Removal Start</label>
              <div className="relative">
                <input
                  type="text"
                  className="w-full rounded-md border border-gray-300 px-3 py-2 pr-24 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
                <div className="absolute right-0 top-0 flex h-full items-center space-x-2 px-3">
                  <Clock className="h-4 w-4 text-gray-400" />
                  <span className="text-sm text-gray-500">All Day</span>
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">Pickup/Removal End</label>
              <div className="relative">
                <input
                  type="text"
                  className="w-full rounded-md border border-gray-300 px-3 py-2 pr-24 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
                <div className="absolute right-0 top-0 flex h-full items-center space-x-2 px-3">
                  <Clock className="h-4 w-4 text-gray-400" />
                  <span className="text-sm text-gray-500">All Day</span>
                </div>
              </div>
            </div>
          </div>

          {/* Venue */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">Venue</label>
            <div className="relative">
              <select 
                defaultValue="Select"
                className="w-full appearance-none rounded-md border border-gray-300 bg-white px-3 py-2 pr-10 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
              >
                <option>Select</option>
              </select>
              <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
            </div>
          </div>

          {/* Addresses */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">Shipping Address</label>
              <div className="rounded-md border border-gray-300 bg-gray-50 p-4">
                <p className="text-sm text-gray-700">4590 MacArthur Blvd #500</p>
                <p className="text-sm text-gray-700">California Construction Company</p>
                <p className="text-sm text-gray-700">4590 MacArthur Blvd #500</p>
                <p className="text-sm text-gray-700">Newport Beach, 91238</p>
                <p className="text-sm text-gray-700">United States</p>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">Billing Address</label>
              <div className="rounded-md border border-gray-300 bg-gray-50 p-4">
                <p className="text-sm text-gray-700">232 Wentworth Ave. 25th</p>
                <p className="text-sm text-gray-700">ACE Hardware</p>
                <p className="text-sm text-gray-700">311 Amber St</p>
                <p className="text-sm text-gray-700">Suite #1</p>
                <p className="text-sm text-gray-700">Markham ON L3R 3J7</p>
                <p className="text-sm text-gray-700">Canada</p>
              </div>
            </div>
          </div>
        </div>

        {/* Show More/Less Button */}
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="mt-6 flex items-center gap-2 text-sm font-medium text-blue-600 hover:text-blue-700"
        >
          {isExpanded ? (
            <>
              Show Less
              <ChevronUp className="h-4 w-4" />
            </>
          ) : (
            <>
              Show More
              <ChevronDown className="h-4 w-4" />
            </>
          )}
        </button>
      </div>
    </div>
    );
};

export default Transactions;
