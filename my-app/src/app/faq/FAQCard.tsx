import classes from "./FAQ.module.css";
export interface FAQCardProps {
  index: number;
  title: string;
  text: string;
}

export default function FAQCard({ index, text, title }: FAQCardProps) {
  return (
    <>
      <div
        className={`relative pt-[74px] ${classes.block} max-w-[640px] max-720:hidden`}
        style={{ fontFamily: "Montserrat, sans-serif" }}
      >
        <span className="absolute text-[180px] font-extrabold top-0 left-0 text-white text-opacity-5 -z-10">
          {index}
        </span>
        <div className={classes.grid}>
          <div
            className={`bg-[#FF1B1B] w-6 h-6 flex items-center justify-center rounded-[3px] ${classes.icon}`}
          >
            <div className="w-[11px] h-[11px] bg-white rounded-[2px]" />
          </div>
          <h2 className="text-[24px] font-bold text-white max-w-[480px]">
            {title}
          </h2>
          <p className="col-start-2 text-white-opacity-02 text-[19px] font-medium">
            {text}
          </p>
        </div>
      </div>
    </>
  );
}
