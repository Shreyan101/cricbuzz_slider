import ExtraInfo from "./components/ExtraInfo";
import Slider from "./components/Slider";
import { data } from "./JsonData";


function App() {
  return (
    <div style={mainStyle}>
      <div
        style={ExtraStyle}
      >
        <Slider data={data} />
      </div>
      <div
        style={ExtraStyle}
      >
       <ExtraInfo extraInfo={data.extraInfo} />
      </div>
    </div>
  );
}

const mainStyle = {
  backgroundColor: "#E3E6E3",
  padding: "20px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  gap: "40px",
  height: '100vh',
};

const ExtraStyle = {
  width: "70%",
}

export default App;
