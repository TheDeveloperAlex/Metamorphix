import style from "./HeroSection.module.css";

export default function HeroSection() {
  return (
    <>
      <img src="/home-page/shape.svg" alt="shape" className={style.shape} />
      <h1 className={style.title}>
        <span style={{ display: "block" }}>Metamorphix</span>
        Нетворкинг <span>в</span> твоем
        <br /> кармане
      </h1>
    </>
  );
}
