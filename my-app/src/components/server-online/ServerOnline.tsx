import OnlineIcon from "../online-icon";
import style from "./ServersOnline.module.css";

interface ServerOnlineProps {
  online: number,
  total: number
}

export default function ServerOnline({online, total}: ServerOnlineProps) {
  return (
    <div className={style.online}>
      <OnlineIcon />
      <h3>
        <span className={style.onlineServer}>онлайн сервера: </span>
        <span className={style.onlineCount}>{online}</span>
        /
        <span className={style.onlineTotal}>{total}</span>
      </h3>
    </div>
  );
}
