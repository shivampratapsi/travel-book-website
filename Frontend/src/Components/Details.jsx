import { useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { HotelListContext } from "../store/hotelStore";
import { TbHomeFilled } from "react-icons/tb";
import { HiCurrencyRupee } from "react-icons/hi";
import { toast } from "react-toastify";
const Details = () => {
  const { id } = useParams();
  console.log("Details called for the hotel with ID:", id);
  const { getHotelById } = useContext(HotelListContext);
  const [hotel, setHotel] = useState(null);
  const onBookHotelHandler = async () => {
    try {
      await fetch(`http://localhost:8000/bookHotel/${id}`, {
        method: "POST",
        credentials: "include",
        "Content-Type": "application/json",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.success) {
            return toast.success(data.message);
          }
          return toast.error(data.message);
        });
    } catch (error) {
      toast.error("Error while booking hotel");
    }
  };
  useEffect(() => {
    const data = getHotelById(id);
    if (data && data[0]) {
      setHotel(data[0]);
    }
    console.log(typeof data, data);
  }, [id, getHotelById]);

  return !hotel ? (
    <p className="text-center text-gray-500 text-lg">Loading...</p>
  ) : (
    <div className="container mx-auto p-4">
      <div className="flex flex-col items-center bg-white shadow-md rounded-lg p-6">
        <div className="w-full">
          <h3 className="text-2xl font-bold text-gray-800 mb-2">{hotel.name}</h3>
          <p className="text-gray-600 mb-4">{hotel.location}</p>
          <p className="mb-2">
            <strong>Rating:</strong> {hotel.rating} ⭐
          </p>
          <p className="mb-4">
            <strong>Price per night:</strong><HiCurrencyRupee className="inline text-green-600" /> {hotel.price}
          </p>
          <button
            type="button"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 flex items-center"
            onClick={() => onBookHotelHandler()}
          >
            Book <TbHomeFilled className="ml-2" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Details;
