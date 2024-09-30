import ScoreBox from "../../ScoreBox";
import Tag from "../../Tags";

const Box = ({ stats }) => {
    const { matchType, series, teams, links ,status} = stats ?? {};
    return (
      <div
        style={{
          display: "flex",
          backgroundColor: "#fff",
          flexDirection: "column",
          borderRadius: "4px",
          cursor: "pointer",
        }}
      >
        <div
          style={{
            display: "flex",
            gap: "10px",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "20px",
          }}
        >
          <p>{series}</p>
          <Tag text={matchType} />
        </div>
        {teams && Object.keys(teams)?.length
          ? Object.values(teams)?.map((team) => (
              <ScoreBox team={team} matchType={matchType} />
            ))
          : null}
        <span
          style={{
            padding: "20px",
            color: "red",
          }}
        >
         {status}
        </span>
        <span
          style={{
            padding: "10px",
            display: "flex",
            justifyContent: "flex-end",
            backgroundColor: "#f0f0f0",
            gap: "10px",
            cursor: "pointer",
          }}
        >
          {links && Object.keys(links)?.length
            ? Object.values(links)?.map((link) => (
                <p>{link?.replace(/_/g, " ")}</p>
              ))
            : null}
        </span>
      </div>
    );
  };
  
  export default Box;