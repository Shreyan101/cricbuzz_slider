import React from "react";
import { flagCheck } from "../../helpersVariable/flagCheck";

const ScoreBox = (props) => {
  const {
    team: { shortName, score },matchType
  } = props ?? {};
  return (
    <div
      style={{
        display: "flex",
        gap: "25px",
        padding: "20px",
        alignItems: "center",
      }}
    >
      <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
        <img
          src={flagCheck[matchType]}
          alt="flag"
          style={{
            width: "20px",
            height: "20px",
            borderRadius: "50%",
          }}
        />
        <p>{shortName}</p>
      </div>
      <p>{score}</p>
    </div>
  );
};

export default ScoreBox;
