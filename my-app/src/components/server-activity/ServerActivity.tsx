import { Switch } from "../ui/switch";
import classes from "./ServerActivity.module.css";

export const ServerActivity = () => {
	return (
		<div className={classes.activitySection}>
			<div className={classes.activitySectionHeader}>
				<h2 className={classes.activityTitle}>То <span>5</span> участников сервера по онлайну и активностям</h2>
				<Switch className={classes.activitySwitch} />
			</div>
		</div>
	);
};