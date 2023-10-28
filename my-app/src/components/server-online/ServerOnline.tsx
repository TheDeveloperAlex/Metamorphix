import { OnlineIcon } from "../online-icon/OnlineIcon";
import classes from "./ServersOnline.module.css";

export const ServerOnline = () => {
	return (
		<div className={classes.online}>
			<OnlineIcon />
			<h3 className={classes.onlineCount}>онлайн сервера: <span>29 100</span></h3>
		</div>
	);
};