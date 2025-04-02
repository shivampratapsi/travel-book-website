import mongoose from 'mongoose';

const bookingSchema = new mongoose.Schema({
    userId: { type: String, required: true } ,
    hotelId: { type:[], required: true }
});

const BookingModel = mongoose.model('BookingModel', bookingSchema);
export default BookingModel;
