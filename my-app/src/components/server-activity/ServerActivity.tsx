'use client';

import { useState } from "react";
import { Switch } from "../ui/switch";
import classes from "./ServerActivity.module.css";
import { TopUsersList } from "../top-users-list/TopUsersList";
import { IUser } from "@/types/IUser";

interface Props {
	topUsers: IUser[];
}

export const ServerActivity = ({ topUsers }: Props) => {
	const [switched, setSwitched] = useState(true);

	const handleSwitch = () => {
		setSwitched(!switched);
	}

	return (
		<div className={classes.activitySection}>
			<div className={classes.activitySectionHeader}>
				<h2 className={classes.activityTitle}>Топ <span>4</span> участников сервера по онлайну и активностям</h2>
				<Switch className={classes.activitySwitch} checked={switched} onCheckedChange={handleSwitch} />
			</div>
			<TopUsersList topUsers={topUsers} visible={switched} />
		</div>
	);
};