import carDetails from "../models/cars.js";
import rentDetails from "../models/rentedCars.js";

export const cars = async(req,res) => {
    const data = req.body;
    //console.log(data);
    const addcars = new carDetails(data);
    try {
        await addcars.save();
        res.status(200).send("Car details added successfully");
    }
    catch(error) {
        console.log(error);
        res.status(400).send(error);
    }
}
export const displayCars = async(req,res) => {
    
    try {
        const result = await carDetails.find();
        res.status(200).send(result);
    }
    catch(error) {
        console.log(error);
        res.status(400).send(error);
    }
}

export const deleteCar = async(req,res) => {
    const id=req.params.id;
    try {
        await carDetails.findByIdAndRemove(id).exec();
        res.send("Car deleted successfully!");
    }
    catch(error) {
        console.log(error);
    }
}
export const showCityWiseCars = async(req,res) => {
    //console.log(req);
    //console.log(req.query);
    try {
        const data = await carDetails.find(req.query);
        //console.log(data);
        res.status(200).send(data);
    }
    catch(error) {
        console.log(error);
        res.status(400).send(error);
    }
}

export const rentedCars = async(req,res) => {
    const data = req.body;
    const rentData = new rentDetails(data);
    try {
        await rentData.save();
        res.status(200).send("rent data successfully added");
    }
    catch(error) {
        console.log(error);
        res.status(400).send(error);
    }
}
export const getRentedCar = async(req,res) => {
   try {
        const data = await rentDetails.find(req.query);
        //console.log(data);
        res.status(200).send(data);
    }
    catch(error) {
        res.status(400).send(error);
    }
}

export const updateStatus = async(req,res) => {
    const id=req.params.id;
    //console.log(id);
    try {
        await rentDetails.findByIdAndUpdate(id,req.body).exec();
        console.log(rentDetails.find());
        res.status(200).send("Status updated successfully!");
    }
    catch(error) {
        console.log(error);
    }
}

export const rentedCarWithUsers = async(req,res) => {
    
    try {
        const result = await rentDetails.find();
        res.status(200).send(result);
    }
    catch(error) {
        console.log(error);
        res.status(400).send(error);
    }
}

export const updateRentDuration = async(req,res) => {
    const _id = req.params.id;
    const data = req.body;
    console.log(data);
    try {
        const result = await rentDetails.findOneAndUpdate(_id, data);
        res.status(200).send(result);
    }
    catch(error) {
        console.log(error);
        res.status(400).send(error);
    }
}