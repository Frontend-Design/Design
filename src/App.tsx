import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home/Home";
import Loading from "./Loading/Loading";
import Wavify from "./Wavify/Wavify";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/loading" element={<Loading />} />
        <Route path="/wavify" element={<Wavify />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
