export interface IUser {
    _id: string;
	user_id: string;
	balance: number;
	displayName: string;
	avatar?: string;
	roles: string[];
}