import mongoose from 'mongoose';
const FilghtSchema = new mongoose.Schema({
  name:{type:String, required:true},
  code:{type:Number, required:true},
  country:{type:String, required:true},
  city:{type:String, required:true},
  destinations:{type:Array, required:true},
})

const FlightsModel = mongoose.model('Flights', FilghtSchema);

export default FlightsModel;