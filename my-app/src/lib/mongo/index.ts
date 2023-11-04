import mongoose from "mongoose";

const URL = process.env.DATABASE_URL || "";

export const connectMongoDb = async() => {
	try {
		let db = await mongoose.connect(URL);
		return db
	} catch (error) {
		console.log(error);
	}
};