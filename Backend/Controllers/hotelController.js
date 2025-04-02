import Hotel from "../Models/Hotel.js";
import BookingModel from "../Models/Bookings.js";
export const postAddHotel = async (req, res) => {
  try {
    console.log("Hotel Add API Called");
    console.log("Request Body:", req.body);

    const { name, price, location, rating, imageUrl } = req.body;

    if (!name || !price || !location || !rating || !imageUrl) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    const newHotel = new Hotel({name, location, rating, price, imageUrl});
   await newHotel.save().then(
      (result)=>{
        console.log("Hotel added successfully",result);
        res.status(201).json({ message: "Hotel added successfully!"});
      }
    )
  } catch (error) {
    console.error("Error in postAddHotel:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const getAllHotels = async (req, res) => {
  await Hotel.find().then((hotels)=>{
    res.json(hotels);
  }).catch((err)=>{
    console.log("error in fetching hotels",err);
  })
};

export const getHotelById = async (req,res)=>{
  try {
    const {hotelId}= req.params;
    console.log("Hotel id is",hotelId);
    if(!hotelId){
      return res.json({success:false,message:"Hotel Id required"});
    }
    const hotel = await Hotel.findById(hotelId);
    if(!hotel){
      return res.json({success:false,message:"Hotel not found"});
    }else{
      return res.json({success:true,hotel});
    }
  } catch (error) {
    return res.json({success:false,message:error.message});
  }
}


export const postBookHotel = async(req,res)=>{
try {
  const { userId} = req.body;
  const { hotelId } = req.params;
  console.log(typeof userId);
  console.log(typeof hotelId);
  if (!userId || !hotelId) {
    return res.json({ success: false, message: "All fields required to book a hotel" });
  }
  const bookings =await  BookingModel.findOne({userId});
  console.log(bookings);
  if(!bookings){
    const hotels =[hotelId];
    const newBooking = new BookingModel({ userId, hotelId: hotels });
  await newBooking.save().then((booking) => {
    console.log(booking);
    return res.json({ success: true, message: "Hotel Booked" });
  });
  }else{
    const hotels = bookings.hotelId;
    if(hotels.includes(hotelId)){
      return res.json({ success: false, message: "Hotel already booked" });
    }
    hotels.push(hotelId);
    bookings.hotelId = hotels;
    await bookings.save().then((booking) => {
      console.log(booking);
      return res.json({ success: true, message: "Hotel Booked" });
    });
  }
} catch (error) {
  return res.json({ success: false, message: error.message });
}
}