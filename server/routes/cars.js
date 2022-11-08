import express from 'express';
import { cars, deleteCar, displayCars, getRentedCar, rentedCars, rentedCarWithUsers, showCityWiseCars, updateRentDuration, updateStatus } from '../controllers/cars.js';
import { sendMail, sendStatusMail } from '../controllers/sendEmail.js';

const carsRouter = express.Router();

carsRouter.post('/addcar', cars);
carsRouter.get("/getCars",displayCars);
carsRouter.delete('/deleteCar/:id',deleteCar);
carsRouter.get('/cityWise?',showCityWiseCars);
carsRouter.post('/sendEmail',sendMail);
carsRouter.post('/sendStatusEmail',sendStatusMail);
carsRouter.post('/rentData',rentedCars);
carsRouter.get("/getRentData",getRentedCar);
carsRouter.put("/updateStatus/:id",updateStatus);
carsRouter.get("/UsersData",rentedCarWithUsers);
carsRouter.put("/updateRentDuration/:id",updateRentDuration);

export default carsRouter;