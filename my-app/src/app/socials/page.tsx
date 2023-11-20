"use client";

import { useEffect, useRef, useState } from "react";

import SocialsGrid from "./socialsGrid/index";
import SocialsSlider from "./socialsSlider/SocialsSlider";

export default function Socials() {
  const wrapper = useRef(null);
  const [width, setWidth] = useState(320);

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
    <div className="w-full" ref={wrapper}>
      {width > 910 ? (
        <SocialsGrid />
      ) : (
        <div>
          <SocialsSlider />
        </div>
      )}
    </div>
  );
}
