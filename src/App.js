import "./App.css";
import Layout from "./Layout/layout";
import {BrowserRouter} from "react-router-dom"
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Layout></Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;
