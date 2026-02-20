import { PipelineToolbar } from "./toolbar";
import { PipelineUI } from "./ui";
import "../src/styles/pipeline-app.scss";
function App() {
    return (
        <div className="pipeline-app">
            <PipelineToolbar />
            <PipelineUI />
        </div>
    );
}

export default App;
