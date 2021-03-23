import express from 'express';
import Routes from "../helpers/route";

import {editSeller, addSeller, fetchAllsellers, fetchSpecificSeller} from "../middlewares/seller";

import routeprotector from "../middlewares/routeprotection";
  
const api = express.Router();

//getting all sellers. should be protected`
api.get(Routes.onborder.all,  fetchAllsellers);

//editing a particular seller
api.put(Routes.onborder.update, routeprotector, editSeller);


//Route should be protected
api.post(Routes.onborder.add, routeprotector, addSeller);

//get a specific seller
api.get(Routes.onborder.update, routeprotector, fetchSpecificSeller);


export default api;
