// const {MongoClient}=require('mongodb');
// const MONGO_URL ="mongodb+srv://rohitrawat952:rohit@clusterforvolunteermana.tay9n.mongodb.net/?retryWrites=true&w=majority&appName=ClusterforVolunteerManagment";

//  let _db;
//  const connect = (callback)=>{MongoClient.connect(MONGO_URL).then((client)=>{
//   _db = client.db('TravelBookingWebsite');
//   callback();
//  }).catch((err)=>{
//   console.log("error while connecting to mongodb",err);
//  }); 
// }
// // MongoClient.connect(MONGO_URL).then((client)=>{
// //   console.log('successfully connected to database');
// //   _db = client.db('TravelBookingWebsite');
// //  }).catch((err)=>{
// //   console.log("error while connecting to mongodb",err);
// //  });

//  const getDb=()=>{
//   if(!_db){
//     console.log('not successfully connected to database');
//   }else{
//     return _db;
//   }
//  }
// module.exports = {getDb,connect};
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();
const connect = (callback) => {
  mongoose.connect("mongodb+srv://rohitrawat952:rohit@clusterforvolunteermana.tay9n.mongodb.net/?retryWrites=true&w=majority&appName=ClusterforVolunteerManagment")
    .then(() => {
      console.log("successfully connected to database");
      callback();
    })
    .catch((err) => {
      console.log("error while connecting to database", err);
    });
};
export default connect;
