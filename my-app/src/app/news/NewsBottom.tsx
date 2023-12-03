"use client";

import { useEffect, useRef, useState } from "react";

import Loading from "@/components/loading/Loading";
import NewsGrid from "./NewsGrid";
import NewsSlider from "./slider/index";

export default function NewsBottom() {
  const wrapper = useRef(null);
  const [width, setWidth] = useState(null);

  useEffect(() => {
    if (!wrapper || !wrapper.current) return;

    const handleResize = () => {
      const size = wrapper?.current?.clientWidth;
      setWidth(size);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [wrapper]);
  return (
    <div className="w-full h-full grow-1" ref={wrapper}>
      {width ? (
        width > 910 ? (
          <NewsGrid />
        ) : (
          <div>
            <NewsSlider />
          </div>
        )
      ) : (
        <Loading />
      )}
    </div>
  );
}
