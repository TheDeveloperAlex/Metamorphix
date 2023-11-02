import {connectMongoDb} from "@/lib/mongo";
import {NextResponse} from "next/server";

export async function GET() {
    await connectMongoDb();

    return NextResponse.json("Mongo DB connected");
}