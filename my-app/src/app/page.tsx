import { OnlineIcon } from "@/components/online-icon/OnlineIcon";
import classes from "./page.module.css";

export default function Home() {
  return (
    <main className={classes.main}>
      <div className={classes.left}>
        <img src="/home-page/shape.svg" alt="shape" className={classes.shape} />
        <h1 className={classes.title}><span>Metamorphix</span> Нетворкинг <span>в</span> твоем кармане</h1>

        <div className={classes.online}>
          <OnlineIcon />
          <h3 className={classes.onlineCount}>онлайн серверов: <span>29 100</span></h3>
        </div>
      </div>
      <div className={classes.right}>
        {/* drochu nogami (tut nado picture) */}
        <img src="/home-page/test.svg" alt="" />
      </div>
    </main>
  );
}
