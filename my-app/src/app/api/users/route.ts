import { User } from "@/models/User/User.schema";
import { NextResponse } from "next/server";
import { IUser } from "./typings";

export async function GET() {
	const users: IUser[] = await User.find();
	return NextResponse.json({
		users,
		topUsers: users.sort((a,b) => b.balance - a.balance)
	});
}