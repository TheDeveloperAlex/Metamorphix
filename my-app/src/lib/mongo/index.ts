import mongoose from "mongoose";

const URL = process.env.DATABASE_URL || "";

export const connectMongoDb = () => {
	try {
		mongoose.connect(URL);
		console.log("Connected to MongoDB");
	} catch (error) {
		console.log(error);
	}
};