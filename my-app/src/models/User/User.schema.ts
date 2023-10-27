import mongoose, { Schema } from "mongoose";

const userSchema = new Schema(
	{
		user_id: String,
		balance: Number,
		displayName: String,
		avatar: String,
		roles: [String]
	}
);

export const User = mongoose.models.User || mongoose.model("User", userSchema);