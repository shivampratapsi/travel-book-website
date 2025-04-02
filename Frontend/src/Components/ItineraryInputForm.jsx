import { Form } from "react-router-dom";
import { toast } from "react-toastify";
import {useRef, useState } from "react";
export const ItineraryInputForm = () => {
  const [planByDay, setPlanByDay] = useState(false);
  const [days, setDays] = useState(0);
  const noOfDaysRef = useRef(null);
  const handleOnPlanByDay = () => {
    const enteredDays = parseInt(noOfDaysRef.current?.value, 10);
    if (!enteredDays || enteredDays <= 0) {
      toast.error("Please enter a valid number of days first!");
      return;
    }
    setDays(enteredDays);
    setPlanByDay(true);
  };
  return (
    <div className="md:w-1/3 p-6 bg-gray-700 rounded-lg shadow-md">
      <h2 className="text-lg font-semibold mb-4 text-white">Plan Your Trip</h2>
      <Form method="POST" className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Trip Name"
          className="p-2 border border-gray-600 rounded-md bg-gray-800 text-gray-300 focus:ring-2 focus:ring-blue-500"
          name="tripName"
        />
        <input
          type="date"
          placeholder="Start Date"
          className="p-2 border border-gray-600 rounded-md bg-gray-800 text-gray-300 focus:ring-2 focus:ring-blue-500"
          name="startDate"
        />
        <input
          type="date"
          placeholder="End Date"
          className="p-2 border border-gray-600 rounded-md bg-gray-800 text-gray-300 focus:ring-2 focus:ring-blue-500"
          name="endDate"
        />
        <input
          type="text"
          placeholder="Destination"
          className="p-2 border border-gray-600 rounded-md bg-gray-800 text-gray-300 focus:ring-2 focus:ring-blue-500"
          name="destination"
        />
        <input
          type="number"
          placeholder="No of Days"
          className="p-2 border border-gray-600 rounded-md bg-gray-800 text-gray-300 focus:ring-2 focus:ring-blue-500"
          ref={noOfDaysRef}
          name="noOfDays"
        />
        <input
          type="text"
          placeholder="Hotel Name"
          className="p-2 border border-gray-600 rounded-md bg-gray-800 text-gray-300 focus:ring-2 focus:ring-blue-500"
          name="hotelName"
        />
        <button
          type="button"
          onClick={handleOnPlanByDay}
          className="bg-green-500 text-white font-semibold py-2 rounded hover:bg-green-600 transition"
        >
          Plan by Day
        </button>

        {planByDay && (
          <div className="space-y-4 mt-4">
            {Array.from({ length: days }).map((_, index) => (
              <div key={index} className="flex flex-col">
                <label
                  htmlFor={`day-${index + 1}`}
                  className="text-gray-300 font-medium mb-2"
                >
                  {`Enter your plan for Day ${index + 1}`}
                </label>
                <input
                  id={`day-${index + 1}`}
                  type="text"
                  placeholder={`Plan for Day ${index + 1}`}
                  name={`day-${index + 1}`}
                  required
                  className="p-3 border border-gray-500 rounded-lg bg-gray-800 text-gray-300 focus:ring-2 focus:ring-blue-500"
                />
              </div>
            ))}
          </div>
        )}
        <button
          type="submit"
          className="bg-blue-500 text-white font-semibold py-2 rounded hover:bg-blue-600 transition"
        >
          Submit
        </button>
      </Form>
    </div>
  );
};
