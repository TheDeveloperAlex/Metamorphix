import { User } from "@/typings/User";
import { CSSProperties } from "react";

export type Role = string;

export interface ITopUserCardProps {
	user: User;
	top: number;
	style?: CSSProperties;
}