import Link from "next/link";
import classes from "./aboutUs.module.css";

export default function AboutUs() {
  return (
    <div
      className="leading-none relative"
      style={{ fontFamily: "TacticSans-Bld, sans-serif" }}
    >
      <div className="text-[8px] relative flex justify-center left-[14px] top-[1px] max-lg:hidden">
        <div className={classes.buttonLabel}>
          <span className="absolute top-[1.8px] left-1/2 -translate-x-1/2 ">
            ДЕТАЛЬНЕЕ
          </span>
        </div>
      </div>
      <Link href="/faq" className={`relative ${classes.link}`}>
        <div className={`${classes.button}`}></div>
        <span
          className="absolute  text-[20px] z-[2]"
          style={{ whiteSpace: "nowrap" }}
        >
          ПРО НАС
        </span>
        <div className={classes.greenLighter}>
          <span className={classes.greenLighterShadow} />
        </div>
      </Link>
    </div>
  );
}
