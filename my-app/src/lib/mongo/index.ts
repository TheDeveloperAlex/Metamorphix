import mongoose from "mongoose";

// !!!!Убрать это
const URL = "mongodb+srv://admin:metamorphix@cluster.3z8r40g.mongodb.net";

export const connectMongoDb = () => {
	try {
		mongoose.connect(URL);
		console.log("Connected to MongoDB");
	} catch (error) {
		console.log(error);
	}
};