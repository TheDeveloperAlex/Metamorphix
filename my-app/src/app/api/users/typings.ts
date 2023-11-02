export interface IUser {
	user_id: string;
	balance: number;
	displayName: string;
	avatar?: string;
	roles: string[];
}