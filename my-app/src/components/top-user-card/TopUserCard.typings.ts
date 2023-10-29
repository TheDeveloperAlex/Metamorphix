import { IUser } from "@/types/IUser";
import { CSSProperties } from "react";

export type Role = string;

export interface ITopUserCardProps {
	user: IUser;
	top: number;
	style?: CSSProperties;
}