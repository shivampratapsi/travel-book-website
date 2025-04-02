import { useNavigate } from "react-router-dom";
import { MdLogin } from "react-icons/md";
import { useContext } from "react";
import { HotelListContext } from "../store/hotelStore";

const WelcomePage = () => {
  const navigate = useNavigate();
  const {getUserdata} = useContext(HotelListContext);
  
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 text-white text-center">
      {/* Hero Section */}
      <h1 className="text-4xl font-extrabold mb-4 animate-fade-in">Hey Traveler! </h1>
      <b className="text-lg">Welcome to TravelBooking Website - Your Gateway to Amazing Journeys</b>

      {/* Subtext */}
      <p className="mt-3 text-lg max-w-xl">
        Explore breathtaking destinations, find luxurious stays, and book unforgettable adventures—all in one place.  
      </p>
      {/* Login Button */}
      <button
        onClick={() => navigate("/login/false")}
        className="mt-6 flex items-center gap-2 bg-white text-blue-600 px-6 py-3 font-semibold text-lg rounded-lg shadow-lg hover:bg-gray-100 transition duration-300"
      >
        Login <MdLogin size={24} />
      </button>

      {/* Additional Content */}
      <div className="mt-10 w-3/4">
        <h2 className="text-2xl font-bold">Why Choose us?</h2>
        <ul className="mt-3 space-y-2 text-gray-200">
          <li> Best Price Guarantee on Hotels & Flights</li>
          <li> Hassle-Free Bookings & Cancellations</li>
          <li> 24/7 Customer Support for a Smooth Experience</li>
        </ul>
      </div>
    </div>
  );
};

export default WelcomePage;
