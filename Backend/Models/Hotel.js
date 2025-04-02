// //import { getDb } from '../utils/dataBase';

// export default class Hotel {
//   constructor(name, location, rating, price, imageUrl) {
//     this.name = name;
//     this.location = location;
//     this.rating = rating;
//     this.price = price;
//     this.imageUrl = imageUrl;
//   }

//   static async save(hotel) {
//     if (!hotel) {
//       console.log("Please provide data in correct format");
//       return;
//     }

//     try {
//       const _db = getDb();
//       const result = await _db.collection('Hotels').insertOne(hotel);
//       console.log("Inserted ID:", result.insertedId);

//       return { ...hotel, _id: result.insertedId };
//     } catch (err) {
//       console.error("Insert failed:", err);
//     }
//   }

//   static async getHotelsList() {
//     try {
//       const _db = getDb();
//       let list = await _db.collection('Hotels').find().toArray();
//       console.log(typeof list);
//       console.log(list);
//       return list;
//     } catch {
//       return {
//         err: "some error occurred"
//       };
//     }
//   }
// }

import mongoose, { Schema }  from "mongoose";

const hotelSchema = new mongoose.Schema({
  name:{type:String,required:true},
  location:{type:String,required:true},
  price:{type:Number,required:true},
  rating:{type:Number,required:true},
  imageUrl:{type:String,required:true}
})

const Hotel = mongoose.model('Hotel',hotelSchema);

export default Hotel;