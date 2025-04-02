import express from 'express';
import {postAddHotel,getAllHotels, getHotelById} from '../Controllers/hotelController.js';
import {postBookHotel} from '../Controllers/hotelController.js';
import userauth from '../middleware/userAuth.js';
const hotelRouter = express.Router();

hotelRouter.get("/", (req, res) => {
  res.send("<p>hotel router serves the request<p/>");
});
hotelRouter.post("/add-hotel", postAddHotel);
hotelRouter.get("/get-hotels-list",getAllHotels);
hotelRouter.get("/get-hotel-by-id/:hotelId",getHotelById);
hotelRouter.post('/bookHotel/:hotelId',userauth,postBookHotel);
export default hotelRouter;