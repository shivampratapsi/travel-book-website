import express from 'express';
import userauth from '../middleware/userAuth.js';
import { getFlightsData, postAddFlightData } from '../Controllers/FlightsController.js';
const FilghtRouter  = express.Router();
FilghtRouter.post('/getFlightsData',getFlightsData);
FilghtRouter.post('/postAddFlightData',postAddFlightData);
export default FilghtRouter;