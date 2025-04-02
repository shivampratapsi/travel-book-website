import { Form,redirect } from "react-router-dom";
const AddHotel = () => {
  return (
    <div className="max-w-lg mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg border border-gray-200">
      <h2 className="text-2xl font-bold text-blue-700 text-center mb-6">Add a New Hotel</h2>
      <Form method="POST" className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-gray-700 font-medium">
            Hotel Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="w-full mt-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter hotel name"
            required
          />
        </div>

        <div>
          <label htmlFor="location" className="block text-gray-700 font-medium">
            Location
          </label>
          <input
            type="text"
            id="location"
            name="location"
            className="w-full mt-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter location"
            required
          />
        </div>

        <div>
          <label htmlFor="price" className="block text-gray-700 font-medium">
            Price per Night (in ₹)
          </label>
          <input
            type="number"
            id="price"
            name="price"
            className="w-full mt-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter price"
            required
          />
        </div>

        <div>
          <label htmlFor="rating" className="block text-gray-700 font-medium">
            Rating (1-5)
          </label>
          <input
            type="number"
            id="rating"
            name="rating"
            className="w-full mt-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter rating"
            min="1"
            max="5"
            required
          />
        </div>

        <div>
          <label htmlFor="imageUrl" className="block text-gray-700 font-medium">
            Hotel Image URL
          </label>
          <input
            type="text"
            id="imageUrl"
            name="imageUrl"
            className="w-full mt-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter hotel image URL"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Submit Hotel
        </button>
      </Form>
    </div>
  );
};


export async function PostAddHotelAction(data) {
  const formData = await data.request.formData();
  const hotelData = Object.fromEntries(formData);
  console.log("Post Add hotel called for this " , hotelData);
  fetch("http://localhost:3002/add-hotel",{
    method:'POST',
    headers : {'Content-Type':'application/json'},
    body: JSON.stringify(hotelData)
  }).then(res => res.json())
  .then(data => console.log("response from the server",data))
  return redirect("/");
}
export default AddHotel;