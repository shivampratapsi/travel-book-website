import { FaPlaneDeparture, FaPlaneArrival, FaCalendarAlt, FaUser } from "react-icons/fa";

export const Flights = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero Section */}
      <div className="relative h-72 w-full">
        <img
          src="https://www.savethestudent.org/uploads/flights.jpg"
          alt="Flight"
          className="w-full h-full object-cover brightness-75"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white">
          <h1 className="text-4xl font-bold">Book Your Flight</h1>
          <p className="text-lg">Find the best deals on flights worldwide</p>
        </div>
      </div>

      {/* Search Form */}
      <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-lg -mt-10 relative z-10">
        <h2 className="text-xl font-semibold mb-4">Search Flights</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="flex items-center border p-2 rounded-md">
            <FaPlaneDeparture className="text-gray-500 mr-2" />
            <input
              type="text"
              placeholder="From"
              className="w-full outline-none bg-transparent"
            />
          </div>
          <div className="flex items-center border p-2 rounded-md">
            <FaPlaneArrival className="text-gray-500 mr-2" />
            <input
              type="text"
              placeholder="To"
              className="w-full outline-none bg-transparent"
            />
          </div>
          <div className="flex items-center border p-2 rounded-md">
            <FaCalendarAlt className="text-gray-500 mr-2" />
            <input type="date" className="w-full outline-none bg-transparent" />
          </div>
          <div className="flex items-center border p-2 rounded-md">
            <FaUser className="text-gray-500 mr-2" />
            <input type="number" placeholder="Passengers" className="w-full outline-none bg-transparent" />
          </div>
          <button className="col-span-1 md:col-span-2 lg:col-span-3 bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition">
            Search Flights
          </button>
        </div>
      </div>

      {/* Flight Listings */}
      <div className="max-w-5xl mx-auto mt-10 p-6">
        <h2 className="text-2xl font-semibold mb-4">Available Flights</h2>
        <div className="space-y-4">
          {[1, 2, 3].map((flight, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow-md flex justify-between items-center">
              <div>
                <h3 className="text-lg font-semibold">Flight {index + 1}</h3>
                <p className="text-gray-600">From: New York ✈️ To: Los Angeles</p>
                <p className="text-gray-600">Departure: 10:30 AM | Arrival: 2:15 PM</p>
              </div>
              <div className="text-right">
                <p className="text-xl font-bold text-blue-600">$299</p>
                <button className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition">
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
