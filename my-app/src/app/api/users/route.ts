import { connectMongoDb } from "@/lib/mongo";
import { User } from "@/models/User/User.schema";
import { NextResponse } from "next/server";
import { IUser } from "./typings";

export async function GET() {
	await connectMongoDb();
	const users: IUser[] = await User.find();
	return NextResponse.json({
		users,
		topUsers: users.sort((a,b) => b.balance - a.balance)
	});
}