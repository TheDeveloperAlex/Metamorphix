import classes from "./page.module.css";
import { HeroSection } from "@/components/hero-section/HeroSection";
import { ServersOnline } from "@/components/servers-online/ServersOnline";
import { ServerActivity } from "@/components/server-activity/ServerActivity";
import { getUsers } from "./page.services";

export default async function Home() {
  const { topUsers } = await getUsers();

  return (
    <main className={classes.main}>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div className={classes.left}>
          <HeroSection />
          <ServersOnline />
          <ServerActivity topUsers={topUsers} />
        </div>
        <div className={classes.right}>
          {/* (tut nado norm picture) */}
          <img src="/home-page/test.svg" alt="" />
        </div>
      </div>
    </main>
  );
}
