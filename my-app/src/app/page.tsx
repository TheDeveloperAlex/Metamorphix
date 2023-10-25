import classes from "./page.module.css";
import { HeroSection } from "@/components/hero-section/HeroSection";
import { ServersOnline } from "@/components/servers-online/ServersOnline";
import { ServerActivity } from "@/components/server-activity/ServerActivity";

export default function Home() {
  return (
    <main className={classes.main}>
      <div className={classes.left}>
        <HeroSection />
        <ServersOnline />
        <ServerActivity />
      </div>
      <div className={classes.right}>
        {/* (tut nado norm picture) */}
        <img src="/home-page/test.svg" alt="" />
      </div>
    </main>
  );
}
