import { getUsers } from "./page.services";

import HeroSection from "@/components/hero-section/HeroSection";
import ServerOnline from "@/components/server-online/ServerOnline";
import { ServerActivity } from "@/components/server-activity/ServerActivity";

import style from "./page.module.css";
import AboutUs from "@/components/aboutUs/AboutUs";

export const revalidate = 3600;

export default async function Home() {
  const topUsers = await getUsers();

  const res = await fetch(
    "https://discord.com/api/v10/guilds/1123275373174608002?with_counts=true",
    {
      headers: {
        Authorization: `Bot ${process.env.DISCORD_BOT_TOKEN}`,
      },
    }
  );
  const users = await res.json();
  const totalMembers = users["approximate_member_count"] as number;
  const currentOnline = users["approximate_presence_count"] as number;

  return (
    <>
      <main className={style.main}>
        <div className={style.mainInner}>
          <div className={style.left}>
            <HeroSection />
            <ServerOnline online={currentOnline} total={totalMembers} />
            <div className={style.right + " " + style.picMobile}>
              {/* (tut nado norm picture) */}
              <img src="/home-page/test.png" alt="" />
              <div className="absolute right-[90px] bottom-0 max-372:scale-90 max-372:right-[45px] scale-110 720:scale-125">
                <AboutUs />
              </div>
            </div>
            <ServerActivity topUsers={topUsers} />
          </div>
          <div className={style.right}>
            {/* (tut nado norm picture) */}
            <img src="/home-page/test.png" alt="" />
          </div>
        </div>
      </main>
      <div className="absolute bottom-2 right-[68px] hidden lg:block">
        <AboutUs />
      </div>
    </>
  );
}
