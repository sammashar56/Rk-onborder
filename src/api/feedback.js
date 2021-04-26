import express from 'express';
import Routes from "../helpers/route";

import {addFeedback} from "../middlewares/feedback";
import routeprotector from "../middlewares/routeprotection";

const api = express.Router();

api.post(Routes.onborder.addfeed, routeprotector, addFeedback);




export default api;
