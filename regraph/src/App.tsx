import { Chart, Items } from "regraph";
import { data } from "./data";

function App() {
  return (
    <Chart
      items={data}
      style={{
        flex: 1,
        width: "100%",
        height: "100vh",
      }}
    />
  );
}

export default App;
