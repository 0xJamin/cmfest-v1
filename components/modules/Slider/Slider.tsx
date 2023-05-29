import { useRef, useState, useEffect, RefObject } from "react";
import { v4 as uuidv4 } from "uuid";
import { useAnimate } from "framer-motion";

import { SliderType } from "./types";

function calculateContentHeight(children: JSX.Element[], sliderUUID: string) {
  let contentHeight = 0;
  for (let index = 0; index < children.length; index++) {
    const element = document.getElementById(
      `${sliderUUID}_${index}`
    )?.clientHeight;
    if (element) {
      contentHeight += element;
    }
  }
  return contentHeight;
}

function calculateNumDupes(
  sliderRef: RefObject<HTMLDivElement>,
  sliderContentHeight: number
) {
  if (sliderRef.current && sliderContentHeight) {
    return Math.max(
      Math.ceil((2 * sliderRef.current.clientHeight) / sliderContentHeight),
      1
    );
  }
  return 1;
}

export function Slider({ children }: SliderType) {
  const sliderRef = useRef<HTMLDivElement>(null);
  const sliderUUID = uuidv4();
  const [sliderContentHeight, setSliderContentHeight] = useState<number>(2);
  const [numDupes, setNumDupes] = useState<number>(1);
  const [scope, animate] = useAnimate();

  useEffect(() => {
    const contentHeight = calculateContentHeight(children, sliderUUID);
    setSliderContentHeight(contentHeight);
  }, [sliderUUID, children]);

  useEffect(() => {
    const numDupes = calculateNumDupes(sliderRef, sliderContentHeight);
    setNumDupes(numDupes);
  }, [sliderRef, sliderContentHeight]);

  useEffect(() => {
    animate(
      scope.current,
      { y: -sliderContentHeight * 1 },
      { ease: "linear", duration: 8, repeat: Infinity }
    );
  }, [sliderContentHeight, animate, scope]);
  return (
    <div
      className="slider-container p-5"
      ref={sliderRef}
      style={{
        width: "384px",
        height: "700px",
        overflow: "hidden",
      }}
    >
      <div
        ref={scope}
        className="FMT__container__contents"
        style={{ display: "flex", flexDirection: "column", borderRadius: "200px", }}
      >
        {children.map((item, index) => (
          <div key={index} id={`${sliderUUID}_${index}`}>
            {item}
          </div>
        ))}
        {[...Array(numDupes)].map((_) =>
          children.map((item, index) => <div key={index}>{item}</div>)
        )}
      </div>
    </div>
  );
}
