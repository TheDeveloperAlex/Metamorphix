import { getUsers } from "./page.services";

import { HeroSection } from "@/components/hero-section/HeroSection";
import { ServerOnline } from "@/components/server-online/ServerOnline";
import { ServerActivity } from "@/components/server-activity/ServerActivity";

import style from "./page.module.css";

export const revalidate = 3600;

export default async function Home() {
  const topUsers = await getUsers();

  return (
    <main className={style.main}>
      <div className={style.mainInner}>
        <div className={style.left}>
          <HeroSection />
          <ServerOnline />
          <ServerActivity topUsers={topUsers} />
        </div>
        <div className={style.right}>
          {/* (tut nado norm picture) */}
          <img src="/home-page/test.png" alt="" />
        </div>
      </div>
    </main>
  );
}
