import { connectMongoDb } from "@/lib/mongo";
import { User } from "@/models/User/User.schema";
import { IUser } from "@/types/IUser";

export const getUsers = async () => {
	try {
		await connectMongoDb();
		const users: IUser[] = await User.find({}, '-posts');
		return users.sort((a,b) => b.balance - a.balance)
	} catch (error) {
		throw error
	}
};