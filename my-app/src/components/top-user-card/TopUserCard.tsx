import { RoleBadge } from "../role-badge/RoleBadge";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Skeleton } from "../ui/skeleton";
import classes from "./TopUserCard.module.css"
import { ITopUserCardProps, allowedRoles } from "./TopUserCard.typings";

export const TopUserCard = ({ user, style, top }: ITopUserCardProps) => {
	const filteredRoles = user.roles.slice(0, 5).filter((user) => allowedRoles.includes(user));

	return (
		<div className={classes.topUserCard} style={style}>
			{/* <h2>{top}</h2> */}
			<Avatar className={classes.img}>
				<AvatarImage src={user.avatar}/>
				<AvatarFallback className="bg-zinc-700">
					<Skeleton />
				</AvatarFallback>
			</Avatar>
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