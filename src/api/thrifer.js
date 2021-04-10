import express from 'express';
import Routes from "../helpers/route";

import {editSeller, addSeller, fetchAllsellers, fetchSpecificSellers, deleteSeller} from "../middlewares/seller";

import routeprotector from "../middlewares/routeprotection";
  
const api = express.Router();

//getting all sellers. should be protected`
api.get(Routes.onborder.all, routeprotector, fetchAllsellers);

//editing a particular seller
api.put(Routes.onborder.update, routeprotector, editSeller);

//Adding Route should be protected
api.post(Routes.onborder.add, routeprotector, addSeller);

//get a specific sellers by a certain user
api.get(Routes.onborder.all, routeprotector, fetchSpecificSellers);

//delete a seller
api.delete(Routes.onborder.update, routeprotector, deleteSeller)

//getting a specific seller
api.get(Routes.onborder.update, routeprotector,)

export default api;
