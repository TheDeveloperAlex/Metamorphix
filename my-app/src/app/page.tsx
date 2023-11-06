import classes from "./page.module.css";
import { HeroSection } from "@/components/hero-section/HeroSection";
import { ServerOnline } from "@/components/server-online/ServerOnline";
import { ServerActivity } from "@/components/server-activity/ServerActivity";
import { getUsers } from "./page.services";

export const revalidate = 3600;

export default async function Home() {
  const topUsers = await getUsers();
  const res = await fetch("https://discord.com/api/v10/guilds/1123275373174608002?with_counts=true", {headers: {
    'Authorization': 'Bot MTE0NjI0OTI3ODUzNzM0Mjk4Nw.GeN72M.aUVIaKgVKggbJA4dq_Qsuj6GNsG_7rCBuizdKI'
  }})
  const users = await res.json()
  const totalMembers = users["approximate_member_count"] as number
  const currentOnline = users["approximate_presence_count"] as number
  console.log(totalMembers, currentOnline)

  return (
    <main className={classes.main}>
      <div className={classes.mainInner}>
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
