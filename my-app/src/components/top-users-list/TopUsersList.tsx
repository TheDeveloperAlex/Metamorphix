import { User } from "@/typings/User";
import { TopUserCard } from "../top-user-card/TopUserCard";
import classes from "./TopUsers.module.css";

interface Props {
	visible: boolean;
	topUsers: User[];
}

export const TopUsersList = ({ visible, topUsers }: Props) => {
	const filteredUsers = topUsers.filter((user, index) => index < 3);

	return (
		<div className={classes.topUserCards} style={{ visibility: visible ? 'visible' : 'hidden', opacity: visible ? 1 : 0 }}>
			{
				filteredUsers.map((user: User, index: number) => {
					return (
						<TopUserCard key={user.user_id} user={user} top={index+1}/>
					);
				})
			}
		</div>
	);
};