import style from "./Loading.module.css";

export default function Loading() {
  return (
    <div className="fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[48px] h-[48px] scale-[3]">
      <span className={`${style.loader}`}></span>
    </div>
  );
}
