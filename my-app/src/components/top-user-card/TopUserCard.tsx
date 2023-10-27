import { RoleBadge } from "../role-badge/RoleBadge";
import classes from "./TopUserCard.module.css"
import { ITopUserCardProps } from "./TopUserCard.typings";

export const TopUserCard = ({ user, style, top }: ITopUserCardProps) => {
	const filteredRoles = user.roles.filter((user, index) => index < 5);

	return (
		<div className={classes.topUserCard} style={style}>
			<h2>{top}</h2>
			{ user.avatar ? <img src={user.avatar} alt="user_avatar" /> : null }
			<div className={classes.topUserCardInfo}>
				<h4>{user.displayName}</h4>
				<div className={classes.topUserCardRoles}>
					{
						filteredRoles.map(role => {
							return (
								<RoleBadge key={role} color="red" role={role} />
							);
						})
					}
				</div>
			</div>
		</div>
	);
};