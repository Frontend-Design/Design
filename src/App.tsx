import { BrowserRouter, Routes, Route } from "react-router-dom";
import ColorfulRain from "./Components/ColorfulRain/ColorfulRain";
import Cyilnder from "./Components/Cylinder/Cylinder";
import Home from "./Components/Home/Home";
import Loading from "./Components/Loading/Loading";
import NeonLightBtn from "./Components/NeonLightBtn/NeonLightBtn";
import Wavify from "./Components/Wavify/Wavify";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/loading" element={<Loading />} />
        <Route path="/wavify" element={<Wavify />} />
        <Route path="/neonlightbtn" element={<NeonLightBtn />} />
        <Route path="/cylinder" element={<Cyilnder />} />
        <Route path="/colorfulrain" element={<ColorfulRain />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
