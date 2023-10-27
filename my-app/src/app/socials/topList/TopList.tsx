import { socials } from "../socials";

import TopListItem from "./TopListItem";

import style from "./TopList.module.css";

export default function TopList() {
  return (
    <div className={style.list}>
      {socials.map((type) => {
        return <TopListItem type={type} />;
      })}
    </div>
  );
}
