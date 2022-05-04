import { BrowserRouter, Routes, Route } from "react-router-dom";
import { GlobalStyle } from "./Style/GlobalStyle";
import ColorfulRain from "./Components/ColorfulRain/ColorfulRain";
import Cyilnder from "./Components/Cylinder/Cylinder";
import Home from "./Components/Home/Home";
import Loading from "./Components/Loading/Loading";
import NeonLightBtn from "./Components/NeonLightBtn/NeonLightBtn";
import Wavify from "./Components/Wavify/Wavify";
import ScrollEffects from "./Pages/ScrollEffects/ScrollEffectsPage";
import Carousel from "./Components/Carousel/Carousel";
import Menubar from "./Components/ScrollEffects/Menubar/Menubar";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/loading" element={<Loading />} />
        <Route path="/wavify" element={<Wavify />} />
        <Route path="/neonlightbtn" element={<NeonLightBtn />} />
        <Route path="/cylinder" element={<Cyilnder />} />
        <Route path="/colorfulrain" element={<ColorfulRain />} />
        <Route path="/carousel" element={<Carousel />} />
        <Route path="/scrolleffects" element={<ScrollEffects />} />
        <Route path="/menubar" element={<Menubar />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
