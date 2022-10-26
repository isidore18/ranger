import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Home } from "./pages/Home";
import GtoSolverApp from "./pages/GtoSolver";
import RangeBuilderApp from "./pages/RangeBuilder";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gto-solver" element={<GtoSolverApp />} />
        <Route path="/range-builder" element={<RangeBuilderApp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
