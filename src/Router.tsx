import { Route, Routes } from "react-router";
import ColorfulRain from "./Components/ColorfulRain/ColorfulRain";
import Cyilnder from "./Components/Cylinder/Cylinder";
import Home from "./Pages/Home/Home";
import Loading from "./Components/Loading/Loading";
import NeonLightBtn from "./Components/NeonLightBtn/NeonLightBtn";
import Wavify from "./Components/Wavify/Wavify";
import ScrollEffects from "./Pages/ScrollEffects/ScrollEffectsPage";
import MenuIndicator from "./Components/MenuIndicator/MenuIndicator";

export default function Router() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/loading" element={<Loading />} />
            <Route path="/wavify" element={<Wavify />} />
            <Route path="/neonlightbtn" element={<NeonLightBtn />} />
            <Route path="/cylinder" element={<Cyilnder />} />
            <Route path="/colorfulrain" element={<ColorfulRain />} />
            <Route path="/scrolleffects" element={<ScrollEffects />} />
            <Route path="/menuindicator" element={<MenuIndicator />} />
        </Routes>
    );
}