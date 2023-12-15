import { Editor } from "./components/editor";
import "./languages/languageSetup";

function App() {
  return (
    <div
      style={{
        width: 800,
        height: 500,
        border: "1px solid #999",
        overflow: "hidden",
        marginLeft: 100
      }}
    >
      <Editor />
    </div>
  );
}

export default App;
