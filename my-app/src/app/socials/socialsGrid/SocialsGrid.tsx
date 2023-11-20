import { socials } from "../socials";
import SocialsListItem from "../socialsListItem/index";
import TopListItem from "../topListItem/index";

import style from "./SocialsGrid.module.css";

export default function SocialsGrid() {
  return (
    <div className={style.grid}>
      {socials.map((type) => {
        return (
          <div className={style.gridItem}>
            <div className="mb-[20px]">
              <TopListItem type={type} />
            </div>
            <SocialsListItem type={type} />
          </div>
        );
      })}
    </div>
  );
}
