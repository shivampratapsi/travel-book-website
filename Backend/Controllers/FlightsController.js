import FlightsModel from "../Models/Flights.js";
export const getFlightsData = async (req, res) => {
  try {
    const {from ,to} = req.body;
    if (!from || !to) {
      return res.json({ success: false, message: "All fields are required" });
    }
    const flights = await FlightsModel.find();
    return res.json({ success: true, flights });
  } catch (error) {
    return res.json({success:false,message:"Interval server error"});
  }
}

export const postAddFlightData = async (req, res) => {
  const { name, code, country, city, destinations } = req.body;
  try {
    if (!name || !code || !country || !city || !destinations) {
      return res.json({ success: false, message: "All fields are required" });
    }
    const newFlight = new FlightsModel({
      name,
      code,
      country,
      city,
      destinations,
    });
    await newFlight.save();
    res.json({ success: true, message: "Flight added successfully" });
  } catch (error) {
    console.error("Error adding flight:", error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }

}

