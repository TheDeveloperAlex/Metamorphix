import OnlineIcon from "../online-icon";
import style from "./ServersOnline.module.css";

export default function ServerOnline() {
  return (
    <div className={style.online}>
      <OnlineIcon />
      <h3>
        <span className={style.onlineServer}>онлайн сервера: </span>
        <span className={style.onlineCount}>29 100</span>
      </h3>
    </div>
  );
}
