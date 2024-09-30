import React, { useEffect, useRef } from "react";
import Box from "./Box";

const Slider = ({ data }) => {
  const { matches } = data ?? {};

  const sliderRef = useRef(null);

  useEffect(() => {
    const slider = sliderRef.current;
    let intervalId;

    const startCarousel = () => {
      intervalId = setInterval(() => {
        if (slider) {
          slider.scrollLeft += 1;
          if (slider.scrollLeft + slider.clientWidth >= slider.scrollWidth) {
            slider.scrollLeft = 0;
          }
        }
      }, 10);
    };

    startCarousel();

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div
      ref={sliderRef}
      style={{
        display: "flex",
        justifyContent: "center",
        overflowX: "hidden",
        whiteSpace: "nowrap",
        gap: "20px",
      }}
    >
      {matches?.map((item, index) => (
        <div key={`${index}_${item.series}_abc`} style={{ flexShrink: 0 }}>
          <Box stats={item} />
        </div>
      ))}
    </div>
  );
};

export default Slider;
