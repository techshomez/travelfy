import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import "./apps.scss";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route exact path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
