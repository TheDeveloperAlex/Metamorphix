import { User } from "@/typings/User";
import { TopUserCard } from "../top-user-card/TopUserCard";
import classes from "./TopUsers.module.css";
import { IUser } from "@/types/IUser";

interface Props {
	visible: boolean;
	topUsers: IUser[];
}

export const TopUsersList = ({ visible, topUsers }: Props) => {
	const filteredUsers = topUsers.filter((user, index) => index < 4);

	return (
		<div className={classes.topUserCards} style={{ visibility: visible ? 'visible' : 'hidden', opacity: visible ? 1 : 0 }}>
			{
				filteredUsers.map((user: IUser, index: number) => {
					return (
						<TopUserCard key={user.user_id} user={user} top={index+1}/>
					);
				})
			}
		</div>
	);
};