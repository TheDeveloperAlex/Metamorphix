import TopList from "./topList/TopList";
import SocialsSlider from "./socialsSlider/SocialsSlider";

import style from "./page.module.css";

export default function Socials() {
  return (
    <div>
      <div className={style.topList}>
        <TopList />
      </div>
      <div className={style.socialsSlider}>
        <SocialsSlider />
      </div>
    </div>
  );
}
