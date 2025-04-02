import { useEffect, useState } from "react";
import { toast } from "react-toastify";
export const Bookings = () => {
  const [bookings, setBookings] = useState([]);
  const [bookedHotels, setBookedHotels] = useState([]);
  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const res = await fetch("http://localhost:8000/getMyBookings", {
          method: "GET",
          headers: { "Content-Type": "application/json" },
          credentials: "include",
        });

        const data = await res.json();

        setBookings(Array.isArray(data.hotels) ? data.hotels : []);
        
      } catch (error) {
        toast.error("Error in fetching bookings: " + error.message);
      }
    };

    fetchBookings();
  }, []);

  const handleCancelBooking = async (hotelId) => {
    try {
      console.log(" Cancel booking called for hotelId", hotelId);
    const res =   await fetch(`http://localhost:8000/cancel-booking/${hotelId}`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
      })
    const data = await res.json();
    console.log(data);
    if(data.success){
      toast("Booking cancelled successfully");
    }   
    } catch (error) {
      toast.error("Error in cancelling booking: ");
    }
  };

  useEffect(() => {
    const fetchHotelDetails = async () => {
      if (bookings.length === 0) return;

      try {
        const hotelPromises = bookings.map(async (hotelId) => {
          const res = await fetch(
            `http://localhost:8000/get-hotel-by-id/${hotelId}`
          );
          const data = await res.json();
          return data.hotel;
        });

        const bookedHotelsData = await Promise.all(hotelPromises);
        setBookedHotels(bookedHotelsData);
      } catch (error) {
        toast.error("Error in fetching hotel details: " + error.message);
      }
    };

    fetchHotelDetails();
  }, [bookings]);
  return (
    <>
      <div className="p-6">
        {bookedHotels.length === 0 ? (
          <p className="text-center text-gray-600 text-lg">No Bookings</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {bookedHotels.map((hotel) => (
              <div
                key={hotel._id}
                className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col"
              >
                <img
                  src={hotel.imageUrl || "https://via.placeholder.com/300"}
                  alt={hotel.name}
                  className="w-full h-40 object-cover"
                />
                <div className="p-4 flex-grow">
                  <h2 className="text-xl font-semibold text-gray-800">
                    {hotel.name}
                  </h2>
                  <p className="text-gray-500">
                    {hotel.location || "Unknown Location"}
                  </p>
                </div>
                <button className="bg-red-500 text-white py-2 px-4 m-4 rounded hover:bg-red-600 self-center" onClick={() => handleCancelBooking(hotel._id)}>
                  Cancel Booking
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};
