import classes from "./page.module.css";
import { HeroSection } from "@/components/hero-section/HeroSection";
import { ServerOnline } from "@/components/server-online/ServerOnline";
import { ServerActivity } from "@/components/server-activity/ServerActivity";
import { getUsers } from "./page.services";

export default async function Home() {
  const { topUsers } = await getUsers();

  return (
    <main className={classes.main}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
        <div className={classes.left}>
          <HeroSection />
          <ServerOnline />
          <ServerActivity topUsers={topUsers} />
        </div>
        <div className={classes.right}>
          {/* (tut nado norm picture) */}
          <img src="/home-page/test.png" alt="" />
        </div>
      </div>
    </main>
  );
}
