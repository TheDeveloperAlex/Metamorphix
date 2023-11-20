import { IUser } from "@/types/IUser";
import { CSSProperties } from "react";

export type Role = string;

export interface ITopUserCardProps {
	user: IUser;
	top: number;
	style?: CSSProperties;
}

export const allowedRoles: string[] = [
	"Tier_1",
	"Tier_2",
	"Tier_3",
	"Trickster",
	"Wealthy",
	"Well-fixed",
	"Cashy"
]