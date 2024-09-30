import React, { useState, useCallback } from "react";
import flag from "../../icons/ground.jpg";

const ExtraInfo = ({ extraInfo }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalSets = extraInfo.length;

  const handleNext = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSets);
  }, [totalSets]);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? totalSets - 1 : prevIndex - 1
    );
  };

  return (
    <div
      style={{
        position: "relative",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden",
        backgroundColor: "#fff",
        width: "100%",
      }}
    >
      <button
        onClick={handlePrev}
        style={{
          position: "absolute",
          left: "10px",
          zIndex: 1,
          background: "none",
          border: "none",
          fontSize: "24px",
          cursor: "pointer",
        }}
      >
        {"<"}
      </button>

      <div
        style={{
          display: "flex",
          transition: "transform 0.5s ease-in-out",
          transform: `translateX(-${currentIndex * 100}%)`,
          width: "100%",
          padding: '20px',
        }}
      >
        {extraInfo.map((set, setIndex) => (
          <div
            key={setIndex}
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
              gap: "60px",
            }}
          >
            {set.map((item, index) => (
              <div
                key={`${index}_${setIndex}`}
                style={{
                  backgroundColor: "#E9ECF5",
                  borderRadius: "4px",
                  padding: "20px",
                  width: "calc(33% - 10px)",
                  textAlign: "center",
                  marginLeft: '20px',
                }}
              >
                <img
                  src={flag}
                  alt="flag"
                  style={{
                    width: "300px",
                    height: "100px",
                  }}
                />
                {item?.status}
              </div>
            ))}
          </div>
        ))}
      </div>

      <button
        onClick={handleNext}
        style={{
          position: "absolute",
          right: "10px",
          zIndex: 1,
          background: "none",
          border: "none",
          fontSize: "24px",
          cursor: "pointer",
        }}
      >
        {">"}
      </button>
    </div>
  );
};

export default ExtraInfo;
