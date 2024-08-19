import "./App.css";
import Tooltip from "./Tootip";

function App() {
  return (
    <>
      <Tooltip
        handleUpload={() => alert("Uploading")}
        handlePlay={() => alert("Playing")}
      ></Tooltip>
    </>
  );
}

export default App;
