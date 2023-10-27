import { Badge } from "../ui/badge";
import { IRoleBadgeProps } from "./RoleBadge.typings";
import classes from "./RoleBadge.module.css";

export const RoleBadge = ({ role, color }: IRoleBadgeProps) => {
	return (
		<Badge>
			<span className={classes.roleColorDot} style={{ backgroundColor: color }}></span>
			{role}
		</Badge>
	);
};